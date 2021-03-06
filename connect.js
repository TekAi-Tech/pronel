const fs = require('fs')
var QRCode = require('qrcode')

let rawconfig = fs.readFileSync('config.json')
let config = JSON.parse(rawconfig)
let serial = fs.readFileSync('serial.txt')
let canvas = document.getElementById('canvasqr')

try {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'https://api.tekai.tech/pronel/connect/serialregister?serial=' + serial, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
} catch (error) {
  console.log(error)
}

QRCode.toCanvas(canvas, 'https://pronel.tekai.tech/setup?serial=' + serial, function (error) {
  if (error) console.error(error)
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var success = 0;

async function check() {
  var data;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
      data = JSON.parse(this.responseText);
    }
  };

  xhr.open('GET', 'https://api.tekai.tech/pronel/connect/checkconf?serial=' + serial, true);
  xhr.send();

  if (data == 0) {
    sleep(10);
  } else if (data == 1) {
    success = 1;
    clearInterval(inter);
  }
  console.log("ProNel paired successfully.")
}

var inter = setInterval(check(), 500);
