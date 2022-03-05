const Frame = require("./frame.cjs");

class LastFrame extends Frame {

  constructor() {
    super()
  }

  formatFrame(){
    let formattedFrame = ""
    if (this.#bonusFrame()){
      if (this.strikeFrame()){
        formattedFrame = "X |"
        for(let i = 1; i < this.rolls.length; i++){
          formattedFrame += this.rolls[i]
        }
        return formattedFrame
      }else if (this.spareFrame()){
        formattedFrame = `${this.rolls[0]} |/ `
        for(let i = 2; i < this.rolls.length; i++){
          formattedFrame += this.rolls[i]
          return formattedFrame
        }
      }
    }else{
      if (this.openFrame()){
        return `${this.rolls[0]} |${this.rolls[1]} `
      }else{
        return `${this.rolls[0]} |  `
      }
    }

  }

  frameComplete() {
    if (this.#bonusFrame()){
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