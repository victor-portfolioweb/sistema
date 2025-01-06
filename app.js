// app.js
const express = require('express');
const app = express();
const path = require('path');

// Importar as rotas
const indexRouter = require('./routes/index');

// Configurar o diretório 'public' para arquivos estáticos (CSS, JS, imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Usar as rotas definidas
app.use('/', indexRouter);

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
