const Frame = require("./frame.cjs");

class LastFrame extends Frame {

  constructor() {
    super()
  }

  formatFrame(){
    let formattedFrame = ""

    if (this.strikeFrame()){
      formattedFrame = this.#formatStrikeFrame()
    }else if (this.spareFrame()){
      formattedFrame = this.#formatSpareFrame()
    }
    else if (this.openFrame()){
      formattedFrame = this.#formatOpenFrame()
    }else{
      formattedFrame = `${this.rolls[0]} |  `
    }

    return formattedFrame
  }

  frameComplete() {
    if (this.#bonusFrame()){
      return (this.rolls.length == 3 ? true : false )
    }
    
    return super.frameComplete()
  }

  // Private Methods

  #formatStrikeFrame(){
    let formattedFrame = "X |"
    for(let i = 1; i < this.rolls.length; i++){
      formattedFrame += this.rolls[i].toString().concat(" ").replace('10','X')
    }
    return formattedFrame
  }

  #formatSpareFrame(){
    let formattedFrame = `${this.rolls[0]} |/ `
    for(let i = 2; i < this.rolls.length; i++){
      formattedFrame += this.rolls[i].toString().replace('10','X')
    }
    return formattedFrame
  }

  #formatOpenFrame(){
    return `${this.rolls[0]} |${this.rolls[1]} `
  }

  #bonusFrame(){
    return (this.strikeFrame() || this.spareFrame() ? true : false )
  }
}

module.exports = LastFrame