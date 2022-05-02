const Scorecard = require('./scorecard');
const readLine = require('readline');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let scorecard = [[], [], [], [], [], [], [], [], [], []]
let count = 0
let roll1 = 1
let roll2 = 2
let frame = 1
  

const scores = () => {
  if (count < 9 ) {
    rl.question(`What is your score for frame ${frame} roll ${roll1}?`, (answer) => {
      scorecard[count].push(Number(answer));
      console.log(scorecard)
      if (answer != 10) {
      rl.question(`What is your score for frame ${frame} roll ${roll2}?`, (answer2) => {
        scorecard[count].push(Number(answer2));
        console.log(scorecard)
        frame += 1
        count += 1
        scores();
      })
    } else {
      frame += 1
      count += 1
      scores();
    }
  })
}

  rl.question(`What is your score for frame 10 roll ${roll1}?`, (answer) => {
    scorecard[count].push(Number(answer));
    console.log(scorecard)
    rl.question(`What is your score for frame 10 roll ${roll2}?`, (answer2) => {
      scorecard[count].push(Number(answer2));
      console.log(scorecard)
      const score = new Scorecard(scorecard)
      console.log(`Your score is ${score.finalScore()}`);
      if (Number(answer) === 10 || Number(answer) + Number(answer2) == 10) {
        rl.question(`What is your score for frame 10 roll 3?`, (answer) => {
          scorecard[count].push(Number(answer));
          console.log(scorecard)
          const score = new Scorecard(scorecard)
          console.log(`Your score is ${score.finalScore()}`);
      })}
    })
  }
  )}

scores();