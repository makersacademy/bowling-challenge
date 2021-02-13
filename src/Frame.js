class Frame {

  constructor(number) {
    this.number = number
    this.rolls = []
  }

  add_roll(pins) {
    this.rolls.push(pins)
  }

}
