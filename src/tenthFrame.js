var tenthFrame = function () {
  this.scores=[];
  this.capacity = 2;
  this.total = null;
  this.strike = false;
  this.spare = false;
  this.full = false;

tenthFrame.prototype.scoreInput = function(score) {
  if (this.full == true){
    throw new Error("The Frame is Full");
  }
  this.scores.push(score);
  this.total += score;
    if (score == 10  && this.scores.length != 3){
      this.strike = true;
      this.full = true;
      return "strike!"
      }
    if (this.total == 10 && this.scores.length == this.capacity ){
      this.spare = true
    }
     if (this.stike || this.spare){
    this.capacity = 3  
    }
    if (this.scores.length == this.capacity ){
      this.full = true;
    }
  };
  

};