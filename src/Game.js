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

    let message = "GAME OVER! You're score is: ${this._completeFrame()}"
    if (this.frames.length == 10) {console.log(message)}
  }

  scoreTotal() {
    let score = 0
    this.frames.forEach(frame => {
      score += frame.frameTotal
  });
  return score
  }

  updateFrameTotals() {
    if ( this.frames.length >= 1 ) { this._addAnyBonuses()}
    this.recalculateFrameTotals();
  }

  recalculateFrameTotals() {
    this.currentFrame.calcFrameTotal() && this.currentFrame.setFrameTotal()
    // update for last frame
    // update for two frames ago
  }

  _addAnyBonuses(){
    if (this._isStrike()) { this._addStrikeBonus() }
    // add spare bonus if spare
  }

  _isNotFirstFrame() {
    this.frames.length >= 1 ? true : false
  }

  _completeFrame(frame = new Frame()) {
    this.updateFrameTotals();
    this.frames.push(this.currentFrame);
    this.currentFrame = frame
  }

  _isFrameComplete() {
    if (this.currentFrame.rolls.length == 3) {return true}
    else if (this._isFrameIncomplete()) { return false }
    else if (this.currentFrame.rolls[0] == 10 ) { return true }
    else if (this.currentFrame.rolls.length == 2 ) {return true}
  }

  _isFrameIncomplete() {
    if (this.currentFrame.rolls == []) {return false}
    else if (this.currentFrame.rolls.length == 1 ) {return true}
    else if ( this.currentFrame.rolls[0] == 10 && this.frames.length == 9 ) { return true }
    else if ( this.currentFrame.rolls[0] + this.currentFrame.rolls[1] == 10 && this.frames.length == 9) { return true }
  }

  _isDoubleStrike() {

  }

  _isStrike() {
    if (this.frames.slice(-1)[0].rolls[0] == 10) { return true }
  }

  _isSpare() {

  }

  _doubleStrikeBonus() {

  }

  _addStrikeBonus() {
    //  if doubleStrike
    // doubleStrikeBonus()
    let strikeBonus = this.currentFrame.rolls.slice(0, 1).reduce((a, b) => a + b, 0)
    this.frames.slice(-1)[0].addBonusScore(strikeBonus)
  }

  _addSpareBonus() {

  }
}

// new_game = new Game;
// new_game.roll(10)
// // console.log(new_game.currentFrame.rolls)


// new_game.roll(10)
// new_game.roll(10)
// new_game.roll(10)
// console.log(new_game.frames)
// // console.log(new_game.scoreTotal())