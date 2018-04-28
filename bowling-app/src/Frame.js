function Frame() {

}

Frame.prototype.score = function() {
  return this.rollOne + this.rollTwo;
}