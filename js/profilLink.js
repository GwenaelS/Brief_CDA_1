const userSession = sessionStorage.getItem("userSession");

if (userSession){
    const profilButton = document.getElementById("profilButton");
    profilButton.href = "profil.html";
    profilButton.textContent = "Profil";
}