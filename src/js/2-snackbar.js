console.log('you can do it!');
const form = document.querySelector('.form');
form.addEventListener('submit', handlerSubmit);
function handlerSubmit(event) {
  event.preventDefault();
  const formInside = event.target;
  const delay = event.target.elements.delay.value;
  const stateF = event.target.elements.state.value;
  console.dir(formInside);
  console.log(delay);
  console.log(stateF);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (stateF === 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
  promise.then(value => alert(value)).catch(value => alert(value));
}
