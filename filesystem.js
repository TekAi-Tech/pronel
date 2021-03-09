const fs = require('fs')
let rawconfig = fs.readFileSync('config.json')
let config = JSON.parse(rawconfig)

if (config.paired == false) {
    console.log("nenenene")
} else {
    console.log("anananananananooooo")
}