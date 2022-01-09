const prompt = require("prompt-sync")();
const lodash = require('lodash')

const readScoreOfRoll = (rollNum, frameNum) => {
  let score = 0;
  score = parseInt(
    prompt(`Enter score for Frame-${frameNum}, Roll-${rollNum}: `),
    10
  );
  
  return score;
};

const recordScores = (listOfScores, ...values) => {
  listOfScores.push([...values]);
};

const recordTenFrames = () => {
  let frame = 1;
  let scores = [];
  while (frame < 11) {
    let score1 = readScoreOfRoll(1, frame);

    if (frame < 10) {
      if (score1 < 10) {
        let score2 = readScoreOfRoll(2, frame);
        recordScores(scores, score1, score2);
      } else if (score1 === 10) {
        recordScores(scores, 10);
      }
    }

    if (frame === 10) {
      let score2 = readScoreOfRoll(2, frame);
      if (score1 + score2 < 10) {
        recordScores(scores, score1, score2);
        break;
      }
      let score3 = readScoreOfRoll(3, frame);
      recordScores(scores, score1, score2, score3);
    }

    frame++;
  }
  return scores;
};

const calculateScore = (listOfScores) => {
  let total = 0;
  // Iterate until 9th frame
  for (let i = 0;i < 9;i++) {
    console.log(`Frame ${i + 1} - ${total}`);
    // Spare bonus
    let spare_bonus
    if (
      listOfScores[i].length === 2 &&
      (lodash.sum(listOfScores[i])) === 10
    ) {
      spare_bonus = listOfScores[i + 1][0];
      total += spare_bonus;
    }
    // Strike bonus
    else if (listOfScores[i].length === 1) {
      let strike_bonus = 0;
      if (listOfScores[i + 1].length != 1) {
        strike_bonus = lodash.sum(listOfScores[i + 1].slice(0, 2))
      } else {
        strike_bonus = lodash.sum(listOfScores[i + 1],listOfScores[i + 2][0])
      }
      total += strike_bonus;
    }
    // Frame score
    total += lodash.sum(listOfScores[i]);
  }
  total += lodash.sum(listOfScores[listOfScores.length-1])
  return total;
};

let game = recordTenFrames()
console.log(game)
console.log(calculateScore(game))