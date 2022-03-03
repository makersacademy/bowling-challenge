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

    this.#processFrameType(pinsDowned);
    this.#processRoll(pinsDowned);
  }

  sumFrame() {
    return this.rolls.reduce((sum, roll) => sum + roll, 0);
  }

  allRolls() {
    return this.rolls;
  }

  frameComplete() {
    if (this.rolls.length > 1 || this.frameType == "strike") {
      return true;
    } else {
      return false;
    }
  }

  strikeFrame() {
    if (this.frameType == "strike") {
      return true;
    } else {
      return false;
    }
  }

  spareFrame() {
    console.log(`Spare Frame? ${this.frameType}`)
    if (this.frameType == "spare") {
      return true;
    } else {
      return false;
    }
  }

  openFrame() {
    if (this.frameType == "open") {
      return true;
    } else {
      return false;
    }
  }

  // Private methods
  #processRoll(pinsDowned) {
    this.#processSecondRoll(pinsDowned);
    this.#processFirstRoll(pinsDowned);
  }

  #processSecondRoll(pinsDowned) {
    if (this.#secondRoll() == false) {
      return;
    }
    
    //raise "Pins downed must be between 0 and #{pins_left}" if to_many_pins?(pins_downed)
    this.rolls.push(pinsDowned);
  }

  #processFirstRoll(pinsDowned) {
    if (this.#firstRoll() == false) {
      return;
    }
    this.rolls.push(pinsDowned);
  }

  #processFrameType(pinsDowned) {

    if (this.frameType != undefined) {
      return;
    }

    if (pinsDowned == 10 && this.#firstRoll() == true) {
      this.frameType = "strike";
    }

    if (this.#secondRoll()  == true && pinsDowned + this.rolls[0] == 10) {
      this.frameType = "spare";
    }

    console.log(`Second Roll? ${this.#secondRoll()}`)
    if (this.#secondRoll() == true && pinsDowned + this.rolls[0] != 10) {  
      this.frameType = "open";
    }
  }

  #secondRoll() {
    
    if (this.#firstRoll() == true) {
      return false;
    }
    if (this.rolls[1] == undefined) {
      return true;
    }

    return false;
  }

  #firstRoll() {

    if (this.rolls.length == 0) {
      return true;
    }
    return false;
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