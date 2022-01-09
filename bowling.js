const prompt = require("prompt-sync")();
const reducer = (a, b) => (a + b,0);

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
  let i = 0;
  while (i < 9) {
    console.log(`Frame ${i + 1} - ${total}`);
    // Spare bonus
    if (
      listOfScores[i].length === 2 &&
      listOfScores[i].reduce(reducer) === 10
    ) {
      let spare_bonus = spare_bonus[i + 1][0];
      total += spare_bonus;
    }
    // Strike bonus
    else if (listOfScores[i].length === 1) {
      let strike_bonus = 0;
      if (listOfScores[i + 1] != 1) {
        strike_bonus = listOfScores[i + 1].slice(0, 2).reduce(reducer);
      } else {
        strike_bonus = (listOfScores[i + 1], listOfScores[i + 2][0]).reduce(
          reducer
        );
      }
      total += strike_bonus;
    }
    // Frame score
    total += listOfScores[i].reduce(reducer);
    i += 1;
  }
  total += listOfScores[listOfScores.length-1].reduce(reducer);

  return total;
};

const game = recordTenFrames()
console.log(game)
// console.log(scores)
console.log(calculateScore(game))