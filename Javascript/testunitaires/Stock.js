// Stock.js

class Article {
    constructor(quantite, idProduit, ean, nom, prixAchat, image, description, marque) {
        this.quantite = quantite;
        this.idProduit = idProduit;
        this.ean = ean;
        this.nom = nom;
        this.prixAchat = prixAchat;
        this.image = image;
        this.description = description;
        this.marque = marque;
    }
}

class Stock {
    constructor() {
        this.articles = [];
    }

    ajouterArticle(article) {
        this.articles.push(article);
    }

    retirerArticle(idProduit) {
        const index = this.articles.findIndex(article => article.idProduit === idProduit);
        if (index !== -1) {
            this.articles.splice(index, 1);
        }
    }

    getStock() {
        return this.articles;
    }

    // Tu peux ajouter ici d'autres méthodes si nécessaire, par exemple, pour mettre à jour la quantité d'un article
}

module.exports = { Stock, Article };
