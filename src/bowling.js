var Game = function() {
  this.frame = 1;
  this.ball = 1;
  this.scorePerBowl = [];
}

Game.prototype.bowl = function(knockedDown) {

  this.scorePerBowl.push(knockedDown === 10 ? 'X' : knockedDown)

  if(this.ball === 2) { this.frame += 1 };

  if(this.ball === 1 && knockedDown === 10) {
    this.frame += 1
  } else if(this.ball === 1){
    this.ball = 2
  } else {
    this.ball = 1
  };
};

Game.prototype.score = function() {
  var total = 0
  for (var i = 0; i < this.scorePerBowl.length; i++){
    if(this.scorePerBowl[i-1] === 'X' && this.scorePerBowl[i-2] === 'X') {
        total += (this.scorePerBowl[i] === 'X' ? 30 : this.scorePerBowl[i] * 3);
    } else if(this.scorePerBowl[i-1] === 'X' || this.scorePerBowl[i-2] === 'X') {
        total += (this.scorePerBowl[i] === 'X' ? 20 : this.scorePerBowl[i] * 2);
    } else {
      total += (this.scorePerBowl[i] === 'X' ? 10 : this.scorePerBowl[i]);
    }
  }
  return total
};