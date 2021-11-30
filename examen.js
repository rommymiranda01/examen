window.onload = function () {
    // Variables
    var usersArray=[];

    let buttPrincipal = document.querySelector('#mainButt');
    buttPrincipal.addEventListener("click", afegirUsuariPrincipal)
    let buttSec = document.querySelector('#secButt');
    buttPrincipal.addEventListener("click", afegirUsuariSec)

    //...
    
    // Funciones
    function afegirUsuariPrincipal() {
        var nom = window.prompt("Nom: ");
        var edat = window.prompt("Edat: ");
        var registre = {'id': 'mainUser', 'nom': nom, 'edat': edat};
        //usersArray.push(registre);
        localStorage.setItem(Date.now(), JSON.stringify(registre));
    }

    function guardarUserPrincipal(){
        userPrincipal.forEach(user => {
            userPrincipal.innerHTML += "Nom: "+user.nom+"    "+"Edat:"+user.edat +"<br>";
        })
    }

    guardarUserPrincipal();
    // Events
} 
