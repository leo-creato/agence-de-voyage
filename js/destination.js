//Constructeur de la classe

class Destination{
    constructor(v,i,pr) { 
        this._ville=v;
        this._image=i;
        this._prix=pr;
    }
}
// Tableau de Destination
let taDestination = [
    new Destination("Caracas"," ../","50"),
    new Destination("Pyongyang","../","500"),
    new Destination("Damas","../","100"),
    new Destination("Perth","../","700"),
    new Destination("Acapulco","../","650"),
    new Destination("Damas","../","300")
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

