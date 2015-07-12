var frame = function () {
  this.total = 0
  this.strike = false;

frame.prototype.scoreInput = function(score) {
    this.total += score;
    if (score == 10 ){
      this.strike = true;
      return "strike!"
    }
  };
  

};