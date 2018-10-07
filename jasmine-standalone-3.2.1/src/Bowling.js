function Bowling(){
  this._total_score = [];
  this._frame_number = 1;
  this._roll_number = 1;
};

Bowling.prototype.roll_number = function(){
 return this._roll_number;
};

Bowling.prototype.roll = function(score){
 this._total_score.push(score);

  if (score === 10) {this._frame_number += 1;
  } else {
   if (this._roll_number === 1){
    this._roll_number += 1;
   } else if (this._roll_number === 2){
     this._roll_number = 1;
     this._frame_number += 1;
   };
 };
};


Bowling.prototype.total_score = function(frame_number){
  function getSum(total, num) {
      return total + num;
  }
  return this._total_score.reduce(getSum);
};

Bowling.prototype.frame_number = function(){
  return this._frame_number;
};
