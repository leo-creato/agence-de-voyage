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

    //Afficher le Prix total

let dureeSejour=0;
function calculTotal() {

    let nbenfant = Number(document.getElementById("enfant").value);
    let nbadulte = Number(document.getElementById("adulte").value);
    let PrixTotal = Math.round(nbenfant*0,4+nbadulte);
    
        if (pPtitDej==1){
            PrixTotal += 12*(pAdultes +(4/10)*pEnfants)
        }
    }
        document.getElementById("zoneprix").innerHTML = PrixTotal + "Euros"


let dureeSejour=0;
function calculTotal() {

    let nbenfant = Number(document.getElementById("enfant").value);
    let nbadulte = Number(document.getElementById("adulte").value);
    dureeSejour = (document.querySelector('input[type="date"]#arrivee').valueAsNumber-document.querySelector('input[type="date"]#depart').valueAsNumber)/86400000 //Ecart en jour entre le départ et le retour (millisecondes a la base)
    let montant = Math.round((nbenfant*0.4+nbadulte)*prixcroi[sejour_id].prix) ; 
    if(document.getElementById('ouidej').checked){
        montant +=12*(nbmin+nbmaj);
        montant *=dureeSejour;
    }
    else{
        amount*=dureeSejour;
    }
    document.getElementById("prix").innerHTML = amount+' €';
}
calculTotal();