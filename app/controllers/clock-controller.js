function _drawClock() {
    var today = new Date();
    var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes()
    // var dateTime = date + ' ' + time;
    document.getElementById("date").innerText = date
    document.getElementById("time").innerText = time
}

export default class ClockController {
    constructor() {
        _drawClock();
        this.clock = setInterval(_drawClock, 1000);
    }
}