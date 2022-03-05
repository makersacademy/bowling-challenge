const Frame = require("./frame");

class LastFrame extends Frame {

  constructor() {
    super()
  }

  frameComplete() {
    if (this.#bonusFrame() == true){
      return (this.rolls.length == 3 ? true : false )
    }
    
    return super.frameComplete()
  }

  // Private Methods

  #bonusFrame(){
    return (this.strikeFrame() || this.spareFrame() ? true : false )
  }
}

module.exports = LastFrame