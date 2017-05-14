function Frame(first, second) {
  this.score = [first, second]
  this.score = this.score.filter(function(element) {
   return element !== undefined;
  });
};

Frame.prototype.isSpare = function() {
  return this.score.length > 1 && this.score[0] + this.score[1] === 10;
};

Frame.prototype.isStrike = function() {
  return this.score[0] === 10;
};

Frame.prototype.calculate = function() {
  if (this.score.length === 1) { return this.score[0] }
  else { return Number(this.score[0] + this.score[1]) };
};
