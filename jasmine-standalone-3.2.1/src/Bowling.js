function Bowling(){
  this._total_score = [];
  this._frame_number = 1;
  this._roll_number = 1;
  this._frames = [[],[],[],[],[],[],[],[],[],[],[]]
};

Bowling.prototype.roll_number = function(){
 if (this._frame_number < 11)
   {return this._roll_number
 } else {
   return "Game over"};
};

Bowling.prototype.roll = function(score){
  if (this._frame_number < 11) {
    this._total_score.push(score);
    this._frames[this._frame_number].push(score);
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
};

Bowling.prototype.total_score = function(){
  function getSum(total, num) {
      return total + num;
  }
  return this._total_score.reduce(getSum);
};

Bowling.prototype.frame_score = function(){
  console.log(this._frame_number)
  return this._frames[this._frame_number - 1].reduce( (previousValue, currentValue) => previousValue + currentValue, 0);
}

Bowling.prototype.frame_number = function(){
  if (this._frame_number < 11)
    {return this._frame_number
  } else {
    return "Game over"};
};

// Regex: regular expressions, make the code a lot shorter. They tend to be hard to read.
// Sanitize the input?
// 10th frame: state of frames; using one big array with the score, but that includes a lot of if statements.
// you can create different objects or 1 with different functions: different objects would be a Frame(), Bowling()...
