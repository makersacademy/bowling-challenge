function Game() {

  var   framenumber = 0

  this.framenumber = function() {
    return framenumber;
  }

  this.add_frame = function() {
    framenumber += 1
  }
}
