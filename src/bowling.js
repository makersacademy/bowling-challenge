class Bowling {
  
  constructor() {
    this.game = []
  }


  isStrike(frame) { // checks whether the role was a strike.
    frame[0] = 10 ? true : false
  }

  isSpare(frame) { // checks whether the role was a spare
    frame.reduce((a, b) => a + b, 0) == 10 ? true : false
  }



}