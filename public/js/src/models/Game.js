const TOTAL_FRAMES = 10
const GAME_OVER_ERROR = 'Game Over'
const INVALID_ROLL_ERROR = 'Invalid roll'

class Game {
  constructor (scoreBoard = new ScoreBoard()) {
    this.scoreBoard = scoreBoard
    this.frames = [new Frame()]
  }

  addRoll (pins) {
    if (this.isOver()) { throw new Error(GAME_OVER_ERROR) }
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
    if (roll > TOTAL_PINS || roll < 0) { throw new Error(INVALID_ROLL_ERROR) }
    if (this._isMoreThanTotalPins(roll)) { throw new Error(INVALID_ROLL_ERROR) }
  }

  _isMoreThanTotalPins (roll) {
    return (
      roll + this._currentFrame().score() > TOTAL_PINS && !this._isBonusRoll()
    )
  }

  _isBonusRoll () {
    const strikeRoll = this._isFinalFrame() && this._currentFrame()._isStrike()
    return (strikeRoll || this._currentFrame()._isSpare())
  }
}
