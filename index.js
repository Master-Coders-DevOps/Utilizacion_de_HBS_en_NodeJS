const express = require('express');
const app = express();

/**
 *  ---------------------------------------------------------------------------------------
 * Sistema de plantillas HBS (habilitandolo por defecto en EXPRESS)
 */
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/Views/partials', function (err) { });

app.set('view engine', 'hbs');
app.set("views", __dirname + "/Views");

app.get('/', (req, res) => {
    res.render('content', {
        title: 'Contenido',
        contenido: "Master Coders"
    });
});



function main(port = 3001){
    app.listen(
        port, () => console.log(`Listening on port ${port}...`)
    );
    
}

main();