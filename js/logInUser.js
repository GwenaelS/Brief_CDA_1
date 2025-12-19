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

    let users;

    const usersFromStorage = localStorage.getItem("users");
    users = JSON.parse(usersFromStorage);

    // if (user == users) {
    // window.location.href = "profil.html";
    // } else {
    // Message d'erreur
    // }

    // Problème : comment comparé mes valeurs et celles du tableau ?
    // Problème : comment trouver l'utilisateur dans une liste d'entrée d'un tableau ?
    // Réponse : GPT une boucle for ou la méthode find

    
    const matchedUser = users.find(u => u.email === email && u.password === password);

    // window.location.href = "profil.html";
})