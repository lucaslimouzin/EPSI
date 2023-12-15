import React from "react";
import "./styles.css";

function App() {
  return (
    <div>
      <header>
        <h1>Mon Jeu</h1>
      </header>
      <main>
        <div className="center-box">
          <h2>Bienvenue dans ce jeu</h2>
          <p>
            Dans ce jeu, vous devez regarder les différentes situations décrites
            par l&apos;image et devrez ensuite cliquer sur celle que vous pensez
            être une forme d&apos;agression.
          </p>
          <a href="playSituationGame" className="play-button">
            JOUER
          </a>
          <a href="/home" className="quit-button">
            QUITTER
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
