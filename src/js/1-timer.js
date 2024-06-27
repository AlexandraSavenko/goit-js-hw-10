import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    compareDates(selectedDates[0]);
  },
};
flatpickr('#datetime-picker', options);
let userSelectedDate = 0;

const elements = {
  button: document.querySelector('button[data-start]'),
  day: document.querySelector('[ data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]'),
};

elements.button.classList.add('inactive');
elements.button.addEventListener('click', handlerClick);

function compareDates(selectedDates) {
  const currentDate = new Date();
  if (selectedDates < currentDate) {
    alert('Please choose a date in the future');
  } else {
    userSelectedDate = selectedDates;
    elements.button.classList.remove('inactive');
  }
  console.log(userSelectedDate);
}
function handlerClick(event) {
  console.log('It works!');
  console.log(convertMs(userSelectedDate));
  return convertMs(userSelectedDate);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
