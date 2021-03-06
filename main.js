const { BrowserWindow, app } = require('electron')
const url = require('url')
const fs = require('fs')

let rawconfig = fs.readFileSync("./assets/config.json")
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
    win.loadURL(`file://${__dirname}/index.html`)
}

console.log(config.sn)

app.on('ready', boot)