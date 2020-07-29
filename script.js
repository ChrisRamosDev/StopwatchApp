const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const hh = document.querySelector('.hh');
const mm = document.querySelector('.mm');
const ss = document.querySelector('.ss');
let sec = 0;
let min = 0;
let hour = 0;
let interval;


const handleStart = () => {
  stop.classList.remove('hide')
  reset.classList.remove('hide')
  reset.disabled = true;
  stop.disabled = false;
  interval = setInterval(() => {
    sec++;
    ss.innerHTML = sec < 10 ? `0${sec}` : sec >= 60 ? '00' : sec;
    if(sec >= 60) {
      min++;
      sec = 0;
    }
    mm.innerHTML = min < 10 ? `0${min}` : min >= 60 ? '00' : min;
    if(min >= 60) {
      hour++;
      min = 0;
    }
    hh.innerHTML = hour < 10 ? `0${hour}` : hour;
  },1000);
  start.disabled = true;
};

const handleStop = () => {
  start.disabled = false;
  reset.disabled = false;
  stop.disabled = true;
  clearInterval(interval);
};

const handleReset = () => {
  hour = 0;
  min = 0;
  sec = 0;
  hh.innerHTML = '00';
  mm.innerHTML = '00';
  ss.innerHTML = '00';
}

start.addEventListener('click', handleStart);
stop.addEventListener('click', handleStop);
reset.addEventListener('click', handleReset)