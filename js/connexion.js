class utilisateur {
    constructor(pseudo,mdp) {
        this.pseudo = pseudo;
        this.mdp = mdp;
    }
}


// Va stocker nos informations d'identification

var pseudoElt = document.getElementById("nom");

var mdpElt = document.getElementById("mdp");
localStorage.setItem('pseudo1',"leo")
localStorage.setItem('pseudo2',"corentin")
localStorage.setItem('pseudo3',"jean")
localStorage.setItem('password1',"bouchet")
localStorage.setItem('password2',"geinet")
localStorage.setItem('password3',"dupont")

listePseudo = [
    localStorage.getItem('pseudo1'),
    localStorage.getItem('pseudo2'),
    localStorage.getItem('pseudo3',)
]
listeMdp = [
    localStorage.getItem('password1'),
    localStorage.getItem('password2'),
    localStorage.getItem('password3')
]


var btn = document.getElementById("connexion");

// va verifier qu'on est enregistré quand on appuie sur le bouton connexion et renvoie si on est bien connecter à ce site ou non

btn.addEventListener('click', updateBtn)
function updateBtn(){
    if(testco(pseudoElt.value,mdpElt.value)){
        redirectionformulaire()
        alert("vous etes bien connecté(e) sur ce site")
    }
    else{
        alert("vous n'etes pas enregistré(e) sur ce site")
    }

}

function testco(pnom,pmdp){
    if(listePseudo.includes(pnom)){
        if(listeMdp.includes(pmdp)){
            return true
        }
    }
    return false
}

function redirectionformulaire(){
    document.location.href="../HTML/Accueil_Final.html";
}


// fonction pour le bouton retour vers le haut
jQuery(function(){
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200 ) { 
                $('#scrollUp').css('right','10px');
            } else { 
                $('#scrollUp').removeAttr( 'style' );
            }

        });
    });
});


