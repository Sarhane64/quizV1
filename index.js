// Variables pour suivre la question actuelle et le score
let currentQuestion = 0;
let score = 0;

// Récupérer les éléments HTML
const questionElement = document.querySelector("#question");
const optionElements = document.querySelectorAll("input[class='rep']");
const button = document.querySelector("#start");
const container = document.querySelector(".question-container");

// Tableau de questions et réponses
const questions = [{
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        answer: "Paris",
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        options: ["Océan Atlantique", "Océan Arctique", "Océan Indien", "Océan Pacifique"],
        answer: "Océan Pacifique",
    },
];

// Fonction pour afficher la question actuelle et les réponses
const display = () => {
    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].question;

        // Mettre à jour les boutons de réponse
        for (let i = 0; i < optionElements.length; i++) {
            optionElements[i].value = questions[currentQuestion].options[i];
            optionElements[i].addEventListener("click", answer);
            optionElements[i].style.background = "";
            // Réinitialiser la couleur de fond
        }
    } else {
        // Toutes les questions ont été répondues
        questionElement.textContent = `Quiz terminé ! Votre score : ${score} / ${currentQuestion}`;
    }
};

// Fonction pour vérifier la réponse et passer à la question suivante
const answer = (e) => {
    const selectedAnswer = e.target.value;
    if (selectedAnswer === questions[currentQuestion].answer) {
        score++;
        e.target.style.background = "green";
    } else {
        console.log("Mauvaise réponse");
        e.target.style.background = "red";
    }

    // Utilisez setTimeout avec une fonction fléchée pour incrémenter currentQuestion après 2 secondes
    setTimeout(() => {
        currentQuestion++;
        display();
    }, 1000);
};

// Attachez l'événement "click" au bouton de démarrage
button.addEventListener("click", () => {
    container.style.display = "flex"; // Affichez le conteneur
    display(); // Affichez la première question
    button.style.display = "none"
    container.classList.add("question-containerTest")
});
