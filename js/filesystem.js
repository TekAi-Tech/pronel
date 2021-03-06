var fs = require("fs");
document.documentElement.style.cssText = "--main-bg-color: #022733;";

fs.readFile('config.json', (err, data) => {
    if (err) throw err;
    let config = JSON.parse(data);
    if (config.theme == 'custom') {
        console.log('si kreten debile')
    }
    if (config.first_time == '0') {
        console.log('aggggr')
    }
    console.log("Theme: " + config.theme);
});

console.log('FS done!')