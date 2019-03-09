const sec = document.querySelector(".sec");
const min = document.querySelector(".min");
const hour = document.querySelector(".hour");
const audio = new Audio('assets/tick.mp3');
const setTime = () => {
  const time = new Date();
  const seconds = time.getSeconds();
  const secDeg = ((seconds / 60) * 360) + 90;
  const minutes = time.getMinutes();
  const minDeg = ((minutes / 60) * 360) + (secDeg / 60) + 90;
  const hours = time.getHours();
  const hourDeg = ((hours / 12) * 360) + (minDeg / 60) + 90;
  if (seconds == 0) {
    sec.style.transitionDuration = '0s';
  } else {
    sec.style.transitionDuration = '0.3s';
  }
  sec.style.transform = `rotate(${secDeg}deg)`;
  min.style.transform = `rotate(${minDeg}deg)`;
  hour.style.transform = `rotate(${hourDeg}deg)`;
  audio.play();
}
setInterval(setTime, 1000)
setTime();
