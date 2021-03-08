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

QRCode.toCanvas(canvas, 'https://pronel.tekai.tech/setup?serial=' + serial, { scale: 6 }, function (error) {
  if (error) console.error(error)
  console.log('success!');
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var success = 0;

async function check() {
<<<<<<< HEAD
    var data;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
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
=======
  if (success == 0) {
    var data;
    var xhr = await new XMLHttpRequest();
    xhr.onreadystatechange = async function () {
      if (this.readyState != 4) return;

      if (this.status == 200) {
        data = await JSON.parse(this.responseText);
        if (data == "0") {
          await sleep(700);
          console.log("...")
          check();
        } else if (data == 1) {
          success = 1;
          console.log("ProNel paired successfully.")
          window.location.href = 'initial.html';
        }
      }
    };
    await xhr.open('GET', 'https://api.tekai.tech/pronel/connect/checkconf/index.php?serial=' + serial, true);
    await xhr.send();
  }
}

check();
>>>>>>> 24053f4ce8cf7245e2cc50cd85a4d4b442827d28
