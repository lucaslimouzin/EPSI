import React, { Component } from 'react';

class InfoAccordion extends Component {
 

  render() {
    return (
      <div className="accordion">
            <nav className="accordion arrows">
            <header className="box">
                <label htmlFor="acc-close" className="box-title">Ressources</label>
            </header>
            <input type="radio" name="accordion" id="cb1" />
            <section className="box">
                <label className="box-title" htmlFor="cb1">Définition de harcèlement sexuel au travail</label>
                <label className="box-close" htmlFor="acc-close"></label>
                <div className="box-content"><b>D’après l’article L1153-1 du code du travail</b>, modifié par la loi n°2021-1018 du 2 août 2021 : « Aucun salarié ne doit subir des faits :

1° Soit de harcèlement sexuel, constitué par des propos ou comportements à connotation sexuelle ou sexiste répétés qui soit portent atteinte à sa dignité en raison de leur caractère dégradant ou humiliant, soit créent à son encontre une situation intimidante, hostile ou offensante ;</div>
            </section>
            <input type="radio" name="accordion" id="cb2" />
            <section className="box">
                <label className="box-title" htmlFor="cb2">1 manager sur 3</label>
                <label className="box-close" htmlFor="acc-close"></label>
                <div className="box-content">La plupart des salariés, y compris les managers, peinent à identifier les situations relevant du harcèlement au travail
Ce sentiment est vérifié : plusieurs situations relevant du harcèlement testées dans le cadre de cette étude ne sont identifiées comme telles que par une petite partie des actifs. 43% des salariés ont un niveau « quasi nul » du sujet et seuls 4% le maitrise bien.</div>
            </section>
            <input type="radio" name="accordion" id="cb3" />
            <section className="box">
                <label className="box-title" htmlFor="cb3">Item 3</label>
                <label className="box-close" htmlFor="acc-close"></label>
                <div className="box-content">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque finibus tristique nisi, maximus ullamcorper ante finibus eget.</div>
            </section>

            <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </div>
    );
  }
}

export default InfoAccordion;
