const express = require('express');
const path = require('path');
const {engine} = require('express-handlebars');
const app = express();
const apiRoutes = require('./routes/apiRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', '.hbs');
app.engine('.hbs', engine({defaultLayout: false}));
app.set('views', path.join(__dirname, 'static'));

app.use(apiRoutes);

app.listen(5200, () => {
    console.log('Server has started on Port 5200')
});