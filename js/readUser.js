const userSession = sessionStorage.getItem("userSession");

// Protection de la page profil et modification nav
if(userSession === null) {
    window.location.href = "login.html";
} else {
    const profilButton = document.getElementById("profilButton");
    profilButton.href = "profil.html";
    profilButton.textContent = "Profil";
}

// Affichage d'information
const user = JSON.parse(userSession);
const userNameContent = document.getElementById("userName");
userNameContent.textContent = user.username;
const emailContent = document.getElementById("userEmail");
emailContent.textContent = user.email;

// Deconnexion
const disconnection = document.getElementById("disconnection")
disconnection.addEventListener("click", function (){
    sessionStorage.removeItem("userSession");
    window.location.href = "login.html";
});