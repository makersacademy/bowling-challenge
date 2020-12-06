const express = require('express')
const app = express();
const port = 9292;

app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}))

app.get('/', (req, res) => {
    res.render('../views/index');
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

app.listen(port);
console.log("App is listening at http://localhost:" + port)