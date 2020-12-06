let sejour_id = new URLSearchParams(window.location.search).get("id");

let dateajd = new Date();
let datedem = new Date();

var petitdej = document.getElementsByName("Ptit_dej");

function dates(){
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

// Calcul du prix Test

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

// Calcul du prix Test

function calculerprix(pP,pE,pN,pD) {
    let PrixTot=(pP*pA+(4/10)*pP*pE)*pN
    if (pD==1) {
        PrixTot+=12*(pA + (4/10)*pE)
    }
    return PrixTot
}

function actualiser(){
    let nom = document.getElementById("lastname").value;
    let prenom = document.getElementById("firstname").value;
    let date_depart = document.getElementById("date_depart").value
    let date_arrivee = document.getElementById("date_arrivee").value;
    let pD = document.getElementById("dejo").checked; //checked si on coche et value si on tape des éléments
    let adulte = document.getElementById("adulte").value;
    let enfant = document.getElementById("enfant").value;
    let Ptit_dej = 0
    let prix = 
    if (date_depart !== null && date_depart !== null && adulte !== null && enfant !== null) {
        if (pD == true){
            Ptit_dej = 1
        }
        let PrixTotal = calculprix(prix, adulte, enfant, Ptit_dej)
        document.getElementById("ok").innerHTML = PrixTotal
    }
  
}