var tenthFrame = function () {
  this.scores=[];
  this.total = null;
  this.strike = false;
  this.spare = false;
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
    if (this.total == 10 && this.scores.length == 2){
      this.spare = true
    }
    if (this.scores.length == 2 && this.spare == false ){
      this.full = true;
    }

    if(this.scores.length == 3 && this.spare == true ){
      this.full = true;
    }
  };
  

};