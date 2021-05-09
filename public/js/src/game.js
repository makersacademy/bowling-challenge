// eslint-disable-next-line no-unused-vars
class Game {
  constructor (frameClass = Frame) {
    this.FRAME_CLASS = frameClass
    this.TOTAL_FRAMES = 10
    this.frames = []
  }

  addRoll (pins) {
    if (this.isOver()) { throw new Error('Game Over') }
    if (this.frames.length === 0) { this._newFrame() }

    const roll = parseInt(pins, 10)
    this._validate(roll)
    this.frames.forEach((frame) => { frame.addBonus(roll) })
    this._currentFrame().addRoll(roll)

    if (this._isFinalFrame()) { return }
    if (this._currentFrame().isOver()) { this._newFrame() }
  }

  totalScore () {
    const reducer = (accumulator, currentValue) => accumulator + currentValue
    return this._scores().reduce(reducer)
  }

  scoreBoard () {
    const accumulator = ((sum) => (value) => sum += value)(0)
    return this._scores().map(accumulator)
  }

  isOver () {
    return this._isFinalFrame() && this._currentFrame().isOver()
  }

  _scores () {
    return this.frames.map((frame) => frame.score())
  }

  _currentFrame () {
    return this.frames[this.frames.length - 1]
  }

  _newFrame () {
    this.frames.push(new this.FRAME_CLASS())
    if (this._isFinalFrame()) { this._currentFrame().makeFinal() }
  }

  _isFinalFrame () {
    return this.frames.length === this.TOTAL_FRAMES
  }

  _validate (roll) {
    if (roll > 10 || roll < 0) { throw new Error('Invalid roll') }
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
