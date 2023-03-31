const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

const counter = document.querySelector("#counter");
let timeForCounter = 1;
startBtn.addEventListener("click", start);


let timerId;// может есть красивее вариант, только так придумал чтобы потом можно было
// clearTimeout  запустить 
function ticTak() {
        if (timeForCounter < 30) {
        timeForCounter++;
        counter.value = timeForCounter;  
        console.log(counter.value);
        timerId = setTimeout(ticTak, 1000);
        
    };
}  
    
function start() {    
    // timeForCounter = 0;
    // counter.value = timeForCounter;
    reset()
    // ЧТОБЫ ВИЗУАЛЬНО С 1 СТАРТОВАЛО А ТО СРАЗУ 2
    
    ticTak();   
}


stopBtn.addEventListener("click", stop);
function stop() {
    clearTimeout(timerId);
}

resetBtn.addEventListener("click", reset);
function reset() {
    clearTimeout(timerId);
    timeForCounter = 1;
    counter.value = timeForCounter;
}



