
class utilisateur {
    constructor(pseudo,mdp) {
        this.pseudo = pseudo;
        this.mdp = mdp;
    }
}

var pseudoElt = document.getElementById("nom");

var mdpElt = document.getElementById("mdp");


monStorage = localStorage;
localStorage.setItem('pseudo1',"leo");
localStorage.setItem('password1',"bouchet");
localStorage.setItem('pseudo2',"corentin");
localStorage.setItem('password2',"geinet");


var btn = document.getElementById("connexion");

// va verifier qu'on est enregistré quand on appuie sur le bouton connexion

btn.addEventListener('click', updateBtn)
function updateBtn(){
    if(testco(pseudoElt.value,mdpElt.value)){
        redirectionformulaire()
    }
    else{
        alert(pseudoElt.value)
        alert(localStorage.getItem('pseudo1'))
    }

}

function testco(pnom,pmdp){
    let valRen = false;
    if(pnom == localStorage.getItem('pseudo1')){
        if(pmdp == localStorage.getItem('password1')){
            valRen = true;
        }
    }
    if(pnom == localStorage.getItem('pseudo2')){
        if(pmdp == localStorage.getItem('password2')){
            valRen = true;
        }
    }
}

function redirectionformulaire(){
    document.location.href="../HTML/formulaire.html";
}



