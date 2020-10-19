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

    set dej() {this.def = 1}
}