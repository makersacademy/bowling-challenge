class Frame {

  constructor() {
    this.rolls = [];
  }

  logRoll(pinsDowned) {
    //raise 'Pins downed must be between 0 and 10' if invalid_pins?(pins_downed)
    //raise 'Frame complete. Cannot roll again' if frame_complete?
    this.rolls.push(pinsDowned);
  }

  sumFrame() {
    return this.rolls.reduce((sum, roll) => sum + roll, 0);
  }

  allRolls() {
    return this.rolls;
  }

  frameComplete() {
    return (this.rolls.length > 1 || this.strikeFrame() == true ? true : false )
  }

  strikeFrame() {
    return (this.rolls[0] == 10 ? true : false)
  }

  spareFrame() {
    return (this.rolls[0] + this.rolls[1] == 10 ? true : false)
  }

  openFrame() {
    return (this.spareFrame() == false && this.strikeFrame() == false ? true : false)
  }
}

module.exports = Frame;

  // #invalidPins(pinsDowned) {
  //   if (pinsDowned < 0 || pinsDowned > MAX_PINS){
  //     return true
  //   }else{
  //     return false
  //   }
  // }

  // #toManyPins(pinsDowned) {
  //   if (this.frameType == "strike") {
  //     return false;
  //   }

  //   if (pinsDowned > pinsLeft()) {
  //     return true;
  //   }
  // }

  // #pinsLeft() {
  //   return 10 - this.rolls[0];
  // }