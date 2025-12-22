const userSession = sessionStorage.getItem("userSession");

// Protection de la page profil

if(userSession === null) {
    window.location.href = "login.html";
}

// Affichage d'information

const user = JSON.parse(userSession);

const emailSpan = document.getElementById("userEmail");
emailSpan.textContent = user.email;

// Deconnexion

const disconnection = document.getElementById("disconnection")

disconnection.addEventListener("click", function (){
    sessionStorage.removeItem("userSession");
    window.location.href = "login.html";
});