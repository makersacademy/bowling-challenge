function Frame() {

}

Frame.prototype.score = function() {
  return this.rollOne + this.rollTwo;
}

Frame.prototype.setRoll = function(num, score) {
  var roll = num === 1 ?  'rollOne' : 'rollTwo';
  this[roll] = score;
}
