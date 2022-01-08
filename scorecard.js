class Scorecard {
  constructor() {
    this.pinsKnockedDown = [
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0, 0]
    ]
  }
  pins() {
    return this.pinsKnockedDown
  }
  recordPins(pins, frame, bowl) {
    return this.pinsKnockedDown[ frame -1 ][ bowl - 1 ] = pins
  }
  
}

// s = new Scorecard()
// s.recordPins(10,1,1)
// console.log(s.pins())

module.exports = Scorecard;