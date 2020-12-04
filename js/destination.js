// Classe de nos Destinations
class Destination{
    constructor(ville,img,prix,id) { 
        this._ville=ville;
        this._img=img;
        this._prix=prix;
        this._id = id;
    }
}
// Tableau de Destination
let Caracas = new Destination("Caracas","../Image/caracas.jpg",50,1);
let Pyongyang = new Destination("Pyongyang","../Image/pyongyang.jpg",500,2);
let Damas = new Destination("Damas","../Image/damas.jpg",100,3);
let Perth = new Destination("Perth","../Image/perth.jpg",700,4);
let Acapulco = new Destination("Acapulco","../Image/acapulco.jpg",650,5);
let Antigua= new Destination("Antigua","../Image/antigua.jpg",300,6);


affichageDest() { //méthode pour afficher les destinations sur notre page html
    var ville = this._ville;
    var img = document.createElement("img"); //on crée l'endroit où l'image de notre destination sera
    var a = document.createElement("a"); //ancre pour le futur hyperlien
    var h4 = document.createElement("p");
    var block = document.getElementById(ville); //div où sera notre image
    var p = document.createElement("p");
    a.href=this._href + "?id=" + this._id; //on ajoute le lien vers notre page de réservation et on implémente l'id
    img.id=this._imagelien; //on fixe un identifiant propre à la ville pour plus tard retrouver notre image
    img.src = this._imagelien; //on donne le lien de notre image
    var url = this._weather+'&units=metric&lang=fr'
    fetch(url).then((response) =>  //utilisation de Fetch pour la température de la ville
        response.json().then((data) => {
            var temp = data.main.temp;
            p.innerText= "Prix quotidien à partir de : " + this._prix + "$ par personne\n"+ "Température actuelle ressentie : " + String(temp) + "°C";       
        })
    )
    block.appendChild(a); // on fixe notre arborescence : div > a + p > img + h4 
    block.append(p);
    a.appendChild(img);
    a.appendChild(h4);
    img.style.border="double"; //élément de décoration
    h4.innerHTML=ville; //on écrit dans notre h4 le nom de la ville
    h4.style.fontFamily="Georgia,serif";
    h4.style.textAlign="center";
    h4.style.fontSize="2em";
    h4.style.margin="0% 0% 0% 0%";
    p.style.textAlignLast="right";
    p.style.marginRight="3%";
    block.style.backgroundColor="white";
    document.getElementById(ville).style.marginLeft="4%"; //marge pour l'esthétisme
    document.getElementById(ville).style.marginRight="4%";
    document.getElementById(ville).style.marginBottom="7%";
    document.getElementById(ville).style.padding="3em";
}