* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
    color: #222;
}

header {
    background: #111;
    color: white;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
}

.hero {
    text-align: center;
    padding: 120px 20px;
}

.hero h2 {
    font-size: 45px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 20px;
    margin-bottom: 30px;
}

button {
    padding: 15px 30px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 18px;
}

footer {
    text-align: center;
    padding: 20px;
}let nombreLikes = 0;

function aimer() {
    nombreLikes++;

    document.getElementById("likes").textContent =
        nombreLikes + " J'aime";
}

function creerPublication() {
    alert("La création de publication sera disponible bientôt !");
}function afficherCommentaire() {

    const zone = document.getElementById("zone-commentaire");

    zone.style.display = "block";
}


function commenter() {

    const commentaire =
        document.getElementById("commentaire").value;

    if (commentaire.trim() === "") {
        alert("Écris un commentaire.");
        return;
    }

    const nouveauCommentaire =
        document.createElement("p");

    nouveauCommentaire.textContent =
        "💬 " + commentaire;

    document.getElementById("commentaires")
        .appendChild(nouveauCommentaire);

    document.getElementById("commentaire").value = "";
}