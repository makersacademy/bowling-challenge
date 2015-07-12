var frame = function () {
  this.scores=[];
  this.total = null;
  this.strike = false;
  this.full = false;

frame.prototype.scoreInput = function(score) {
  if (this.full == true){
    throw new Error("You have already entered two scores");
  }
  this.scores.push(score);
  this.total += score;
    if (score == 10 ){
      this.strike = true;
      this.full = true;
      return "strike!"
      }
    if (this.scores.length == 2 ){
      this.full = true;
    }
  };
  

};