let Parser = require('rss-parser');
let parser = new Parser();

(async() => {

    let feed = await parser.parseURL('http://rss.cnn.com/rss/edition.rss');
    let haha = 0;


    feed.items.forEach(item => {
        if (haha <= 8) {
            document.getElementById('rss').innerHTML += '<li id="rssfeed">' + item.title + '</li>'

            haha = haha + 1;
        }
    });

    document.getElementById('rssfeed').style.color = "white";
    document.getElementById('rss').style.color = "white";
})();

function rssreload() {
    var del = document.getElementById('rssfeed');
    del.parentNode.removeChild(del);
    (async() => {

        let feed = await parser.parseURL('http://rss.cnn.com/rss/edition.rss');
        let haha = 0;

        feed.items.forEach(item => {
            if (haha <= 4) {
                document.getElementById('rss').innerHTML += '<li id="rssfeed">' + item.title + '</li>'

                haha = haha + 1;
            }
        });

        document.item.style.color = "white";


    })();
}