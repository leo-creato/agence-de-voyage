class utilisateur {
    constructor(pseudo,mdp) {
        this.pseudo = pseudo;
        this.mdp = mdp;
    }
}

localStorage.setItem('pseudo',"leo");
localStorage.setItem('password',"bouchet");
localStorage.setItem('pseudo',"corentin");
localStorage.setItem('password',"geinet");

var Test=[
    new utilisateur("leo","bouchet"),
    new utilisateur("", "cc"),

]
    
function connexion(pseudo,passeword) {
    if 
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