const readline = require('readline')
const util = require('util')

const Game = require('./lib/game.js')
const Score = require('./lib/score.js')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = util.promisify(rl.question).bind(rl);
const game = new Game()
const score = new Score(game)

console.log('WELCOME TO Bowling.JS')

async function bowlingScoreCard() {
  console.log('')
  console.log(`-----> Score: ${score.total} <-----`)
  console.log('')
  try {
    const answer1 = await question('Enter first roll: ')
    const asnwer2 = await question('Enter second roll: ')
    const answer3 = await question('Enter bonus roll: ')
    
    let roll1 = parseInt(answer1)
    let roll2 = parseInt(asnwer2)
    let bonusRoll = parseInt(answer3)

    game.addRolls(roll1, roll2, bonusRoll)
    score.addToTotal()
    if (game.frames.length === 10) {
      console.log('')
      console.log(`Final Score ---> ${score.total}`)
      console.log('GAME OVER!')
      process.exit(0);
    } else {
      bowlingScoreCard()
    }
  } catch (err) {
    console.log('Error', err)
  }
}

bowlingScoreCard()