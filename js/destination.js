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

    