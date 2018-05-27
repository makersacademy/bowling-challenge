const express = require('express')

const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/games', (req, res) => res.render('pages/scorecard'))

app.listen(3000, () => console.log('Bowling app started'))
