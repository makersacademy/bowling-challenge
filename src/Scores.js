function Scores(){
  this.scores = []
}

Scores.prototype.save_score = function(name, score) {
  this.scores.push([name, score])
  // this.scores.sort();
};
