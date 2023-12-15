import React, { Component } from 'react';


class InfoConsigne extends Component {
 

  render() {
    return (
      <div classNameName="accordion">
            <nav className="accordion arrows">
            <header className="box">
                <label for="acc-close" className="box-title">Consigne</label>
            </header>
            <input type="radio" name="accordion" id="cb21" />
            <section className="box">
                <label className="box-title" for="cb21">Conditions pour gagner</label>
                <label className="box-close" for="acc-close"></label>
                <div className="box-content">L'objectif est de détruitre les fausses déclarations. Pour cela il vous faudra laisser passer les bonnes réponses. Et détruire les déclarations fausses d'un clic. Pour gagner il vous faudra atteindre 10 bonnes réponses.</div>
            </section>
            <input type="radio" name="accordion" id="cb22" />
            <section className="box">
                <label className="box-title" for="cb22">Game Over</label>
                <label className="box-close" for="acc-close"></label>
                <div className="box-content">Dans ce jeu, les nuages représentent des statistiques sur le harcèlement sexuel au travail. Parmis les propositions, certaines sont fausses. A vous de les détruires. Attention si jamais vous vous trompez vous perdez le jeu et vous vous retrouverez à l'accueil. Bonne chance !</div>
            </section>

            <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </div>
    );
  }
}

export default InfoConsigne;
