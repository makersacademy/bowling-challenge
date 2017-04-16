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

Frame.prototype.bowl = function() {
  this.bowl_one(this.rand_num())
  this.bowl_two(this.rand_num())
}

Frame.prototype.complete = function() {
    this.bowl_one(this.rand_num())
    if(this.pins === 0) {
      return 'strike'
    } else {
      this.bowl_two(this.rand_num())
      if(this.pins === 0) {
        return 'spare' }
        else if(this.pins > 0) {
          return this.pins
        }
      }
}

Frame.prototype.rand_num = function() {
  return Math.floor(Math.random() * this.pins)
}
