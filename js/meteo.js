const APIKEY = '8b0858cd9a4bd16d00cb60a9e87ee0ee';

function meteo(ville){
  let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville+'&appid=' + APIKEY + '&units=metric&lang=fr';
  fetch(url)
    .then(function(resp) { return resp.json() }) //convertissement des donées en java
    .then(function(data) {
      offre.innerHTML +=data.main.temp
    })
} 

meteo('caracas')
meteo('acapulco')
//meteo('perth')
//meteo('pyongyang')
//meteo('damas')
//meteo('antigua')