// Ajout cryptage du mot de passe (NEED STUDY)
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}


const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // C'est la que je dois me debrouiller, je dois regarder si les valeurs entrés correspondent au localStorage
    // Si oui alors on peut aller sur la page de profil
    // Si non on affiche un message d'erreur

    const usersFromStorage = localStorage.getItem("users");
    const users = usersFromStorage ? JSON.parse(usersFromStorage) : [];

    // Hash du mot de passe entré
    const hashedPassword = await hashPassword(password);

    // Problème : comment comparé mes valeurs et celles du tableau ?
    // Problème : comment trouver l'utilisateur dans une liste d'entrée d'un tableau ?
    // Réponse : GPT une boucle for ou la méthode find
    // J'opte pour la méthode find qui est plus courte et moderne, fonctionne comme une boucle for

    const matchedUser = users.find(u => u.email === email && u.password === hashedPassword);
    
    if (matchedUser) {
        // Création d'une session
        sessionStorage.setItem("userSession", JSON.stringify(matchedUser));
        window.location.href = "profil.html";
    } else {
        alert("Email ou mot de passe incorrect");
    }
})
