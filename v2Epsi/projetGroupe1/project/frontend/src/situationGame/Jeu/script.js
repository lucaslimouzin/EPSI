// Récupérer les éléments DOM
const scoreElement = document.getElementById("score");
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const closeButton = document.querySelector(".close");

// Score initial
let score = 0;
// je souhaite afficher le message une seule fois
let felicitationsafficher = false;

const zonesCliques = {};


const messages = {
    message1: {
        text: "En effet, la situation de la touche à l'intérieur de la cuisse souligne un problème crucial : la réalité est que les hommes sont également susceptibles de subir des agressions sexuelles au travail. Les stéréotypes de genre et le manque de sensibilisation ont longtemps contribué à sous-estimer ce problème. Selon les données du Bureau of Justice Statistics, aux États-Unis, en 2019, environ 14% des victimes d'agressions sexuelles étaient des hommes, soulignant ainsi l'importance de reconnaître et de lutter contre ce fléau, offrant un soutien nécessaire à toutes les victimes, quel que soit leur genre.",
        image: "image/UsineHF.png"
    },
    message2: {
        text: "Dans une situation où un supérieur est excessivement proche d'une femme au travail, la fixe de manière persistante, et crée un environnement de travail inconfortable, cela peut être considéré comme une forme de harcèlement sexuel. Les avances non sollicitées, les regards insistants et les comportements intrusifs sont inappropriés et peuvent contribuer à un climat de travail hostile. Selon une enquête du Centre pour l'intégrité de la politique gouvernementale et d'entreprise, environ 25% des femmes ont déclaré avoir été victimes de harcèlement sexuel au travail. Ces statistiques soulignent la persistance de ce problème et la nécessité de sensibiliser, de prévenir et de lutter contre le harcèlement sexuel sur le lieu de travail.",
        image: "image/UsineP.png"
    },
    message3: {
        text: "Dans une situation où un homme claque les fesses d'un collègue pendant qu'il se baisse, il s'agit d'une agression sexuelle inacceptable au travail, souvent perpétrée par des supérieurs ou collègues. Ces actes créent un environnement hostile et peu sûr. Selon une enquête de l'Equal Employment Opportunity Commission (EEOC), 38% des agressions sexuelles au travail sont commises par des supérieurs hiérarchiques, mettant en évidence la nécessité de promouvoir un climat de travail respectueux et de faire respecter les politiques de prévention.",
        image: "image/UsineHB.png"
    },
    message4: {
        text: "Lorsqu'un homme saisit les fesses d'un autre homme sans son consentement, il commet une agression sexuelle inacceptable. Ce comportement constitue une violation claire des limites personnelles et peut instaurer un climat de travail hostile. Les agressions sexuelles au travail doivent être condamnées.Concernant les statistiques générales sur les agressions sexuelles, elles varient d'un pays à l'autre, mais selon l'Organisation mondiale de la santé (OMS), environ 35% des femmes et 7% des hommes dans le monde ont déclaré avoir été victimes d'agressions sexuelles à un moment de leur vie. Ces chiffres mettent en évidence l'importance cruciale de la prévention et de la sensibilisation envers les agressions sexuelles.",
        image: "image/UsineVert.png"
    },
};

// Événement au clic sur une zone cliquable
document.addEventListener("click", (e) => {
    if (e.target.tagName === "AREA") {
        const zoneId = e.target.getAttribute("code");
        if (!zonesCliques[zoneId]) {
          // Récupérer le message de la zone cliquée
          const message = e.target.getAttribute("data-message-key");
          showModal(messages[message]);
          // Incrémenter le score
          score++;
          scoreElement.textContent = score;
          // Marquer la zone comme cliquée
          zonesCliques[zoneId] = true;
        }
    }
});

// Afficher la fenêtre modale avec l'effet smooth
function showModal(message) {
    // Supprimer les anciens éléments de la fenêtre modale
    while (modalMessage.firstChild) {
        modalMessage.removeChild(modalMessage.firstChild);
    }

    // Créer une balise <img> pour afficher l'image
    const image = document.createElement("img");
    image.src = message.image; // Spécifiez l'URL de l'image
    modalMessage.appendChild(image); // Ajoutez l'image en premier

    // Créer un paragraphe pour afficher le texte
    const textElement = document.createElement("p");
    textElement.textContent = message.text; // Affichez le texte
    modalMessage.appendChild(textElement); // Ajoutez le texte en dessous de l'image

    modal.classList.add("show"); // Ajoute la classe "show" pour afficher la fenêtre modale
}




// Fermer la fenêtre modale
// Fermer la fenêtre modale
closeButton.addEventListener("click", () => {
    modal.classList.remove("show"); // Retire la classe "show" pour cacher la fenêtre modale

    // Vérifier si le score est de 4 (avant de fermer la fenêtre modale)
    if (score === 4 && !felicitationsafficher) {
        const messageSpecial = "Félicitations ! Vous avez tout trouvé ! Vous pouvez repartir au bureau.";
        showModal({ text: messageSpecial, image: "image/Felicitations.png" });
        felicitationsafficher = true; // Marquer le message comme déjà affiché
    }
});
