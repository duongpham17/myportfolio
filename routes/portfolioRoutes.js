const express = require('express')
const portfolioController = require('../controllers/portfolioController');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/', authController.protect, portfolioController.myPortfolio);
router.post('/new', authController.protect, portfolioController.newPortfolio);
router.patch('/track/:id', authController.protect, portfolioController.trackPortfolioValuation);
router.put('/add/:id', authController.protect, portfolioController.addAssetToPortfolio);
router.delete('/remove/:portId/:id', authController.protect, portfolioController.removeAsset);
router.delete('/:id', authController.protect, portfolioController.deletePortfolio);

module.exports = router