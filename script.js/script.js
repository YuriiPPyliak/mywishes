let timer_show = document.getElementById("timer");

function diffSubtract(date1, date2) {
    return date2 - date1;
}

let end_date = {
    "full_year": "2023",
    "month": "03",
    "day": "06",
    "hours": "00",
    "minutes": "00",
    "seconds": "00"
}

let end_date_str = `${end_date.full_year}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;

timer = setInterval(function () {
    let now = new Date();
    let date = new Date(end_date_str);
    let ms_left = diffSubtract(now, date);
    if (ms_left <= 0) {
        clearInterval(timer);
        alert("Время закончилось");
    } else {
        let res = new Date(ms_left);
        let str_timer = `${res.getUTCDate()}d ${res.getUTCHours()}h ${res.getUTCMinutes()}m ${res.getUTCSeconds()}s`;
        timer_show.innerHTML = str_timer;
    }
}, 1000)

