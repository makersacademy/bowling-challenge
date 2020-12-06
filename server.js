const express = require('express')
const app = express();
const port = 9292;
const scoreApi = require('./models/scoreApi')

app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    console.log(req.body)
    res.render('../views/index');
})

app.post('/', (req, res) => {
    let score = scoreApi(req.body)
    res.send(String(score))
})

app.listen(port);
console.log("App is listening at http://localhost:" + port)