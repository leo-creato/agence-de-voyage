/*API*/

const APIKEY = '8b0858cd9a4bd16d00cb60a9e87ee0ee';

/* Objet destination */

arrivee = function (x){
    if (x==1){
        return [{nom: "Caracas", prix: "50€/pers."}, apiCall("Caracas")];
    }
    if (x==2){
        return [{nom: "Damas", prix: "100€/pers."}, apiCall("Damas")];
    }
    if (x==3){
        return [{nom: "Pyongyang", prix: "125€/pers."}, apiCall("Pyongyang")];
    }
    if (x==4){
        return [{nom: "Acapulco", prix: "150€/pers."}, apiCall("Acapulco")];
    }
    if (x==5){
        return [{nom: "Antigua", prix: "99€/pers."}, apiCall("Antigua")];
    }
    if (x==6){ 
        return [{nom: "Perth", prix: "159€/pers."}, apiCall("Perth")];
    }
}

/*Slider*/

var compteurImage = 1;
var totalImage = 7;

function slider(x){ /* Fonction qui permet de faire slider nos destinations */
    var image = document.getElementById('img');

    compteurImage = compteurImage+x;

    if (compteurImage >= totalImage){
        compteurImage = 1;
    }

    if (compteurImage < 1){
        compteurImage = totalImage;
    }

    image.src = "../Image/ville"+compteurImage+".jpg";
    document.querySelector("#city").innerHTML = arrivee(compteurImage)[0].nom;
    document.querySelector("#price").innerHTML = arrivee(compteurImage)[0].prix;
}

function sliderAuto(){ /* Fonction qui permet de faire slider les destinations automatiquement */

    var image = document.getElementById('img');

    compteurImage = compteurImage+1;

    if (compteurImage >= totalImage){
        compteurImage = 1;
    }

    if (compteurImage < 1){
        compteurImage = totalImage;
    }

    image.src = "../Image/ville"+compteurImage+".jpg";
    document.querySelector("#city").innerHTML = arrivee(compteurImage)[0].nom;
    document.querySelector("#price").innerHTML = arrivee(compteurImage)[0].prix;
}

window.setInterval(sliderAuto,4500);

/* Appel API météo */

let apiCall = function(city) {

    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
        .then((response) => {
            response.json()
                .then((data) => {
                console.log(data.main.temp);
                document.querySelector("#meteo").innerHTML = parseInt(data.main.temp)+" °C"
            })
        })
}
