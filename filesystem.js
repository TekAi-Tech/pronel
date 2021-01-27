const fs = require('fs')

fs.rename('config.json', 'after.json', err => {
    if (err) {
        return console.error(err)
    }

    //done
})