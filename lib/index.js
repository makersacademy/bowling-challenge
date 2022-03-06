import LastFrame from './lastFrame.cjs'
import ScoreCard from './scorecard.cjs'
import Frame from './frame.cjs'
import readline from 'readline'
import boxen from 'boxen';
import { endianness } from 'os';

const scorecard = new ScoreCard(Frame, LastFrame)

function bowlingGame() {
  console.log("Welcome to 10 Pin Bowling")
  return new Promise((resolve) => {
    let rl = readline.createInterface({ input: process.stdin, output: process.stdout});
    rl.setPrompt('Enter Roll> ')
    console.log(renderScoreCard())
    rl.prompt();

    rl.on('line', function(line) {
      try {
        scorecard.logRoll(parseInt(line))
        console.log(`${frameText()} ${scorecard.currentFrameNumber()}: Current Score: ${scorecard.score()}`)
        console.log(renderScoreCard())
        if (scorecard.gameComplete()){
          rl.close()
        }else{
          rl.prompt()
        }
        
      } catch(e) {
        rl.close()
      }   
    }).on('close',function(){
      resolve(scorecard.score()) 
    });
  })
}

const frameText = () => {
  const currentFrame = scorecard.currentFrame()
  if (currentFrame.strikeFrame()){
    return "STRIKE! End of Frame"
  }else if (currentFrame.spareFrame()){
    return "SPARE! End of Frame"
  }else if (currentFrame.frameComplete()){
    return "End of Frame"
  }else{
    return "Next Roll"
  }
}

const renderScoreCard = () => {
  return boxen(` ${scorecard.formatFrames()} `, {title: '1     2     3     4     5     6     7     8     9     10    ', borderColor: 'yellow', borderStyle: 'round' , titleAlignment: 'center'}) 
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