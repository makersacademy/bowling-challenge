const prompt = require('prompt-sync')();
const Game = require('./lib/game')

class Run {
  constructor() {
    this.game = new Game;
    this.option = null;
  }

  printMenu() {
    console.log("1. Make next roll");
    console.log("2. Game results")
    console.log("0. End game"); 
    this.option = prompt("Please choose an option: ");
  }

  gameOption(option) {
    switch (option) {
      case "1":
        this.playFrame();
        break;
      case "2":
        this.gameResult();
        break;
      case "0":
        console.log("Thank you for game!")
        break;
      default:
        console.log("Incorrect option\n")
        break;
    }
  }

  playFrame() {
    console.log('Write result of first roll');
    let score = prompt();
    while(! /^\d$|(10)/.exec(Number(score))){
      console.log('try again')
      score = prompt();
    }
    console.log(this.game.makeRoll(Number(score)));
    if (score != 10){
      let frame_score = Number(score);
      console.log('Write result of second roll');
      score = prompt();
      while(! /^\d$|(10)/.exec(Number(score)) && (score + frame_score > 10)){
        console.log('try again')
        score = prompt();
      }
      console.log(this.game.makeRoll(Number(score)));
    }
    console.log(`Frame close. Total score: ${this.game.getGameResult()}`)
  }

  gameResult() {
    console.log('----------------------')
    this.game.getFrames().forEach((frame, index) => {
      console.log(`Frame ${index +1}, Rolls result - ${frame.getFrameResult()}`)      
    });
    console.log(`Total score: ${this.game.getGameResult()}`)
    console.log('----------------------')
  }

  startGame() {
    while(this.option != 0){
      this.printMenu()
      this.gameOption(this.option)
    }
  }
};

const run = new Run();
run.startGame();