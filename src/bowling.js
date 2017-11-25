const MAXFRAME = 12;

function Bowling(){
  this._total = 0;
  this._maxScore = 300;
  this._counter = 0;
  this._currentScore = 0;
  this._frame = 0;
  this._bonus = 0;
}

Bowling.prototype.total = function(){
    return this._total;
};

Bowling.prototype.maxScore = function(){
  return this._maxScore;
}

Bowling.prototype.addScore = function(score){
  if(score > 10){
    return 'Cannot add more than 10';
  }
  return this._total += score;
}

Bowling.prototype.frame = function(score){
  if (this._counter < 2){
    this._currentScore += score;
    this._counter += 1;
  } else {
    this._frame += 1;
    this._counter = 0;
  }
}


Bowling.prototype.game = function(score){
  if(this._frame <= MAXFRAME) {
    if(this._counter === 0 && score === 10){
      // strike
      this._total += score;
      this._counter = 0;
      this._frame += 1;
    } else if(this._counter === 1 && (this._currentscore + score === 10) ){
      //spare
      this._total += this._currentScore;
      this._counter += 1;
      this._frame += 1;
    } else if(this._counter == 0){
      //normal first roll
      this._currentScore += score;
      this._counter += 1;
    } else if(this._counter === 1){
      //normal second roll
      this._currentScore += score;
      this._total += this._currentScore;
      this._counter = 0;
      this._frame += 1;
    }
  }
  return 'Cannot play more than 12 frames'
}
