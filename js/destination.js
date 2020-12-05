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
let Caracas = new Destination("Caracas","../Image/caracas.jpg",50,"1");
let Pyongyang = new Destination("Pyongyang","../Image/pyongyang.jpg",500,"2");
let Damas = new Destination("Damas","../Image/damas.jpg",100,"3");
let Perth = new Destination("Perth","../Image/perth.jpg",700,"4");
let Acapulco = new Destination("Acapulco","../Image/acapulco.jpg",650,"5");
let Antigua= new Destination("Antigua","../Image/antigua.jpg",300,"6");

let offre = document.getElementById('offre')
let description = document.getElementsByClassName('description')

let prixcroissant = [Caracas,Damas,Antigua,Pyongyang,Acapulco,Perth];
let prixdecroissant = [Perth,Acapulco,Pyongyang,Antigua,Damas,Caracas];
let populaire = [Perth,Acapulco,Antigua,Damas,Caracas,Pyongyang];


function AfficherDesignTri(){
    document.getElementById('triage').style='display:inline'
}

function AfficherTri(){
    let lienimage = ''
    if (document.getElementById('triage').value=='1'){
        let c=0
        for(let i of prixcroissant){
            lienimage += '<a href="../HTML/réservation.html?id=' + i.id + '"><image onmouseover=flouimage(' + i.id + ');infoimage('+ c +') onmouseout=suppinfoimage(' + c +');enleveflouimage('+ i.id +') id=' + i.id + ' src= ' + i.img + '>\n <span onmouseover=flouimage(' + i.id + ');infoimage(' + c + ') onmouseout=suppinfoimage(' + c +');enleveflouimage(' + i.id +') class=description">' + i.ville + '<br>' + i.prix +'€ par jour </span></a>'
            c +=1
        }
        offre.innerHTML = lienimage
    }else if (document.getElementById('triage').value=='2'){
        let c=0
        for(let i of prixdecroissant){
            lienimage += '<a href="../HTML/réservation.html?id=' + i.id + '"><image onmouseover=flouimage(' + i.id + ');infoimage('+ c +') onmouseout=suppinfoimage(' + c +');enleveflouimage('+ i.id +') id=' + i.id + ' src= ' + i.img + '>\n <span onmouseover=flouimage(' + i.id + ');infoimage(' + c + ') onmouseout=suppinfoimage(' + c +');enleveflouimage(' + i.id +') class=description">' + i.ville + '<br>' + i.prix +'€ par jour </span></a>'
            c +=1
        }
        offre.innerHTML = lienimage
    }else if (document.getElementById('triage').value=='3'){
        let c=0
        for(let i of populaire){
            lienimage += '<a href="../HTML/réservation.html?id=' + i.id + '"><image onmouseover=flouimage(' + i.id + ');infoimage('+ c +') onmouseout=suppinfoimage(' + c +');enleveflouimage('+ i.id +') id=' + i.id + ' src= ' + i.img + '>\n <span onmouseover=flouimage(' + i.id + ');infoimage(' + c + ') onmouseout=suppinfoimage(' + c +');enleveflouimage(' + i.id +') class=description">' + i.ville + '<br>' + i.prix +'€ par jour </span></a>'
            c +=1
        }
        offre.innerHTML = lienimage
    }
}

AfficherTri()
function infoimage(i){
    description[i].style.opacity=1;
    if ((i==0) || (i==2) || (i==3) || (i==6)){ // destination de la première colonne
        description[i].style.left=0 +'%';
    } 
    if ((i==1) || (i==4) || (i==5)){ // destination de la deuxième colonne
        description[i].style.left=40 +'%';
    } 
    if (i<3){ // 1ère ligne
        description[i].style.top=30.3 +'%';
    } 
    if ((i>=3) & (i<6)){ // 2ème ligne
        description[i].style.top=60.6 +'%';
    } 
    if (i>=6){ // dernière ligne
        description[i].style.top=85+'%';
    }
}

function suppinfoimage(i){
    description[i].style.opacity=0;
}

function flouimage(i){
    document.getElementById(i).style.opacity=0.7;
}

function enleveflouimage(i){
    document.getElementById(i).style.opacity=1;
}


