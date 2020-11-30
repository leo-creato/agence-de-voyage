//Template

const template = document.getElementById("ListeDestination")


// Stockage pour les Destinations
let template = document.querySelector("#ListeDestinations") // retourne le premier élément de liste Destination
for (const d of Destinations ) {
    let clone = document.importNode(template.content, true)  // créer une nouvelle copie du document 
    newContent = clone.firstElementChild.innerHTML
        .replace(/{{new Destination}}/g, d._ville)
        .replace(/{{prix}}/g, d._prix) 
        .replace(/{{image}}/g, d._image)
        .replace(/{{idd}}/g, d._idd) // permet de remplacer un élément du span par un élément du tableau
        clone.firstElementChild.innerHTML = newContent
        document.body.appendChild(clone);
}

// Page de Réservation
let sejour_id = new URLSearchParams(window.location.search).get("id")


// Stockage des donées pour compte(s) utilisateur

localStorage.setItem('pseudo',"leo");
localStorage.setItem('password',"bouchet");

class utilisateur {
    constructor(pseudo,mdp) {
        this.pseudo = pseudo;
        this.mdp = mdp;
    }
}

var Test=[
    new utilisateur("bouchet","leo"),
    new utilisateur("bb", "cc"),
    new utilisateur("a", "a"),