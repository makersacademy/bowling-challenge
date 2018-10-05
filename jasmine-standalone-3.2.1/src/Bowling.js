function Bowling(){
  this._frame_score = [];
  this._frame_number = 0;
};

Bowling.prototype.roll = function (score){

 this._frame_score.push(score)
   if (score === 10){
    this._frame_number += 1;
  } else {
    this._frame_number += 0.5;
  };
};

Bowling.prototype.frame_score = function(){
  function getSum(total, num) {
      return total + num;
  }

  return this._frame_score.reduce(getSum);
};

Bowling.prototype.frame_number = function(){
  return this._frame_number;
};
