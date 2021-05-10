const TOTAL_FRAMES = 10

class Game {
  constructor (scoreBoard = new ScoreBoard()) {
    this.scoreBoard = scoreBoard
    this.frames = [new Frame()]
  }

  addRoll (pins) {
    if (this.isOver()) { throw new Error('Game Over') }
    const roll = parseInt(pins, 10)
    this._validate(roll)
    this.frames.forEach(frame => frame.addBonus(roll))
    this._currentFrame().addRoll(roll)
    this._createNewFrame()
  }

  isOver () {
    return this._isFinalFrame() && this._currentFrame().isOver()
  }

  totalScore () {
    return this.scoreBoard.calculateTotalScore(this.frames)
  }

  runningTotal () {
    return this.scoreBoard.calculateRunningTotal(this.frames)
  }

  _currentFrame () {
    return this.frames[this.frames.length - 1]
  }

  _createNewFrame () {
    if (this._currentFrame().isOver() && !this._isFinalFrame()) {
      this.frames.push(new Frame())
    }
    if (this._isFinalFrame()) { this._currentFrame().makeFinal() }
  }

  _isFinalFrame () {
    return this.frames.length === TOTAL_FRAMES
  }

  _validate (roll) {
    if (roll > TOTAL_PINS || roll < 0) { throw new Error('Invalid roll') }
    if (this._isMoreThanRemainingPins(roll)) { throw new Error('Invalid roll') }
  }

  _isMoreThanRemainingPins (roll) {
    return (
      roll + this._currentFrame().score() > TOTAL_PINS && !this._isBonusRoll()
    )
  }

  _isBonusRoll () {
    const strikeRoll = this._isFinalFrame() && this._currentFrame()._isStrike()
    return (strikeRoll || this._currentFrame()._isSpare())
  }
}
