

const btnStart = document.getElementById('btn-start');

btnStart.addEventListener('click', () => {
  const hours = document.getElementById('hour');
  const minutes = document.getElementById('minute');
  const seconds = document.getElementById('second');
  let display = document.getElementById('timer');

  let durationInSeconds = (parseInt(hours.value) * 60 * 60) + (parseInt(minutes.value) * 60)
  + parseInt(seconds.value);

  timer(display, durationInSeconds);
})

const timer = (display, durationInSeconds) => {
  let timer = durationInSeconds;
  let hours, minutes, seconds;
  
  let interval = setInterval(() => {
    hours = Math.floor((timer / 60) / 60);
    minutes = Math.floor(timer / 60 - (hours * 60));
    seconds = Math.floor(timer % 60);

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    display.innerHTML = `${hours}:${minutes}:${seconds}`

    timer -= 1;

    if(timer < 0){
      display.innerHTML = 'Acabou!';
      clearInterval(interval);
    }

  }, 1000);
}
