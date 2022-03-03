const Frame = require("../lib/frame");

class LastFrame extends Frame {


  constructor() {
    super()
  }

  frameComplete() {
    if (this.#bonusFrame() == true){
      if (this.rolls.length == 3) {
        return true
      }
    }
    super.frameComplete()
  }

  logRoll(pinsDowned){
    // raise 'Pins downed must be between 0 and 10' if invalid_pins?(pins_downed)
    // raise 'Frame complete. Cannot roll again' if frame_complete?
    super._processFrameType(pinsDowned)
    this.#processRoll(pinsDowned)
  }

  // Private Methods
  #processRoll(pinsDowned){ 
    this.#processFinalRoll(pinsDowned)
    super.processRoll()
  }

  #lastRoll(){
    if (this.#secondRoll() == true){
      return false;
    }
    if (this.#firstRoll() == true){
      return false;
    }

    if (this.rolls[2] == undefined) {
      return true;
    }
    return false
  }

  #bonusFrame(){
    if (this.strikeFrame() || this.spareFrame()){
      return true
    }else{
      return false
    }
  }

  #processFinalRoll(pinsDowned){
    if (this.#lastRoll() ==  false){
      return
    }
  
    this.rolls.push(pinsDowned)
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

module.exports = LastFrame