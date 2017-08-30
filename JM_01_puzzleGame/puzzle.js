var time = 0;
var pause = true;
var time = 0;
var d = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 0);
var d_direct = new Array([0], [2, 4], [1, 3, 5], [2, 6], [1, 5, 7], [2, 4, 6, 8], [3, 5, 9], [4, 8], [5, 7, 9], [6, 8]);
var d_posXY = new Array([0], [0, 0], [0, 150], [0, 300], [150, 0], [150, 150], [150, 300], [300, 0], [300, 150], [300, 300]);

function move(id) {
    var i = 1;
    var m = 0;
    for (i; i < 10; i++) {
        if (d[i] == id) {
            break;
        }
    }

    for (j in d_direct[i]) {
        if (d[d_direct[i][j]] == 0) {
            m = d_direct[i][j];
            break;
        } else {
            m = 0;
        }
    }
    if (m !== 0) {
        document.getElementById("block" + id).style.top = d_posXY[m][0] + 'px';
        document.getElementById("block" + id).style.left = d_posXY[m][1] + 'px';
        d[m] = d[i];
        d[i] = 0;
    }
    setTimeout(check, 300);
}

function check() {
    for (var j = 1; j < 9; j++) {
        if (j !== d[j] && j !== 9) {
            return 0;
        }
    }
    clearInterval(pause);
    alert("Finish!");
    return 1;
}

function reset() {
    var iterNum = 100;
    var k = 1;
    clearInterval(pause);
    time = 0;
    for (k; k < 10; k++) {
        if (d[k] == 0) break;
    }
    for (iterNum; iterNum > 0; iterNum--) {
        var index = Math.floor(Math.random() * d_direct[k].length);
        m = d_direct[k][index];
        d[k] = d[m];
        d[m] = 0;
        k = m;
    }
    place();
}

function place() {
    for (var k = 1; k < 10; k++) {
        if (d[k] !== 0) {
            document.getElementById("block" + d[k]).style.top = d_posXY[k][0];
            document.getElementById("block" + d[k]).style.left = d_posXY[k][1];
        }
    }
}

function start() {
    document.getElementById("start").innerHTML = "Reset";
    reset();
    timeText();
    pause = setInterval(timeText, 1000);
}

function timeText() {
    document.getElementById("timer").innerHTML = Math.floor(time / 60) + "mins " + time % 60 + "secs";
    time++;
}