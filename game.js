class Game {

  constructor() {
    this.frames = []
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  strikeBonuses() {
    this.strikeBonus = 0;
    this.frames.forEach((x, i) => x.strike() ? this.strikeBonus += this.frames[i+1].score() : 0);
    return this.strikeBonus;
  }

  spareBonuses() {
    this.spareBonus = 0;
    this.frames.forEach((x, i) => x.spare() ? this.spareBonus += this.frames[i+1].rolls[0] : 0);
    return this.spareBonus;
  }

  lastFrameBonuses() {
    this.lastFrameBonus = 0;
    if (this.frames.last.rolls[0] === 10) {
      
    }
  }

  totalScore() {
    let total = 0;
    this.frames.forEach(x => total += x.score());
    return total + this.strikeBonuses() + this.spareBonuses();
  }
}


module.exports = Game;


// const Frame = require('./frame')

// const frame1 = new Frame;
// frame1.addRoll(0);
// frame1.addRoll(0);

// const frame2 = new Frame;
// frame2.addRoll(0);
// frame2.addRoll(0);

// const frame3 = new Frame;
// frame3.addRoll(0);
// frame3.addRoll(0);

// const frame4 = new Frame;
// frame4.addRoll(5);
// frame4.addRoll(5);

// const frame5 = new Frame;
// frame5.addRoll(5);
// frame5.addRoll(2);

// const frame6 = new Frame;
// frame6.addRoll(6);
// frame6.addRoll(4);

// const frame7 = new Frame;
// frame7.addRoll(3);
// frame7.addRoll(4);

// const frame8 = new Frame;
// frame8.addRoll(0);
// frame8.addRoll(0);

// const frame9 = new Frame;
// frame9.addRoll(0);
// frame9.addRoll(0);

// const frame10 = new Frame;
// frame10.addRoll(0);
// frame10.addRoll(0);

// const game = new Game;
// game.addFrame(frame1);
// game.addFrame(frame2);
// game.addFrame(frame3);
// game.addFrame(frame4);
// game.addFrame(frame5);
// game.addFrame(frame6);
// game.addFrame(frame7);
// game.addFrame(frame8);
// game.addFrame(frame9);
// game.addFrame(frame10);

// console.log(game.spareBonuses());