function showmenu() {
    document.getElementById('mainmenu').style.display = "inline";
    document.getElementById('hmrest').style.display = "inline";
    anime({
        targets: '.slideinmenu',
        left: '50%',
        easing: 'easeOutBack',

    });
}

function hidemenu() {
    anime({
        targets: '.slideinmenu',
        left: '100%',
        easing: 'easeOutBack',

    });
    setTimeout(function() {
        document.getElementById("mainmenu").style.display = "none";
        document.getElementById("hmrest").style.display = "none";
    }, 500);
}

function SpotifyUI() {
    anime({
        targets: '.slideinmenu',
        left: '100%',
        easing: 'easeOutBack',
        duration: 1000,

    });
    //  document.getElementById("HomePronel").style.display = "none";
    // document.getElementById("bottomline").style.display = "none";
    anime({
        targets: '.rowday',
        translateY: 500,
        easing: 'easeOutBack',
        duration: 2000,

    });
    anime({
        targets: '.secondrowcas',
        translateY: 500,
        easing: 'easeOutBack',
        duration: 2000,

    });
    anime({
        targets: '.container-rss',
        left: '100%',
        easing: 'easeOutBack',
        duration: 2000,

    });
    anime({
        targets: '.inforow',
        bottom: '100%',
        easing: 'easeOutBack',
        duration: 2000,

    });
    setTimeout(function() {
        document.getElementById("mainmenu").style.display = "none";
        document.getElementById("hmrest").style.display = "none";
        document.getElementById("firstrowden").style.display = "none";
        document.getElementById("rowcas").style.display = "none";
        document.getElementById("bottomline").style.display = "none";
    }, 1500);
}

function HomePronel() {
    anime({
        targets: '.spotifycon',
        width: '0%', // -> from '28px' to '100%',
        easing: 'easeOutBack',

    });
    document.getElementById("spotifyui").style.visibility = "hidden";
    document.getElementById("hiddingmenu").style.visibility = "hidden";
    document.getElementById("hmrest").style.visibility = "hidden";
    document.getElementById("tomenubtn").style.visibility = "hidden";
    document.getElementById("toprowspot").style.visibility = "hidden";
    anime({
        targets: '.container-menu',
        width: '0%', // -> from '28px' to '100%',
        easing: 'easeInOutQuad',

    });
    document.getElementById("HomePronel").style.visibility = "visible";
    anime({
        targets: '.HomePronel',
        width: '100%', // -> from '28px' to '100%',
        easing: 'easeOutBack',

    });
}


function showtoprow() {
    document.getElementById("toprowspot").style.visibility = "visible";
    anime({
        targets: '.den2',
        opacity: 1,
        easing: 'easeOutBack',

    });
    anime({
        targets: '.tomenubtn',
        opacity: 0,
        easing: 'easeOutBack',
    });
    setTimeout(function() {
        document.getElementById("tomenubtn").style.visibility = "hidden";
    }, 1000);

}

function hidemenu2() {
    anime({
        targets: '.den2',
        opacity: 0,
        easing: 'easeOutBack',

    });
    setTimeout(function() {
        document.getElementById("toprowspot").style.visibility = "hidden";
        document.getElementById("tomenubtn").style.visibility = "visible";
        anime({
            targets: '.tomenubtn',
            opacity: 1,
            easing: 'easeOutBack',
        });
    }, 1000);
}

function showmenusec() {
    document.getElementById("dropdown").style.visibility = "visible";
    document.getElementById("hiddingmenu").style.visibility = "visible";


    document.getElementById("hmrest").style.visibility = "visible";
    anime({
        targets: '.container-menu',
        width: '33%', // -> from '28px' to '100%',
        easing: 'easeOutBack',

    });

}

function ShowLockMenu() {
    document.getElementById("lockmenucon").style.display = "inline";
    anime({
        targets: '.container-lockmenu',
        bottom: '10%',
        easing: 'easeOutBack',

    });

}

function HideLockMenu() {

    anime({
        targets: '.container-lockmenu',
        bottom: '100%',
        easing: 'easeOutBack',

    });
    setTimeout(function() {
        document.getElementById("lockmenucon").style.display = "none";
    }, 500);

}