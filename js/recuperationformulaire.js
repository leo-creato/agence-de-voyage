// Permet de récuperer les données enregistrées du formulaire

document.querySelector("#LeNom").innerHTML = localStorage.getItem("lastname");
document.querySelector("#LePrenom").innerHTML = localStorage.getItem("firstname");
document.querySelector("#AdresseMail").innerHTML = localStorage.getItem("adresse_mail");
document.querySelector("#NumTelephone").innerHTML = localStorage.getItem("telephone");
document.querySelector("#Adresse").innerHTML = localStorage.getItem("adresse");
document.querySelector("#DateDepart").innerHTML = localStorage.getItem("date_depart");
document.querySelector("#DateRetour").innerHTML = localStorage.getItem("date_arrivee");
document.querySelector("#NbrAdulte").innerHTML = localStorage.getItem("adulte");
document.querySelector("#NbrEnfant").innerHTML = localStorage.getItem("enfant");
document.querySelector("#Animal").innerHTML = localStorage.getItem("animal");
document.querySelector("#Ptit_Dej").innerHTML = localStorage.getItem("Ptit_dej");
document.querySelector("#destination").innerHTML = localStorage.getItem("destination");