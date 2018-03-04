function Game(){
  this.frames = [];
};

Game.prototype._addFrame = function(frame){
  this.frames.push(frame)
};

Game.prototype.roll = function(roll_one, roll_two){
  frame = new Frame(roll_one, roll_two);
  this._addFrame(frame)
};

Game.prototype.calculateScore = function(){
  var score = 0;
  for(i = 0; i < this.frames.length; i++){
    if (!this.frames[i].isStrike()){
      score += this.frames[i].score;
    } else if (this.frames[i].isStrike() && !this.frames[i+1].isStrike()){
      score += this.frames[i].score + this.frames[i+1].score
    } else if (this.frames[i].isStrike() && this.frames[i+1].isStrike() && !this.frames[i+2].isStrike()){
      score += this.frames[i].score + this.frames[i+1].score + this.frames[i+2].roll_one
    } else if (this.frames[i].isStrike() && this.frames[i+1].isStrike() && this.frames[i+2].isStrike()){
      score += this.frames[i].score + this.frames[i+1].score + this.frames[i+2].score
    }
  };
  return score
};

// Game.prototype.calculateScore = function(){
//   var score = 0;
//   for(i = 0; i < this.frames.length; i++) {
//     if (this.frames[i].isStrike()) {
//       if (this.frames[i+1].isStrike() && i+1 < this.frames.length ) {
//         if (this.frames[i+2].isStrike() && i+2 < this.frames.length) {
//           score += this.frames[i].score + this.frames[i+1].score + this.frames[i+2].score;
//         } else {
//           score += this.frames[i].score + this.frames[i+1].score + this.frames[i+2].roll_one;
//         }
//       } else {
//         score += this.frames[i].score + this.frames[i+1].score;
//       }
//     } else {
//       score += this.frames[i].score;
//     }
//   };
//   return score
// };
