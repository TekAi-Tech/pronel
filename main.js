const { BrowserWindow, app } = require('electron');
const url = require('url');

let win = null

function boot() {
    console.log(process.type)
    win = new BrowserWindow({
        width: 800,
        height: 480,
        frame: false,
        skipTaskbar: true,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL(`file://${__dirname}/index.html`)
}

app.on('ready', boot);