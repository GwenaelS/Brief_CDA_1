// Premier code JS désolé pour vous mais j'ai besoin de note, a la fois pour comprendre et me souvenir
// Ceci a été fais a l'aide de GPT, j'ai eu énormément de mal a savoir comment commencer par ou etc...
// A partir du code fais, je compte faire les suivants avec moins d'aide puisque j'ai normalement tout les éléments a ma disposition

// Ajout cryptage du mot de passe (NEED STUDY)
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

// Permet de recuperer dans le dom l'élément dont l'id est "registerForm"
const registerForm = document.getElementById("registerForm")

// Interception du formulaire #registerForm lors de son l'envoi
// addEventListener attends une action
// L'action "submit" du formulaire #registerForm est attendu
// Execute alors la fonction "event"

// NEED STUDY ASYNC
registerForm.addEventListener("submit", async function (event) {
    // Empeche le rechargement de la page (pas sur de son utilité besoin de plus de renseignement)
    // "preventDefault() est utilisé : pour bloquer le rechargement de page et laisser JS gérer les données"
    event.preventDefault();

    // Je crée des variables auquel j'assigne les valeurs entrée par l'utilisateur dans les champs email et password via .value
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;






    const usersFromStorage = localStorage.getItem("users");

    let users = usersFromStorage ? JSON.parse(usersFromStorage) : [];
    
    const hashedPassword = await hashPassword(password);






    // Je crée un objet user et je rentre en données celle de mes variables
    const user = {
        email: email, // Erreur de ma part a ne pas refaire dans un objet pas de ";" en fin de ligne
        password: hashedPassword
    };
    
    // D'après GPT je dois verifié si des utilisateurs sont déja présent dans le localStorage
    // Sois la valeur est null, dans ce cas non pas d'utilisateurs
    // Sois la valeur est un string, il y a deja des utilisateurs
    
    // Donc si le "casier" users dans le localStorage n'existe pas (sois car clear, sois car première utilisation), alors la variable users devient un tableau utile pour plus tard
    // Autrement les données qui sont dans le localStorage sont en string JSON on a besoin de parse le format JSON pour le transformer en tableau utilisable par JS
    // Alors avec les valeurs déja présentes ou non, on ajoute désormais au tableau lisible par JS un nouvel utilisateur
    users.push(user);
    
    // Et enfin on fais l'inverse on transforme le tableau en string JSON pour l'envoyer au localStorage
    localStorage.setItem("users", JSON.stringify(users));
    
    // Redirection vers la page de connexion
    window.location.href = "login.html";
});