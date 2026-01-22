const express = require('express');
const path = require('path');
const { Amigo, Jogo, Emprestimo } = require('./models');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => res.redirect('/amigos'));
app.use('/', routes);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));