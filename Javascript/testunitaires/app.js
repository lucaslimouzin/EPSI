// app.js

const { Panier, Article: ArticlePanier } = require('./Panier');
const { Stock, Article: ArticleStock } = require('./Stock');

// Création du panier
const panier = new Panier();
const articlePanier1 = new ArticlePanier("Produit 1", 10);
const articlePanier2 = new ArticlePanier("Produit 2", 20);

// Ajout des articles au panier et calcul du montant total
panier.ajouterArticle(articlePanier1);
panier.ajouterArticle(articlePanier2);
panier.calculerMontantTotal();

// Retirer un article et recalculer le montant total
panier.retirerArticle(articlePanier1);
panier.calculerMontantTotal();

// Vider le panier et recalculer le montant total
panier.viderPanier();
panier.calculerMontantTotal();

// Gestion des stocks
const stock = new Stock();
const articleStock1 = new ArticleStock(20, 1, '123456', 'Chaise', 100, 'image_chaise.jpg', 'Une belle chaise', 'IKEA');
const articleStock2 = new ArticleStock(15, 2, '654321', 'Table', 150, 'image_table.jpg', 'Une grande table', 'IKEA');

// Ajouter des articles au stock
stock.ajouterArticle(articleStock1);
stock.ajouterArticle(articleStock2);

// Afficher le stock
console.log("Stock actuel:", stock.getStock());

// Supposer que l'on vend une chaise
stock.retirerArticle(1); // Retire un article avec l'idProduit 1

// Afficher le stock après la vente
console.log("Stock après vente:", stock.getStock());
