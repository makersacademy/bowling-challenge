const Frame = require("../lib/frame");

class LastFrame extends Frame {

  constructor() {
    super()
  }

  frameComplete() {
    if (this.#bonusFrame() == true){
      if (this.rolls.length == 3) {
        return true
      }else{
        return false
      }
    }
    console.log("After extension check")

    return super.frameComplete()
  }

  // Private Methods

  #bonusFrame(){
    if (this.strikeFrame() || this.spareFrame()){
      return true
    }else{
      return false
    }
  }

}

module.exports = LastFrame