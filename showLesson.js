

// showLesson.js
let button = document.getElementById("lesson");  // Il récupère le bouton par son ID = lesson
let lessonContent = document.getElementById("lesson-content"); // Il récupère la div où le contenu de la leçon sera affiché

// Il ajoute un écouteur d'événement pour le clic sur le bouton
// Si vous cliquez sur le bouton, il va changer le contenu de la div lesson-content


function showLesson() {
    // Affiche le contenu de la leçon
    lessonContent.innerHTML = "<p>Bienvenue dans le cours de Javascript !</p><p>Dans ce cours, nous allons explorer les bases du langage, y compris les variables, les fonctions, et la manipulation du DOM.</p>";
    button.textContent = "Cacher le cours"; // Change le texte du bouton
}

function hideLesson() {
    // Cache le contenu de la leçon
    lessonContent.innerHTML = "";
    button.textContent = "Lire le cours"; // Change le texte du bouton
}

function toggleLessonContent() {

        // Faire un toggle du contenu de la leçon
    if(lessonContent.innerHTML === "") {
        showLesson(); // Appelle la fonction pour afficher le contenu de la leçon
    } else {
        hideLesson(); // Appelle la fonction pour cacher le contenu de la leçon
    }
}


button.addEventListener("click", function() {

    toggleLessonContent(); // Appelle la fonction pour afficher ou cacher le contenu de la leçon

});

