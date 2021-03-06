const fs = require('fs')
var QRCode = require('qrcode')

let rawconfig = fs.readFileSync('config.json')
let config = JSON.parse(rawconfig)
let serial = fs.readFileSync('serial.txt')
let canvas = document.getElementById('canvasqr')

if (config.firstime == true) {
  
}
 
QRCode.toCanvas(canvas, 'sample text', function (error) {
  if (error) console.error(error)
  console.log('success!');
})

