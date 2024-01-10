// stock.spec.js

const chai = require('chai');
const expect = chai.expect;
const { Stock, Article } = require('../Stock'); // Assure-toi d'importer correctement ta classe Stock

describe('Gestion des stocks', () => {
    let stock;
    let article1, article2;

    beforeEach(() => {
        stock = new Stock();
        article1 = new Article(50, '001', '1234567890123', 'Chaise Moderne', 45.99, 'chaise.jpg', 'Une chaise moderne pour votre salon', 'DécoPlus');
        article2 = new Article(20, '002', '9876543210987', 'Table Rustique', 129.99, 'table.jpg', 'Une table rustique en chêne', 'WoodWorks');
        stock.ajouterArticle(article1);
        stock.ajouterArticle(article2);
    });

    it('devrait retourner le stock global', () => {
        const result = stock.getStock();
        expect(result).to.be.an('array');
        expect(result).to.have.lengthOf(2);
    });

    it('devrait permettre d’ajouter un article au stock', () => {
        const article3 = new Article(10, '003', '1122334455667', 'Lampe de Bureau', 22.99, 'lampe.jpg', 'Une lampe de bureau moderne', 'Lumino');
        stock.ajouterArticle(article3);
        expect(stock.getStock()).to.include(article3);
    });

    it('devrait permettre de retirer un article du stock', () => {
        stock.retirerArticle(article1.idProduit);
        expect(stock.getStock()).to.not.include(article1);
    });

    it('devrait permettre de vérifier si un article est en stock par son ID produit', () => {
        expect(stock.getStock()).to.deep.include(article1);
    });

    // Ajouter ici d'autres tests pour couvrir les fonctionnalités telles que la mise à jour des quantités, etc.
});
