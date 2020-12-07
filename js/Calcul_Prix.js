// Test pour le calcul du Prix mais ne focntionne pas, la fonction n'est pas complète et pb de récupération de l'id et le prix de mes destinations

let sejour_id = new URLSearchParams(window.location.search).get("id");


// Calcul du prix Test 1

let dateajd = new Date();
let datedem = new Date();

var petitdej = document.getElementsByName("Ptit_dej");

function dates(){ // Fonction pour traiter le pb de la date
     datedem.setDate(dateajd.getDate()+1);
     if (dateajd.getDate()<9){
         document.getElementById('date_depart').value= dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-0'+dateajd.getDate();
         document.getElementById('date_depart').min=dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-0'+dateajd.getDate();
         document.getElementById('date_arrivee').value=datedem.getFullYear()+'-'+(datedem.getMonth()+1)+'-0'+datedem.getDate();
         document.getElementById('date_arrivee').min=datedem.getFullYear()+'-'+(datedem.getMonth()+1)+'-0'+datedem.getDate();
     }
     else if(dateajd.getDate()==9){
         document.getElementById('date_depart').value= dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-0'+dateajd.getDate();
         document.getElementById('date_depart').min= dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-0'+dateajd.getDate();
         document.getElementById('date_arrivee').value= datedem.getFullYear()+'-'+(datedem.getMonth()+1)+'-'+datedem.getDate();
         document.getElementById('date_arrivee').min=datedem.getFullYear()+'-'+(datedem.getMonth()+1)+'-'+datedem.getDate();
     }
     else{
         document.getElementById('date_depart').value=dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-'+dateajd.getDate();
         document.getElementById('date_depart').min=dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-'+dateajd.getDate();
         document.getElementById('date_arrivee').value=datedem.getFullYear()+'-'+(datedem.getMonth()+1)+'-'+datedem.getDate();
         document.getElementById('date_arrivee').min=dateajd.getFullYear()+'-'+(dateajd.getMonth()+1)+'-'+dateajd.getDate();
     }
 }
 dates();



const villereserve = villes.find(ville => ville.id==sejour_id)

function calculPrix(){
    let nbmin = Number(document.getElementById("enfant").value);
    let nbmaj = Number(document.getElementById("adulte").value);
    prixnuit=villereserve.prix
    dureeSejour = (document.querySelector('input[type="date"]#date_arrivee').valueAsNumber-document.querySelector('input[type="date"]#depart').valueAsNumber)/86400000 //Ecart en jour entre le départ et le retour (millisecondes a la base)
    let prixtot =Math.round((nbmin*0.4+nbmaj)*prixnuit) ; 
    if(document.getElementById('dejo').checked){
        prixtot+=12*(nbmin+nbmaj);
        prixtot*=dureeSejour;
     }
     else{
          prixtot*=dureeSejour;
     }
 document.getElementById("prix").value= prixtot+' €';
}
calculPrix();

document.getElementById("numero").value=sejour_id
