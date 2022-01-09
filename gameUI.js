const BowlingGame = require("./bowlingGame");
const { game } = require("./bowlingGame.test");

class GameUI {
  constructor(){};
  play(){
    game = new BowlingGame;
    while(!game.finished){
      
    };
  };
}