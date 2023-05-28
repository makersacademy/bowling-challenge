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
  const roll1 = req.body.roll1;
  const roll2 = req.body.roll2;
  const roll3 = req.body.roll3;

  if (roll2 === undefined) {
    scorecard.addFrame(roll1);
  } else if (roll3 === undefined) {
    scorecard.addFrame(roll1, roll2);
  } else {
    scorecard.addFrame(roll1, roll2, roll3);
  }

  res.send('Frame added')
})

console.log(`Server listening on localhost:${port}`);
app.listen(port);
