import React, { Component } from 'react';


class InfoConsigne extends Component {
 

  render() {
    return (
      <div className="accordion">
            <nav className="accordion arrows">
            <header className="box">
                <label htmlFor="acc-close" className="box-title">Consigne</label>
            </header>
            <input type="radio" name="accordion" id="cb21" />
            <section className="box">
                <label className="box-title" htmlFor="cb21">Conditions pour gagner</label>
                <label className="box-close" htmlFor="acc-close"></label>
                <div className="box-content">L&apos;objectif est de détruitre les fausses déclarations. Pour cela il vous faudra laisser passer les bonnes réponses. Et détruire les déclarations fausses d&apos;un clic. Pour gagner il vous faudra atteindre 10 bonnes réponses.</div>
            </section>
            <input type="radio" name="accordion" id="cb22" />
            <section className="box">
                <label className="box-title" htmlFor="cb22">Game Over</label>
                <label className="box-close" htmlFor="acc-close"></label>
                <div className="box-content">Dans ce jeu, les nuages représentent des statistiques sur le harcèlement sexuel au travail. Parmis les propositions, certaines sont fausses. A vous de les détruires. Attention si jamais vous vous trompez vous perdez le jeu et vous vous retrouverez à l&apos;accueil. Bonne chance !</div>
            </section>

            <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </div>
    );
  }
}

export default InfoConsigne;
