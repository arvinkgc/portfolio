let timers = {};

function startTimer(timerId, hours, minutes, seconds) {
    if (!timers[timerId]) {
    if (hours === 0 && minutes === 0 && seconds === 0) {
    return;
    }

    timers[timerId] = {
        hours,
        minutes,
        seconds,
        interval: setInterval(updateTimer.bind(null, timerId), 1000)
        };
    }
}

function updateTimer(timerId) {
    const timer = timers[timerId];

    if (timer.hours === 0 && timer.minutes === 0 && timer.seconds === 0) {
        clearInterval(timer.interval);
        timers[timerId] = null;
        document.getElementById(`message${timerId}`).textContent = "Boss is Due!";
        return;
        }

    if (timer.seconds === 0) {
        if (timer.minutes === 0) {
            timer.hours--;
            timer.minutes = 59;
        } else {
            timer.minutes--;
        }
        timer.seconds = 59;
    } else {
        timer.seconds--;
    }

    const timeString = `${String(timer.hours).padStart(2, '0')}:${String(timer.minutes).padStart(2, '0')}:${String(timer.seconds).padStart(2, '0')}`;
    document.getElementById(`timer${timerId}`).textContent = timeString;
}

function resetTimer(timerId) {
    clearInterval(timers[timerId].interval);
    timers[timerId] = null;
    document.getElementById(`timer${timerId}`).textContent = '00:00:00';
    document.getElementById(`message${timerId}`).textContent = '';
}