const fs = require('fs')

let serial = fs.readFileSync('serial.txt')

var data;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = async function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        data = JSON.parse(this.responseText);
        console.log("Info fetched successfully.")
        document.getElementById('name').innerHTML = '<h1>Welcome, ' + data[1] + '</h1>';
    }
};
xhr.open('GET', 'https://api.tekai.tech/pronel/connect/info_get/index.php?serial=' + serial, true);
xhr.send();