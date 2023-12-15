import React from 'react';

class gestionShooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nuages: [], // Garder une liste des nuages actifs
      points: 0, // Variable d'état pour les points
      jeuLance: false, // Variable d'état pour le jeu lancé
    };
  }

  // Tableau des nuages
  nuageTypes = ["nuage", "nuage2", "nuage3", "nuage4", "nuage5", "nuage6", "nuage7", "nuage8"];

  handleClick = () => {
    if (!this.state.jeuLance) {
    var board = document.getElementById("board");

    var generatenuages = setInterval(() => {
      var nuage = document.createElement("div");

      // sélectionne un nuage aléatoirement
      var randomIndex = Math.floor(Math.random() * this.nuageTypes.length);
      var nuageType = this.nuageTypes[randomIndex];

      nuage.classList.add(nuageType);

      var nuageleft = Math.floor(Math.random() * 450) + "px";
      nuage.style.left = nuageleft;

      // change le curseur
      nuage.classList.add("clickable");

      board.appendChild(nuage);
      this.setState({ nuages: [...this.state.nuages, nuage] });
      
      // déplace le nuage 
      this.moveNuage(nuage, nuageType);
    }, 4000); // Délai de 3 secondes 
  };
  };

  moveNuage = (nuage, nuageType) => {
    var movenuage = setInterval(() => {
      var nuagetop = parseInt(
        window.getComputedStyle(nuage).getPropertyValue("top")
      );
      var nuageleft = parseInt(
        window.getComputedStyle(nuage).getPropertyValue("left")
      );

      if (nuagetop >= 475 || (nuageType === "nuage" && nuageleft >= 450)) {
        this.destroynuage(nuage); // Détruire le nuage
        clearInterval(movenuage);
      }

      nuage.style.top = nuagetop + 10 + "px"; //modifie la vitesse de déplacement des nuages
      if (nuageType === "nuage2" || nuageType === "nuage4" || nuageType === "nuage6" || nuageType === "nuage8") {
        nuage.style.left = nuageleft + "px";
      }
    }, 450);

    // Ajouter un gestionnaire d'événements pour les bonnes réponses
    if (nuageType === "nuage2" || nuageType === "nuage4" || nuageType === "nuage6" || nuageType === "nuage8") {
        nuage.addEventListener("click", () => {
            this.destroynuage(nuage); // Détruire le nuage
            this.setState({ points: this.state.points + 1 }); // +1 en cas de bonne réponse
            clearInterval(movenuage);
            if (this.state.points === 10){
              //inclure la connexion vers la base de donnée
              window.location.href ='/app.js';
            }
        });
      }
    // Ajouter un gestionnaire d'événements pour les mauvaises réponses
    if (nuageType === "nuage" || nuageType === "nuage3" || nuageType === "nuage5" || nuageType === "nuage7") {
      nuage.addEventListener("click", () => {
        alert("Game Over");
        clearInterval(movenuage);
        window.location.href = '/app.js';
      });
    }
  };
  //fonction pour détruire les nuages
  destroynuage = (nuage) => {
    const { nuages } = this.state;
    const updatednuages = nuages.filter((r) => r !== nuage);
    nuage.parentElement.removeChild(nuage);
    this.setState({ nuages: updatednuages });
  };

  render() {
    return (
      <div>
       <center>
       <button onClick={this.handleClick} disabled={this.state.jeuLance}>
            Lancez le jeu
          </button>
            <p>Points : {this.state.points}</p>
            <h3>Trouvez les déclarations fausses</h3>
       </center>
      </div>
    );
  }
}

export default gestionShooter;
