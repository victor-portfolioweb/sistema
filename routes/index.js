// routes/index.js
const express = require('express');
const router = express.Router();

// Rota principal
router.get('/', (req, res) => {
  res.render('index');
});

// Rota sobre
router.get('/about', (req, res) => {
  res.render('about');
});

// Rota de contato
router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
