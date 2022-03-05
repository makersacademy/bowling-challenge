class BowlingGame {
 constructor() {
   this.frames = []
 } 
  
knockedPins(pins) {
   this.frames.push(pins)
   return this.frames
}

}


module.exports = BowlingGame 
