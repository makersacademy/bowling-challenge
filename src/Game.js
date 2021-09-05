class Frame {

  constructor () {
    this.rolls = []
    this.bonus_score = 0
    this.frameTotal = 0
  }

  addRoll(score) {
    this.rolls.push(score);
  }

  addBonusScore(bonus) {
    this.bonus_score += bonus
  }

  calcFrameTotal() {
    return this.rolls.reduce((a, b) => a + b, 0) + this.bonus_score;
  }

  setFrameTotal() {
    this.frameTotal = this.calcFrameTotal();
  }
}

class Game {
  constructor (frame = new Frame()) {
    this.frames = [];
    this.currentFrame = frame;
  }

  roll(score) {
    this.currentFrame.addRoll(score);
    if (this._isFrameComplete()) {this._completeFrame()}
  }

  scoreTotal() {
    let score = 0
    this.frames.forEach(frame => {
      score += frame.frameTotal
  });
  return score
  }

  updateFrameTotals() {
    if (this._isNotFirstFrame()) { this._addAnyBonuses()}
    this.recalculateFrameTotals();
  }

  recalculateFrameTotals() {
    this.currentFrame.calcFrameTotal() && this.currentFrame.setFrameTotal()
    if (this._isNotFirstFrame()) { this.frames.slice(-1)[0].calcFrameTotal() && this.frames.slice(-1)[0].setFrameTotal() }
    if (this.frames.length > 1) { this.frames.slice(-2)[0].calcFrameTotal() && this.frames.slice(-2)[0].setFrameTotal() }
  }

  _addAnyBonuses(){
    if (this._isStrike()) { this._addStrikeBonus() }
    else if (this._isSpare()) { this._addSpareBonus() }
  }
  
  _isNotFirstFrame() {
    if (this.frames.length >= 1)  { return true } 
    else {return false }
  }

  _completeFrame(frame = new Frame()) {
    this.updateFrameTotals();
    this.frames.push(this.currentFrame);
    this.currentFrame = frame
    if (this.frames.length == 10) {console.log("GAME OVER! You're score is: " + (this.scoreTotal())) }
  }

  _isFrameComplete() {
    if (this.currentFrame.rolls.length == 3) {return true}
    else if (this._isFrameIncomplete()) { return false }
    else if (this.currentFrame.rolls[0] == 10 ) { return true }
    else if (this.currentFrame.rolls.length == 2 ) {return true}
  }

  _isFrameIncomplete() {
    if (this.currentFrame.rolls == []) {return false}
    else if ( this.currentFrame.rolls[0] == 10 && this.frames.length == 9 ) { return true }
    else if ( (this.currentFrame.rolls[0] + this.currentFrame.rolls[1]) == 10 && this.frames.length == 9) { return true }
  }

  _isDoubleStrike() {
    return (this.frames.length > 1 && this.frames.slice(-1)[0].rolls[0] == 10 && this.frames.slice(-2)[0].rolls[0] == 10)
  }

  _isStrike() {
    if (this.frames.slice(-1)[0].rolls[0] == 10) { return true }
    else {return false}
  }

  _isSpare() {
    if (this.frames.slice(-1)[0].rolls.slice(0, 2).reduce((a, b) => a + b, 0) == 10) { return true }
  }

  _doubleStrikeBonus() {
    let additional_bonus = this.currentFrame.rolls.slice(0, 1).reduce((a, b) => a + b, 0);
    this.frames.slice(-2)[0].addBonusScore(additional_bonus)
  }

  _addStrikeBonus() {
    if (this._isDoubleStrike()) { this._doubleStrikeBonus() }
    let strikeBonus = this.currentFrame.rolls.slice(0, 2).reduce((a, b) => a + b, 0);
    this.frames.slice(-1)[0].addBonusScore(strikeBonus)
  }

  _addSpareBonus() {
    let spareBonus = this.currentFrame.rolls[0];
    this.frames.slice(-1)[0].addBonusScore(spareBonus)
  }
}

my_game = new Game;
// console.log(new_game.currentFrame.rolls)
[1,2,3,4,5,6,7,8,9,10,11, 12].forEach(function(i) {
  my_game.roll(10)
});


// my_game.roll(1)
// my_game.roll(4)

// // puts my_game.score_total

// my_game.roll(4)
// my_game.roll(5)
// // puts my_game.score_total

// my_game.roll(6)
// my_game.roll(4)
// //  puts my_game.score_total
// // puts my_game.spare_bonus?

// my_game.roll(5)
// my_game.roll(5)
// // puts my_game.score_total
// // puts my_game.spare_bonus?

// my_game.roll(10)

// my_game.roll(0)
// my_game.roll(1)

// my_game.roll(7)
// my_game.roll(3)

// my_game.roll(6)
// my_game.roll(4)

// my_game.roll(10)

// my_game.roll(2)
// my_game.roll(8)
// my_game.roll(6)

console.log(my_game.frames)
console.log(my_game.scoreTotal())