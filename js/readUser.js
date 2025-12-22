const userSession = sessionStorage.getItem("userSession");

// Protection de la page profil

if(userSession === null) {
    window.location.href = "login.html";
}

// Affichage d'information

const user = JSON.parse(userSession);

const nameSpan = document.getElementById("name");
nameSpan.textContent = user.name;
const userNameSpan = document.getElementById("userName");
userName.textContent = user.username;
const emailSpan = document.getElementById("userEmail");
emailSpan.textContent = user.email;

// Deconnexion

const disconnection = document.getElementById("disconnection")

disconnection.addEventListener("click", function (){
    sessionStorage.removeItem("userSession");
    window.location.href = "login.html";
});