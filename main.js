const { BrowserWindow, app } = require('electron')
const url = require('url')
const fs = require('fs')

let rawconfig = fs.readFileSync('config.json')
let config = JSON.parse(rawconfig)

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
    if (config.paired == false) {
        win.loadURL(`file://${__dirname}/connect.html`)
    } else {
        win.loadURL(`file://${__dirname}/index.html`)
    }
}

app.on('ready', boot)