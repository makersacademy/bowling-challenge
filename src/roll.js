class Roll {
  constructor(pins) {
    if(pins < 0 || pins > 10){ throw "Invalid number of pins" }
    this.pins = pins;
  }
}