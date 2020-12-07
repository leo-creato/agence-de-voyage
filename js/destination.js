// Classe de nos Destinations
class Destination{
    constructor(ville,img,prix,id) { 
        this.ville=ville;
        this.img=img;
        this.prix=prix;
        this.id = id;
    }
}
// Tableau de Destination
let Caracas = new Destination("Caracas","../Image/caracas.jpg",50,1);
let Pyongyang = new Destination("Pyongyang","../Image/pyongyang.jpg",125,2);
let Damas = new Destination("Damas","../Image/damas.jpg",100,3);
let Perth = new Destination("Perth","../Image/perth.jpg",159,4);
let Acapulco = new Destination("Acapulco","../Image/acapulco.jpg",150,5);
let Antigua= new Destination("Antigua","../Image/antigua.jpg",99,6);


// Début d'idée pour le filtrage des destinations en utilisant des listes ( pas idéal si on a des milliers de destinations )
let prixcroissant = [Caracas,Damas,Antigua,Pyongyang,Acapulco,Perth];
let prixdecroissant = [Perth,Acapulco,Pyongyang,Antigua,Damas,Caracas];
let populaire = [Perth,Acapulco,Antigua,Damas,Caracas,Pyongyang];


