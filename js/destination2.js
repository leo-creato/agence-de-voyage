// Classe de nos Destinations
class Destination{
    constructor(id, ville, prix, href, image) { 
        this.id = id;
        this.ville=ville;
        this.prix=prix;
        this.href=href;
        this.image=image;
    }

    affichageIm(){ // Affichage des destinations sur notre page
        var ville = this.ville
        var img = document.createElement("img")
        var a = document.createElement("a")
        var reserver = document.createElement('p')
        var block = document.getElementById(ville)
        block.appendChild(a)
        img.src=this.image
        a.appendChild(img)
        a.href=this.href + "?id=" + this.id;
        img.style.height = '700px'
        img.style.width = '1500px'
    }
}
// Tableau de Destination
var Caracas = new Destination(0,'Caracas',50,'../HTML/réservation.html','../Image/caracas.jpg');
var Pyongyang = new Destination(1,'Pyongyang',500,'../HTML/réservation.html','../Image/pyongyang.jpg');
var Damas = new Destination(2,'Damas',100,'../HTML/réservation.html','../Image/damas.jpg');
var Perth = new Destination(3,'Perth',700,'../HTML/réservation.html','../Image/perth.jpg');
var Acapulco= new Destination(4,'Acapulco',650,'../HTML/réservation.html','../Image/acapulco.jpg');
var Antigua= new Destination(5,'Antigua',300,'../HTML/réservation.html','../Image/antigua.jpg');

var tab = Array(Caracas,Pyongyang,Damas,Perth,Acapulco,Antigua)

window.onload = function (){
    if (document.getElementById("Caracas")!= null){
        document.getElementById("Caracas").addEventListener("load",Caracas.affichageIm());
        document.getElementById("Pyongyang").addEventListener("load",Pyongyang.affichageIm());
        document.getElementById("Damas").addEventListener("load",Damas.affichageIm());
        document.getElementById("Perth").addEventListener("load",Perth.affichageIm());
        document.getElementById("Acapulco").addEventListener("load",Acapulco.affichageIm());
        document.getElementById("Antigua").addEventListener("load",Antigua.affichageIm());
    }
}

let prixcroissant = [Caracas,Damas,Antigua,Pyongyang,Acapulco,Perth];
let prixdecroissant = [Perth,Acapulco,Pyongyang,Antigua,Damas,Caracas];
let populaire = [Perth,Acapulco,Antigua,Damas,Caracas,Pyongyang];

function AfficherDesignTri(){
    document.getElementById('triage').style='display:inline'
}
