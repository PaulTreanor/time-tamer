const fs = require('fs');
const { ipcRenderer, contextBridge } = require('electron');   // contextBridge lets you create an API that can be accessed from the renderer process



const API = {
  readFromStore: () => {
    return ipcRenderer.invoke('store/read', "Reading from store")
  },
  writeToStore: (taskList) => {
    return ipcRenderer.invoke('store/write', taskList)
  }
}


contextBridge.exposeInMainWorld("app", API)