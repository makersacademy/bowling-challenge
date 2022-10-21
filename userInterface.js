const Game = require('./game')
const prompt = require('prompt-sync')();
const Frame = require('./frame')
const TenthFrame = require('./tenthFrame')

 class UserInterface {
  constructor() {
    this.game = new Game
    this.option;
  }

  printMenu() {
    console.log("1. Play next frame");
    console.log("2. Show my score");
    console.log("3. End game"); 
    this.option = prompt("Please choose an option: ");
  }

  gameOption(option) {
    switch (option) {
      case "1":
       this.rolls();
       break;
      case "2":
        this.score();
        break;
      case "3":
        console.log("The game has finished")
        break;
      default:
        console.log("Please choose one of the listed options\n")
        break;
    }
  }

  rolls() {
    const [first, second, third] = ["first", "second", "third"]
    if(this.game.frames.length < 9) {
      let firstRoll = this.promptForScore(first)
      if(firstRoll !== 10) {
        let secondRoll = this.promptForScore(second)
        this.game.addFrame(firstRoll, secondRoll) 
      } else this.game.addFrame(firstRoll)
    } else {
      let firstRoll = this.promptForScore(first)
      if(firstRoll === 10) {
        let secondRoll = this.promptForScore(second)
        let thirdRoll = this.promptForScore(third)
        this.game.addFrame(firstRoll, secondRoll, thirdRoll)
      } else {
        let secondRoll = this.promptForScore(second)
        if(firstRoll + secondRoll === 10) {
          let thirdRoll = this.promptForScore(third)
          this.game.addFrame(firstRoll, secondRoll, thirdRoll)
        } else this.game.addFrame(firstRoll, secondRoll)
      }
    }
  }

  score() {
    console.log(this.game.calculateCurrentScore())
  }

  promptForScore(rollNumber) {
    const promptString = `Enter score for ${rollNumber} roll: `
    return parseInt(prompt(promptString))
  }

  startGame() {
    console.log("Welcome to your bowling scorecard!\n")
    console.log("The game has started.\n")
    do {
      console.log(`\nYou're on frame number ${this.game.frames.length + 1}.\n`)
      this.printMenu()
      this.gameOption(this.option)
    }
    while (this.game.frames.length <= 9 & (this.option === "1" || this.option === "2") )
    this.score()
    return;
  }
 }


const userinterface = new UserInterface
userinterface.startGame()