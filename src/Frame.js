class Frame {

  constructor() {
    this.pins = []
  }

  add(pins) {
    this.pins.push(pins);
  }

  isComplete() {
    return this.pins.length === 2 || this.isaStrike()
  }

  result() {
    if (this.isaStrike()) {
      return 10
    } else {
      return this.pins[0] + this.pins[1]
    }
  }

  isaStrike() {
    return this.pins[0] === 10
  }

  isaSpare() {
    return !this.isaStrike() && this.result() === 10
  }

  isNotStrikeOrSpare() {
    return !this.isaSpare() && !this.isaStrike();
  }

}
