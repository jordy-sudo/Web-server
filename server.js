const express = require('express');
//const boostrap = require('bootswatch')
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + "/views/parciales")


app.set('view engine', 'hbs');

const PORT = process.env.PORT || 3000;

app.get('/', function(req, res) {

    res.render('home', {
        titulo: 'Home',
        nombre: 'Jordy Quilachamin',
        marca: 'Mi blog'

    });
});

// app.get('/data', (req, res) => {
//     res.send("Consultando data de BDD....");
// });


app.listen(PORT, () => {
    console.log(`Escuchando peticiones en el puerto 3000 ${PORT}`);
});