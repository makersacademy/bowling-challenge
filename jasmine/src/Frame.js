function Frame() {
  this.pins = 10
  this.bowls = 2
}

Frame.prototype.bowl_one = function(pins) {
  this.pins -= pins
}

Frame.prototype.bowl_two = function(pins) {
  this.pins -= pins
}

Frame.prototype.complete = function(one,two) {
  if(one === 10) {
    this.bowl_one(one)
    return 'strike' }
    else if(one + two === 10) {
      this.bowl_one(one)
      this.bowl_two(two)
      return 'spare' }
    else {
      this.bowl_one(one)
      this.bowl_two(two)
    }
}
