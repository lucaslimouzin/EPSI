// panier.js

class Article {
  constructor(nom, prix) {
    this.nom = nom;
    this.prix = prix;
  }
}

class Panier {
  constructor() {
    this.articles = [];
  }

  ajouterArticle(article) {
    this.articles.push(article);
    console.log(`L'article "${article.nom}" a été ajouté au panier.`);
  }

  retirerArticle(article) {
    const index = this.articles.indexOf(article);
    if (index !== -1) {
      this.articles.splice(index, 1);
      console.log(`L'article "${article.nom}" a été retiré du panier.`);
    } else {
      console.log(`L'article "${article.nom}" n'est pas dans le panier.`);
    }
  }

  viderPanier() {
    this.articles = [];
    console.log("Le panier a été vidé.");
  }

  calculerMontantTotal() {
    const total = this.articles.reduce((acc, article) => acc + article.prix, 0);
    console.log(`Montant total du panier : ${total} euros.`);
    return total;
  }
}

module.exports = { Panier, Article };
