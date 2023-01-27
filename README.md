# Time tamer 
An enjoyable time tracking app to help you manage your work day.


# Details
- Built with Electron and React 
- Time is tracked with self correcting setTimeout
- Script to build, package and publish app to github releases [ TODO ]
- Local storage accessed with electron-store

# Features
- ~~Add tasks~~
- ~~Play or pause tasks~~
- Tasks can be deleted by right clicking on them and selecting delete  [ TODO ]
- Tasks can be edited by right clicking on them and selecting edit  [ TODO ]
- ~~Only 1 task can be played at a time~~
- ~~Only 5 tasks can be added at a time~~
- ~~All times reset at 12:00am each day~~
- ~~Current task is saved to local storage~~
- Daily total times logged to Google Sheets/CSV [ TODO ]

# Tests 
- Test accuracy of timer [ TODO ]
- Electron app launches correctly [ TODO ]
- Electron app can be packaged [ TODO ] 
- App formats time correctly [ TODO ]
- App can be played and paused [ TODO ]
- tasks can be edited [ TODO ]
- tasks can be deleted [ TODO ]
- tasks can be added [ TODO ]
- Total time is calculated correctly [ TODO ]

# Running the app 
### Run locally 
``` bash 
npm start  # This will break in browser but will work in electron
npm run start-electron
```

### To create a local package;

```bash 
npm run build
npm run package
```


### Starting resource 
https://blog.devgenius.io/how-to-build-and-publish-an-electron-app-with-react-tutorial-971e1d9d27ce