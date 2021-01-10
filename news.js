let Parser = require('rss-parser');
let parser = new Parser();

(async() => {

    let feed = await parser.parseURL('http://rss.cnn.com/rss/edition.rss');
    let haha = 0;
    console.log(feed.title);

    feed.items.forEach(item => {
        if (haha <= 5) {
            document.getElementById('rss').innerHTML += '<li id="rssfeed"><a href=' + item.link + '>' + item.title + '</a></li>'
            console.log(item.link);
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
        console.log(feed.title);

        feed.items.forEach(item => {
            if (haha <= 5) {
                document.getElementById('rss').innerHTML += '<li id="rssfeed"><a href=' + item.link + '>' + item.title + '</a></li>'
                console.log(item.link);
                haha = haha + 1;
            }
        });

        document.item.style.color = "white";


    })();
}