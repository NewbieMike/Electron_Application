const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');
 
let mainWindow;
let loadingScreen;

const createLoadingScreen = () => {
    loadingScreen = new BrowserWindow({
        width: 500,
        height: 500,
        frame: false
    })

    loadingScreen.setResizable(false);
    loadingScreen.loadURL(`file://${path.join(__dirname, '/loading.html')}`);

    loadingScreen.on('cloased', () => (loadingScreen=null));
    loadingScreen.webContents.on('did-finish-load', () => {
        loadingScreen.show();
    })
};
const createWindow = () => {
    mainWindow = new BrowserWindow({
        width:800,
        height:600,
        show: false,
        webPreferences: {
            nodeIntegration: true
          },
    });
    const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
 
    mainWindow.loadURL(startURL);
 
    // mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    mainWindow.webContents.on('did-finish-load', () => {
        if (loadingScreen) {
          loadingScreen.close();
        }
        mainWindow.show();
      });
}
app.on('ready', () => {
    createLoadingScreen();
    
    setTimeout(() => {
        createWindow();
      }, 2000);
});

app.on('window-all-closed', function () {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') app.quit()
  })
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) createWindow()
  })