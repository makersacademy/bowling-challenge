// Random number generator for numbers 0-10
// Loop to get scores
// Conditionals for calculating strikes and spares
// x for strike
// - for gutterball
// / for spare

// Or use interface to input scores and just calculate the input?
// No... says count and sum...so need to calculate pins
function Frame(roll) {
  this.frames = []
}

Frame.prototype.count = function () {
    if (this.frames.length === 10) {
      return "End of game"
    }

}
