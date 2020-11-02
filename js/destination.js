//Constructeur de la classe

class Destinations{
    constructor(v,i,pr) { 
        this._ville=v;
        this._image=i;
        this._prix=pr;
    }
}
//Destinations

var Caracas = new Destinations("Caracas"," ../","50")
var Pyongyang = new Destinations("Pyongyang","../","500")
var Damas = new Destinations("Damas","../","100")

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