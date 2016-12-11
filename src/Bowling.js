function Bowling(array) {
  this.game = array;
  this.bonus = 0;
}

Bowling.prototype.spares = function(){
  for(var i= 0; i < 20; i+= 2){
    var frame = this.frameSum(i);
    if(frame === 10 && this.game[i] !== 10){
      this.bonus += this.game[i+2];
    }
  }
};

Bowling.prototype.strikes = function(){
  for(var i = 0; i < 20; i+= 2){
    if(this.game[i] === 10){
      this.bonus += this.nextTwoRollsSum(i);
    }
  }
};

Bowling.prototype.scoreSum = function(){
  if (this.game[18] === 10){ this.game[19] = 0; }
  return this.game.slice(0,20).reduce(function(a, b){ return a + b; }, 0);
};

Bowling.prototype.score = function(){
  this.spares();
  this.strikes();
  return this.bonus + this.scoreSum();
};

Bowling.prototype.frameSum = function(index){
  return this.game[index] + this.game[index+1];
};

Bowling.prototype.nextTwoRollsSum = function(index){
  var i = index + 2;
  if(index === 18){
    return this.game[19] + this.game[20];
  } else if(this._isStrike(i)){
    return this.game[i] + this.game[i+2];
  } else {
  return this.game[i] + this.game[i+1];
  }
};

Bowling.prototype._isStrike = function(index){
  return (this.game[index] === 10 && this.game[index+1] === 0);
};
