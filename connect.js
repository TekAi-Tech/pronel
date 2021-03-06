const fs = require('fs')
var QRCode = require('qrcode')

let rawconfig = fs.readFileSync('config.json')
let config = JSON.parse(rawconfig)
let serial = fs.readFileSync('serial.txt')
let canvas = document.getElementById('canvasqr')

if (config.firstime == true) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'https://api.tekai.tech/pronel/connect/serialregister?serial=' + serial, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
  config.firstime = false;
}

QRCode.toCanvas(canvas, 'sample text', function (error) {
  if (error) console.error(error)
  console.log('success!');
})

