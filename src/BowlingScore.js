
function BowlingScore(){
  this._pinsLeft = 10;
  this._currentFrame = 0;
  this._score = 0;
  this._scores = [];
  this._rolls = [];

}

BowlingScore.prototype.roll = function(pins){
  this._score = 0;
  this._scores = [];
  this._currentFrame=0;
  this._rolls.push(pins);
}

// BowlingScore.prototype.pinsLeft = function(){
//   return this._pinsLeft;
// }

BowlingScore.prototype.currentFrame = function(){
  return this._currentFrame;
}

BowlingScore.prototype.score= function(){
  return this._score
}

BowlingScore.prototype.rolls = function(){
  return this._rolls;
}

BowlingScore.prototype.scores = function(){
  return this._scores
}

BowlingScore.prototype.calculateScore = function(){
  var arr = this._rolls;
  function next(i){
    if (arr[i+1] !== undefined){return arr[i+1];}
    else{return 0;}
  }

  for(var i = 0; i < arr.length; i++){
    if(this._currentFrame < 9){
      if(arr[i] === 10){
        var score = this._rolls[i]+next(i)+next(i+1);
        this._score += score;
        this._scores.push(score);
        this._currentFrame+=1;
      }

      else if(arr[i] < 10 && arr[i] + next(i) === 10){
        var score = this._rolls[i]+next(i)+next(i+1);
        this._score += score;
        this._scores.push(score);
        this._currentFrame+=1;
        i+=1;
      }
      else if(arr[i]< 10 && next(i)+arr[i]< 10){
        var score = this._rolls[i]+next(i);
        this._score += score;
        this._currentFrame+=1;
        this._scores.push(score);
        i+=1;
      }
    }

    else if(this._currentFrame < 10){
      if(arr[i] === 10 || arr[i] + next(i) === 10){
      var score = this._rolls[i]+next(i)+next(i+1);
      this._score += score;
      this._currentFrame+=1;
      this._scores.push(score);
      i+=1;
    }
    else{
      var score = this._rolls[i]+next(i);
      this._score += score;
      this._currentFrame+=1;
      this._scores.push(score);
      i+=1;
      }
    }

  }
}
