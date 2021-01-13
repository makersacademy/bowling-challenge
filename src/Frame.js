class Frame {

  constructor() {
    this._isComplete = false;
    this.pins = []
  }

  add(pins) {
    this.pins.push(pins);
    if (this.pins.length === 2) {
      this.setComplete();
    }
  }

  setComplete() {
    this._isComplete = true;
  }

}
