function game() {

}

game.prototype.frameScore = function(frame) {
  if(frame._firstScore + frame._secondScore < 10){
    return frame._firstScore + frame._secondScore;
  }
};

// game.prototype.totalScore = {
//
// };
