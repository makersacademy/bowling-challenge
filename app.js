const express = require('express');
const app = express();
const port = 3000;
const Game = require('./lib/game');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
    response.render('index');
})

app.get('/play', (request, response) => {
    response.render('play', { name: request.query.name, game: new Game() })
})

app.listen(port, () => console.log(`Bownling challenge app online at http://localhost:${port}`))