class Frame {
  // MAX_PINS = 10;
  // FIRST_ROLL = 0;
  // SECOND_ROLL = 1;

  constructor() {
    this.rolls = [];
    this.frame_type ;
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
    if (this.rolls.length > 1 || this.strikeFrame() == true) {
      return true;
    } else {
      return false;
    }
  }

  strikeFrame() {

    if (this.rolls[0] == 10) {
      return true;
    } else {
      return false;
    }
  }

  spareFrame() {
    if (this.rolls[0] + this.rolls[1] == 10){
      return true;
    } else {
      return false;
    }
  }

  openFrame() {
    if (this.spareFrame() == false && this.strikeFrame() == false) {
      return true;
    } else {
      return false;
    }
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