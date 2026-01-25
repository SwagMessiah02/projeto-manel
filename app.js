const express = require('express');
const routes = require('./routes.js');
const path = require('path');
const cookieParser = require('cookie-parser')
require("dotenv/config")

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use('/', routes);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.redirect('/amigos'));

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
