const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')

app.use(express.static('public'))
// app.use(express.static('src'))


app.get('/', function (req, res) {
    res.render('index');
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})