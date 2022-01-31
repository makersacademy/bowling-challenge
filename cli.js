const ScoreCard = require("./scoreCard");
const readline = require("readline");

const scoreCard = new ScoreCard;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const scoreCardInterface = () => {
  
  rl.question("Enter pins knocked > ", (change) => {
    scoreCard.addKnockedPins(change);
    console.log(scoreCard.getTotalPoints());
    
  })
  return rl.close();
}

scoreCardInterface();