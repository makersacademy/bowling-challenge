export default class Frame {
  constructor() {
    this.rolls = [];
    this.pinsLeft = 10;
    this.result = "";
    this.score = 0;
  }

  roll(pins, bonus=false) {
    if (this.pinsLeft < pins) {throw "Not enough pins left"}
    this.rolls.push(pins);
    this.score += pins;
    if (bonus===false) {
      this.pinsLeft -= pins;
    } 
    if (this.pinsLeft===0 && this.rolls.length===1) {
      this.result = "Strike";
    } else if (this.pinsLeft===0 && this.rolls.length===2) {
      this.result = "Spare";
    }
  }

  setPins(pins = 10) {
    this.pinsLeft = pins;
  }

  addScore(num) {
    this.score += num;
  }
}

