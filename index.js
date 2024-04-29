const currentYear = new Date().getFullYear();

const footerParagraph = document.getElementById('footer-paragraph');
footerParagraph.textContent = `Created By \xA9Simphiwe ${currentYear}.`;

const year = document.getElementById('year');
year.textContent = currentYear + 1;

const daysCounter = document.getElementById('days-counter');

const hoursCounter = document.getElementById('hours-counter');

const minutesCounter = document.getElementById('minutes-counter');

const secondsCounter = document.getElementById('seconds-counter');

const newYearDate = new Date(`Jan 1 ${currentYear + 1} 00:00:00`).getTime();

updateCountdown();

function updateCountdown() {
  const currentTime = new Date().getTime();
  const gap = newYearDate - currentTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const remainingDays = Math.floor(gap / day);
  daysCounter.textContent = remainingDays;

  const remainingHours = Math.floor((gap % day) / hour);
  hoursCounter.textContent = remainingHours;

  const remainingMinutes = Math.floor((gap % hour) / minute);
  minutesCounter.textContent = remainingMinutes;

  const remainingSeconds = Math.floor((gap % minute) / second);
  secondsCounter.textContent = remainingSeconds;

  setTimeout(() => {
    updateCountdown();
  }, 1000);
}
