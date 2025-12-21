const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const user = {
        email: email,
        password: password
    };

    // C'est la que je dois me debrouiller, je dois regarder si les valeurs entrés correspondent au localStorage
    // Si oui alors on peut aller sur la page de profil
    // Si non on affiche un message d'erreur

    const usersFromStorage = localStorage.getItem("users");
    
    let users;

    users = JSON.parse(usersFromStorage);

    // if (user == users) {
    // window.location.href = "profil.html";
    // } else {
    // Message d'erreur
    // }

    // Problème : comment comparé mes valeurs et celles du tableau ?
    // Problème : comment trouver l'utilisateur dans une liste d'entrée d'un tableau ?
    // Réponse : GPT une boucle for ou la méthode find
    // J'opte pour la méthode find qui est plus courte et moderne, fonctionne comme une boucle for

    const matchedUser = users.find(u => u.email === email && u.password === password);
    
    if (matchedUser) {
        // Création d'une session
        sessionStorage.setItem("userSession", JSON.stringify(matchedUser));
        window.location.href = "profil.html";
    } else {
        alert("Email ou mot de passe incorrect");
    }
})