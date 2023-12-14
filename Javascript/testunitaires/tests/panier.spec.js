const { expect } = require('chai');
const { Panier, Article } = require('../Panier');

describe('Panier', () => {
  let panier;
  let article1;
  let article2;

  beforeEach(() => {
    panier = new Panier();
    article1 = new Article('Produit 1', 10);
    article2 = new Article('Produit 2', 20);
  });

  it('devrait ajouter un article au panier', () => {
    panier.ajouterArticle(article1);
    expect(panier.articles).to.include(article1);
  });

  it('devrait retirer un article du panier', () => {
    panier.ajouterArticle(article1);
    panier.retirerArticle(article1);
    expect(panier.articles).to.not.include(article1);
  });

  it('devrait vider le panier', () => {
    panier.ajouterArticle(article1);
    panier.viderPanier();
    expect(panier.articles).to.be.empty;
  });

  it('devrait calculer le montant total du panier', () => {
    panier.ajouterArticle(article1);
    panier.ajouterArticle(article2);
    const montantTotal = panier.calculerMontantTotal();
    expect(montantTotal).to.equal(article1.prix + article2.prix);
  });
});
