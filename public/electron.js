const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const Store = require('electron-store')


// initialise electron-store in renderer process
const store = new Store();

// Set date and tasklist if new day
if (store.get('todayDate') === undefined || store.get('todayDate') !== new Date().toDateString()) {
    store.set('todayDate', new Date().toDateString());
    store.set('taskList', [])
}


function createWindow() {
    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '../index.html'),    // path should be './index.html' for packaged version 
        protocol: 'file:',
        slashes: true,
    });
    const win = new BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }
    });
    win.loadURL(startUrl);
    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    });
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
});

ipcMain.handle("store/read", async (event, args) => {
    const data = store.get('taskList')
    return data
})

ipcMain.handle("store/write", async (event, args) => {
    console.log({ "args": args })
    store.set('taskList', args)
    return "writing to store"
})