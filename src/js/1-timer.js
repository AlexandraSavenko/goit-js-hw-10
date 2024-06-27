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

function compareDates(selectedDates) {
  const currentDate = new Date();
  if (selectedDates < currentDate) {
    alert('Please choose a date in the future');
  }
}
let userSelectedDate = 0;
const elements = {
  day: document.querySelector('[ data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]'),
};
