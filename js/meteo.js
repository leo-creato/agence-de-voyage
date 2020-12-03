const APIKEY = '8b0858cd9a4bd16d00cb60a9e87ee0ee';

let url = 'https://api.openweathermap.org/data/2.5/weather?q='+Caracas+'&appid='+APIKEY+'&units=metric&lang=fr';
''

fetch(url).then((response) =>
  response.json().then((data) => {
      console.log(data);
      document.querySelector('#caracas').innerHTML = data.name;
      document.querySelector('#temp').innerHTML = data.main.temp;
      document.querySelector('#humidity').innerHTML = data.main.humidity + '%';


  }
);