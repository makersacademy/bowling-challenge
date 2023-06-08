const express = require('express');
const app = express();
const port = 3000;

const Scorecard = require('./src/scorecard.js');
const scorecard = new Scorecard()

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bowling scorecard')
});

app.get('/scorecard', (req, res) => {
  res.send(scorecard.show())
})

app.post('/frame', (req, res) => {
  const { roll1, roll2, roll3 } = req.body;
  const rolls = [roll1, roll2, roll3].filter(roll => roll !== undefined);
  
  scorecard.addFrame(...rolls);

  res.send('Frame added')
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);
