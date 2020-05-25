function _drawClock() {
    var today = new Date();
    var date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    document.getElementById("time").innerText = dateTime;
}

export default class ClockController {
    constructor() {
        _drawClock();
        this.clock = setInterval(_drawClock, 1000);
    }
}