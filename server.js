const express = require('express')
const app = express();
const port = 9292;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('../views/index');
})

app.listen(port);
console.log("App is listening at http://localhost:" + port)