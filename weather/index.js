import getWeather from './utils';

const form = document.querySelector('form');
const input = document.querySelector('input');
const loader = document.querySelector('.loader');
const main = document.querySelector('.main');
loader.style.display = 'none';

form.addEventListener('submit', function (e) {
  main.style.display = 'none';
  loader.style.display = 'block';
  getWeather(input.value).then((weather) => {
    loader.style.display = 'none';
    for (let prop in weather) {
      let div = document.querySelector(`.${prop}_div`);
      div.innerHTML = '';

      let h3 = document.createElement('h3');
      h3.innerHTML = `${weather[prop]}`;

      div.append(h3);
      main.append(div);

      console.log(prop, weather[prop]);
    }
    main.style.display = 'block';
  });

  input.value = '';

  e.preventDefault();
});

if (module.hot) {
  module.hot.accept();
}
