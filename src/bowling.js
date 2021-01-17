'use strict';

class Bowling {

  constructor( game = new Game) {
    this.game = game;
    this.scoreArray = [];
  };

  score(scoreArray) {
    this.scoreArray = scoreArray
    this.scoresToFrames()
    this.addSpareBonuses()
    this.addStrikeBonuses()
    return this.accumulator()
  };

  scoresToFrames() {
    this.scoreArray.forEach((score, index) => {
      if( this.game.isNew() ){
        this.game.addFrame(score);
      }
      else if( this.game.currentFrame().isComplete() && this.game.notFrameTen()) {
        this.game.addFrame(score);
      }
      else {
        this.game.addRoll(score);
      };
    });
  };

  addSpareBonuses() {
    this.game.addSpareBonuses()
  };

  addStrikeBonuses() {
    this.game.addStrikeBonuses()
  };

  accumulator() {
    return this.game.cumulative()
  }

};
