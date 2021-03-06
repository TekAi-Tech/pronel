function realtimeClock() {
    var rtClock = new Date();

    var hours = rtClock.getHours();
    var minutes = rtClock.getMinutes();
    var seconds = rtClock.getSeconds();
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "SUNDAY";
    weekday[1] = "MONDAY";
    weekday[2] = "TUESDAY";
    weekday[3] = "WEDNESDAY";
    weekday[4] = "THURSDAY";
    weekday[5] = "FRIDAY";
    weekday[6] = "SATURDAY";
    var day = weekday[d.getDay()];
    var date = rtClock.getDate();
    var mon = rtClock.getMonth();

    mon = mon + 1;
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2)
    seconds = ("0" + seconds).slice(-2);


    document.getElementById('clock').innerHTML = hours + " : " + minutes + "    ";
    document.getElementById('date').innerHTML = date + "." + mon + "." + day;
    document.getElementById('date2').innerHTML = date + "." + mon + "." + day;
    var t = setTimeout(realtimeClock, 500);
}