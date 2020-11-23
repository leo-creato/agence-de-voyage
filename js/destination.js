//Constructeur de la classe pour les destinations

class Destination{
    constructor(v,i,pr,idd) { 
        this._ville=v;
        this._image=i;
        this._prix=pr;
        this._idd = idd;
    }
}
// Tableau de Destination
let taDestination = [
    new Destination("Caracas","caracas.jpg",50,1),
    new Destination("Pyongyang","pyongyang.jpg",500,2),
    new Destination("Damas","damas.jpg",100,3),
    new Destination("Perth","perth.jpg",700,4),
    new Destination("Acapulco","acapulco.jpg",650,5),
    new Destination("Antigua","antigua.jpg",300,6)
]

//Formulaire

    //Récupérer les informations 

    let NbrAdultes= document.getElementsByName("Nombre d'adulte(s)")
    let NbrEnfants= document.getElementsByName("Nombre d'enfant(s)")

    //Afficher le Prix total

    document.getElementById("bPrix").addEventListener("click", afficherprix(100,2,1,1,1,4));
    function afficherprix(pPrix,pAdultes,pEnfants,pAnimaux,pPtitDej,pNuit) {
        console.log("Toto")
        let PrixTotal=(pPrix*pAdultes +(4/10)*pPrix*pEnfants)*pNuit
        if (pAnimaux==1){
            PrixTotal+=10*pNuit
        }
        if (pPtitDej==1){
            PrixTotal+=12*(pAdultes +(4/10)*pEnfants)
        }
    }
        document.getElementById("zoneprix").innerHTML = PrixTotal + "Euros"

