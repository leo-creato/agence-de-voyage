// Classe pour le Formulaire
class formulaire{

    constructor(nom,prenom,mail,phone,depart,retour,nbadulte,nbenfant,){

        this.nom =nom;
        this.prenom =prenom;
        this.mail=mail;
        this.phone = phone;
        this.depart = depart;
        this.retour = retour;
        this.nbadulte = nbadulte;
        this.nbenfant = nbenfant;
        this.dej = 0
    }
    get nom() {return this.nom;}
    set nom(m) {this.nom = m;}

    set dej() {this.dej = 1}
}

//Formulaire

    //Récupérer les informations 

    let NbrAdultes= document.getElementsByName("Nombre d'adulte(s)")
    let NbrEnfants= document.getElementsByName("Nombre d'enfant(s)")

    //Afficher le Prix total

    document.getElementById("bPrix").addEventListener("click", afficherprix(100,2,1,1,1,4));
    function afficherprix(pPrix,pAdultes,pEnfants,pAnimaux,pPtitDej,pNuit) {
        console.log("")
        let PrixTotal=(pPrix*pAdultes +(4/10)*pPrix*pEnfants)*pNuit
        if (pAnimaux==1){
            PrixTotal+=10*pNuit
        }
        if (pPtitDej==1){
            PrixTotal+=12*(pAdultes +(4/10)*pEnfants)
        }
    }
        document.getElementById("zoneprix").innerHTML = PrixTotal + "Euros"

//
let.btnEnregistrermesinformations = document.querySelector("button");
console.log(btnEnregistrermesinformations);

btnEnregistrermesinformations.addEventListener("click", () => {
    //récupérer les données de mon formulaire

    let genre = document.querySelectorAll("input[name = 'genre']");

    for (i = 0; i< genre.length; i++) {
        if (genre[i].checked === true){
        leGenre = genre[i].value;
        }
    }

    //stocker les saisie
    localStorage.setItem("lastname", document.querySelector("#lastname").value)
    console.log(genre);
})