//Stockage de donnée du formulaire

let btnEnregistrermesinformations = document.querySelector("button");
console.log(btnEnregistrermesinformations);

btnEnregistrermesinformations.addEventListener("click", () => {
    //récupérer les données de mon formulaire
    let ptitdej = document.querySelectorAll("input[name = 'Ptit_dej']"); // pour le ptit dej (on doit cocher aussi)
    
    for (i = 0; i< ptitdej.length; i++) {
        if (ptitdej[i].checked === true){
        PtitDej = ptitdej[i].value;
        }
    }

    //stocker les saisies
    localStorage.setItem("lastname", document.querySelector("#lastname").value);
    localStorage.setItem("firstname", document.querySelector("#firstname").value);
    localStorage.setItem("adresse_mail", document.querySelector("#mail").value);
    localStorage.setItem("telephone", document.querySelector("#telephone").value);
    localStorage.setItem("adresse", document.querySelector("#adresse").value);
    localStorage.setItem("date_depart", document.querySelector("#date_depart").value);
    localStorage.setItem("date_arrivee", document.querySelector("#date_arrivee").value);
    localStorage.setItem("adulte", document.querySelector("#adulte").value);
    localStorage.setItem("enfant", document.querySelector("#enfant").value);
    localStorage.setItem("animal", document.querySelector("#animaux").value);
    localStorage.setItem("animal", document.querySelector("#animaux").value);
    localStorage.setItem("Ptit_dej", PtitDej)
    localStorage.setItem("destination", document.querySelector("#destination").value);


    //Récuperer les données et les afficher

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
})