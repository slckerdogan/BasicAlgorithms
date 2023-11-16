function showTime() {

    let t = new Date();

    let hour = t.getHours();
    if (hour < 10) {
        hour = "0" + hour;
    }

    let minute = t.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }

    let second = t.getSeconds();
    if (second < 10) {
        second = "0" + second;
    }

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let time = document.querySelector("#myClock");
    time.innerHTML = hour + ":" + minute + ":" + second + " " + "<br>" + days[t.getDay()];
    setTimeout(showTime, 1000);
}
showTime();