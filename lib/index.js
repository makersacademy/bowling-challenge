const ScoreCard = require("./scorecard");
const Frame = require("./frame");
const LastFrame = require("./lastFrame");
const readline = require('readline');

const scorecard = new ScoreCard(Frame, LastFrame)


// WIP - Need to read more about Promises and how they can be effectively used here

function bowlingGame() {
  console.log("Welcome to 10 Pin Bowling")
  return new Promise((resolve) => {
    let rl = readline.createInterface({ input: process.stdin, output: process.stdout});
    rl.setPrompt('Enter Roll> ')
    rl.prompt();

    rl.on('line', function(line) {
      try {
        scorecard.logRoll(parseInt(line))
        console.log(`${isStrikeOrSpare()} :Current Score: ${scorecard.score()}`)
        rl.prompt()
    
      } catch(e) {
        rl.close()
      }   
    }).on('close',function(){
      resolve(scorecard.score()) 
    });
  })
}

const isStrikeOrSpare = () => {
  const currentFrame = scorecard.currentFrame()
  if (currentFrame.strikeFrame()){
    return "STRIKE!"
  }else if (currentFrame.spareFrame()){
    return "SPARE!"
  }else if (currentFrame.frameComplete()){
    return "End of Frame"
  }else{
    return "Next Roll"
  }

}

async function run() {
  try {
    let result = await bowlingGame()
    console.log('Game Over, you scored:', result)

  } catch(e) {
    console.log('failed:', e)
  }
}

run()