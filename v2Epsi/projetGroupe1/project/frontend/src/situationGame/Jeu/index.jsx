import React, { Component } from "react";
import UsineHF from "../../assets/images/UsineHF.png";
import UsineP from "../../assets/images/UsineP.png";
import UsineHB from "../../assets/images/UsineHB.png";
import UsineVert from "../../assets/images/UsineVert.png";
import Usine from "../../assets/images/Usine2.png";
import Felicitations from "../../assets/images/Felicitations.png";
import "./styles.css";

class App extends Component {
  // Variable globale pour empêcher l'affichage de la fenêtre de félicitations
  // à chaque fois que l'utilisateur clique sur une zone

  componentDidUpdate(prevProps, prevState) {
    if (this.state.felicitationsafficher) {
      this.setState({ felicitationsafficher: false });
      this.setState({ endGame: true });
      const felicitationsMessage = this.state.messages.message5;
      this.showModal(felicitationsMessage);
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      showModal: false,
      modalMessage: "",
      felicitationsafficher: false,
      endGame: false,
      zonesCliques: {},
      messages: {
        message1: {
          text: "En effet, la situation de la touche à l'intérieur de la cuisse souligne un problème crucial : la réalité est que les hommes sont également susceptibles de subir des agressions sexuelles au travail. Les stéréotypes de genre et le manque de sensibilisation ont longtemps contribué à sous-estimer ce problème. Selon les données du Bureau of Justice Statistics, aux États-Unis, en 2019, environ 14% des victimes d'agressions sexuelles étaient des hommes, soulignant ainsi l'importance de reconnaître et de lutter contre ce fléau, offrant un soutien nécessaire à toutes les victimes, quel que soit leur genre.",
          image: UsineHF,
        },
        message2: {
          text: "Dans une situation où un supérieur est excessivement proche d'une femme au travail, la fixe de manière persistante, et crée un environnement de travail inconfortable, cela peut être considéré comme une forme de harcèlement sexuel. Les avances non sollicitées, les regards insistants et les comportements intrusifs sont inappropriés et peuvent contribuer à un climat de travail hostile. Selon une enquête du Centre pour l'intégrité de la politique gouvernementale et d'entreprise, environ 25% des femmes ont déclaré avoir été victimes de harcèlement sexuel au travail. Ces statistiques soulignent la persistance de ce problème et la nécessité de sensibiliser, de prévenir et de lutter contre le harcèlement sexuel sur le lieu de travail.",
          image: UsineP,
        },
        message3: {
          text: "Dans une situation où un homme claque les fesses d'un collègue pendant qu'il se baisse, il s'agit d'une agression sexuelle inacceptable au travail, souvent perpétrée par des supérieurs ou collègues. Ces actes créent un environnement hostile et peu sûr. Selon une enquête de l'Equal Employment Opportunity Commission (EEOC), 38% des agressions sexuelles au travail sont commises par des supérieurs hiérarchiques, mettant en évidence la nécessité de promouvoir un climat de travail respectueux et de faire respecter les politiques de prévention.",
          image: UsineHB,
        },
        message4: {
          text: "Lorsqu'un homme saisit les fesses d'un autre homme sans son consentement, il commet une agression sexuelle inacceptable. Ce comportement constitue une violation claire des limites personnelles et peut instaurer un climat de travail hostile. Les agressions sexuelles au travail doivent être condamnées.Concernant les statistiques générales sur les agressions sexuelles, elles varient d'un pays à l'autre, mais selon l'Organisation mondiale de la santé (OMS), environ 35% des femmes et 7% des hommes dans le monde ont déclaré avoir été victimes d'agressions sexuelles à un moment de leur vie. Ces chiffres mettent en évidence l'importance cruciale de la prévention et de la sensibilisation envers les agressions sexuelles.",
          image: UsineVert,
        },
        message5: {
          text: "Félicitations, vous avez terminé le jeu !",
          image: Felicitations,
        },
      },
    };
  }

  handleQuitClick = () => {
    window.location.href = "/home";
  };

  handleAreaClick = (zoneId) => {
    if (!this.state.zonesCliques[zoneId]) {
      const message = this.state.messages[`message${zoneId}`];
      this.showModal(message);

      this.setState({
        score: this.state.score + 1,
        zonesCliques: { ...this.state.zonesCliques, [zoneId]: true },
      });
    }
  };

  closeModal = () => {
    if (this.state.score === 4) {
      this.setState({ felicitationsafficher: true });
    }
    if (this.state.endGame) {
      window.location.href = "/home";
    }
    this.setState({ showModal: false });
  };

  showModal = (message) => {
    this.setState({ modalMessage: message, showModal: true });
  };

  render() {
    return (
      <div className="App">
        <div id="score-container">
          <div id="score-element">
            Score : <span id="score">{this.state.score}</span>/4
          </div>
          <h1 id="game-title">Le Secret des Collègues</h1>
          <a
            href="#"
            id="quit-button"
            style={{ color: "white" }}
            onClick={this.handleQuitClick}
          >
            Quitter
          </a>
        </div>

        <div className="center-image">
          <img
            src={Usine}
            alt="Image à cliquer"
            id="game-image"
            useMap="#image-map"
          />
        </div>
        {this.state.showModal && (
          <div className="modal-container">
            <div className="modal-content">
              <span className="close-button" onClick={this.closeModal}>
                &times;
              </span>
              <img
                src={this.state.modalMessage.image}
                alt="Image de l'usine"
                id="modal-image"
              />
              <div id="modal-text">{this.state.modalMessage.text}</div>
              <button id="modal-button" onClick={this.closeModal}>
                Fermer
              </button>
            </div>
          </div>
        )}
        <map name="image-map">
          {/* Coordonnées des zones cliquables */}
          <area
            shape="rect"
            coords="325,169,547,319"
            data-message-key="message1"
            onClick={() => this.handleAreaClick(1)}
          />
          <area
            shape="rect"
            coords="413,343,637,504"
            onClick={() => this.handleAreaClick(2)}
          />
          <area
            shape="rect"
            coords="276,435,362,612"
            data-message-key="message3"
            onClick={() => this.handleAreaClick(3)}
          />
          <area
            shape="rect"
            coords="838,118,936,278"
            data-message-key="message4"
            onClick={() => this.handleAreaClick(4)}
          />
        </map>
      </div>
    );
  }
}

export default App;
