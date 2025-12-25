let startTime;
let elapsedTime = 0;
let timerInterval = null;
let lapCount = 1;

function start() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateTime, 10);
    }
}

function stop() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function reset() {
    stop();
    elapsedTime = 0;
    lapCount = 1;
    document.getElementById("display").textContent = "00:00:00.000";
    document.getElementById("laps").innerHTML = "";
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    let ms = elapsedTime % 1000;
    let sec = Math.floor(elapsedTime / 1000) % 60;
    let min = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let hr = Math.floor(elapsedTime / (1000 * 60 * 60));

    document.getElementById("display").textContent =
        `${String(hr).padStart(2, '0')}:` +
        `${String(min).padStart(2, '0')}:` +
        `${String(sec).padStart(2, '0')}.` +
        `${String(ms).padStart(3, '0')}`;
}

function lap() {
    if (!timerInterval) return;

    const lapTime = document.getElementById("display").textContent;
    const li = document.createElement("li");
    li.textContent = `Lap ${lapCount++}: ${lapTime}`;
    document.getElementById("laps").appendChild(li);
}

function toggleTheme() {
    document.body.classList.toggle("dark");
}
