function showmenu() {
    console.log('hja');
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

function GoHome() {
    document.getElementById("mainmenu").style.display = "inline";
    document.getElementById("hmrest").style.display = "inline";
    document.getElementById("firstrowden").style.display = "inline";
    document.getElementById("rowcas").style.display = "inline";
    document.getElementById("bottomline").style.display = "inline";
    document.getElementById("siderow").style.display = "inline";
    document.getElementById("spotifyui").style.display = "none";
    document.getElementById("calcbody").style.display = "none";
    document.getElementById("settings").style.display = "none";
    anime({
        targets: '.slideinmenu',
        left: '100%',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.rowday',
        opacity: '1',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.secondrowcas',
        opacity: '1',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.container-rss',
        opacity: '1',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.inforow',
        opacity: '1',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.siderow',
        opacity: '1',
        easing: 'easeOutBack',
        duration: 1000,
    });


}

function SpotifyUI() {
    document.getElementById("spotifyui").style.display = "inline";

    anime({
        targets: '.slideinmenu',
        left: '100%',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.rowday',
        opacity: '0',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.secondrowcas',
        opacity: '0',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.container-rss',
        opacity: '0',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.inforow',
        opacity: '0',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.siderow',
        opacity: '0',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.spotifycon',
        opacity: '1',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.calcbody',
        opacity: '0',
        easing: 'easeOutBack',
        duration: 1000,

    });
    setTimeout(function() {
        document.getElementById("calcbody").style.display = "none";
        document.getElementById("mainmenu").style.display = "none";
        document.getElementById("hmrest").style.display = "none";
        document.getElementById("firstrowden").style.display = "none";
        document.getElementById("rowcas").style.display = "none";
        document.getElementById("bottomline").style.display = "none";
        document.getElementById("siderow").style.display = "none";
    }, 1500);
    window.location.href = './spotify'
}

function showset() {
    window.location.href = 'settings.html';
}

function showcalc() {
    anime({
        targets: '.slideinmenu',
        left: '100%',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.rowday',
        opacity: '0',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.secondrowcas',
        opacity: '0',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.container-rss',
        opacity: '0',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.inforow',
        opacity: '0',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.siderow',
        opacity: '0',
        easing: 'easeOutBack',
        duration: 1000,

    });
    anime({
        targets: '.spotifycon',
        opacity: '0',
        easing: 'easeOutBack',
        duration: 1000,

    });

    document.getElementById("calcbody").style.display = "inline";
    anime({
        targets: '.calcbody',
        opacity: '1',
        easing: 'easeOutBack',
        duration: 1000,

    });
    setTimeout(function() {
        document.getElementById("mainmenu").style.display = "none";
        document.getElementById("hmrest").style.display = "none";
        document.getElementById("firstrowden").style.display = "none";
        document.getElementById("rowcas").style.display = "none";
        document.getElementById("bottomline").style.display = "none";
        document.getElementById("siderow").style.display = "none";
        document.getElementById("spotifyui").style.display = "none";
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

function HideLockMenucode() {

    anime({
        targets: '.container-lockmenuentercode',
        bottom: '100%',
        easing: 'easeOutBack',

    });
    setTimeout(function() {
        document.getElementById("lockmenucon").style.display = "none";
    }, 500);

}

function EnterCode() {
    document.getElementById("lockmenuconentercode").style.display = "inline";
    anime({
        targets: '.container-lockmenu',
        bottom: '100%',
        easing: 'easeOutBack',

    });
    anime({
        targets: '.container-lockmenuentercode',
        bottom: '10%',
        easing: 'easeOutBack',

    });
    setTimeout(function() {
        document.getElementById("lockmenucon").style.display = "none";
    }, 1500);
}

function setthemes() {
    document.getElementById("setthemes").style.display = "inline";
    document.getElementById("setaccount").style.display = "none";
    document.getElementById("setsecurity").style.display = "none";
    document.getElementById("setgen").style.display = "none";
}

function setsecurity() {
    document.getElementById("setsecurity").style.display = "inline";
    document.getElementById("setaccount").style.display = "none";
    document.getElementById("setthemes").style.display = "none";
    document.getElementById("setgen").style.display = "none";
}

function setaccount() {
    document.getElementById("setaccount").style.display = "inline";
    document.getElementById("setthemes").style.display = "none";
    document.getElementById("setsecurity").style.display = "none";
    document.getElementById("setgen").style.display = "none";

}

function setgen() {
    document.getElementById("setgen").style.display = "inline";
    document.getElementById("setthemes").style.display = "none";
    document.getElementById("setsecurity").style.display = "none";
    document.getElementById("setaccount").style.display = "none";
}

function arrivederci() {
    window.location.href = 'arrivederci.html';
}

function firststart() {
    window.location.href = 'firststart.html';
}

function backhome() {
    window.location.href = 'index.html';
    console.log("funguje to pico")
}