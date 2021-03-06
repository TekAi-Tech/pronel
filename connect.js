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

<<<<<<< HEAD
QRCode.toCanvas(canvas, 'https://pronel.tekai.tech/setup?serial=' + serial, { scale: 6 }, function(error) {
    if (error) console.error(error)
    console.log('success!');
})
=======
QRCode.toCanvas(canvas, 'https://pronel.tekai.tech/setup?serial=' + serial, function (error) {
  if (error) console.error(error)
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function check() {
  var data;
  while (true) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState != 4) return;

      if (this.status == 200) {
        data = JSON.parse(this.responseText);
      }
    };

    xhr.open('GET', yourUrl, true);
    xhr.send();

    if (data == 0) {
      sleep(500);
    } else if (data == 1) {
      break;
    }
  }
  console.log("ProNel paired successfully.")
}

check();
>>>>>>> bc28f51b0cfb759fdf4686694a77fcbb7546881e
