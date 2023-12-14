// app.js

const { Panier, Article } = require('./Panier');

const panier = new Panier();

const article1 = new Article("Produit 1", 10);
const article2 = new Article("Produit 2", 20);

panier.ajouterArticle(article1);
panier.ajouterArticle(article2);

panier.calculerMontantTotal();

panier.retirerArticle(article1);

panier.calculerMontantTotal();

panier.viderPanier();

panier.calculerMontantTotal();
