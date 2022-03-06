const Frame = require("./frame");

class Game {
  constructor(){
    this.frames = [];
    this.rolls = [];
  }

  roll(pins_knocked_down) {
    this.rolls.push(pins_knocked_down);
    if(pins_knocked_down == 10){
      this.createFrame(pins_knocked_down, 0);
      this.rolls = [];
    }else if(this.rolls.length == 2){
      this.createFrame(this.rolls[0],this.rolls[1]);
      this.rolls = [];
    }
    return pins_knocked_down;
  }

  score(){
    let total = 0
    this.frames.forEach((frame, index) => {
      frame.score();
      if (frame.strike){
        total += this._strikeBonus(index);
      }else if(frame.spare){
        total += this._spareBonus(index); 
      }else{
        total += frame.score() 
      }
    })
    return total;
  }

  createFrame(roll1, roll2){
    let newFrame = new Frame(roll1,roll2);
    this.frames.push(newFrame);
    return newFrame;
  }

  _strikeBonus(idx){
    if(this._nextFrame(idx).ball1 === 10){
      return 10 + this._nextFrame(idx).ball1 + this.frames[idx+2].ball1;
    }
    return 10 + this._nextFrame(idx).ball1 + this._nextFrame(idx).ball2;
  }

  _spareBonus(idx){
    return 10 + this._nextFrame(idx).ball1;
  }

  _nextFrame(idx){
    return this.frames[idx+1]
  }

}

module.exports = Game;
