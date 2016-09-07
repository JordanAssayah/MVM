'use strict'

const electron = require('electron')
const path = require('path')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow
let config = {}

if (process.env.NODE_ENV === 'development') {
  config = require('../config')
  config.url = `http://localhost:${config.port}`
} else {
  config.devtron = false
  config.url = `file://${__dirname}/dist/index.html`
}

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 600,
    width: 1000,
    webPreferences: {
        webSecurity: false
    }
  })

  mainWindow.loadURL(config.url)

   if (process.env.NODE_ENV === 'development') {
    //BrowserWindow.addDevToolsExtension(path.join(__dirname, '../node_modules/devtron'))
    require('vue-devtools').install()
    //let installExtension = require('electron-devtools-installer')
    // mainWindow.webContents.openDevTools()
   }

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  console.log('mainWindow opened')
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
