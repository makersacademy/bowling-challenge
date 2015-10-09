function Bowling(){
};

Bowling.prototype.score = function() {
  return 'Score';
};

Bowling.prototype.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Bowling.prototype.getRandomFrame = function() {
//   var roll1 = this.getRandomInt(0,10);

//   if ( roll1 == 10 ) {
//     roll2 = null;
//   } else {
//     var roll2 = this.getRandomInt(0, (10 - roll1));
//   }
//   return [roll1, roll2];
// };

// Bowling.prototype.getFrameTotal = function(frame) {
//   return ()
// };

Bowling.prototype.getStandaloneFramesGame = function() {
  var framesArray = [];
  framesArray[10] = [null,null];

  for (var i = 0; i < (framesArray.length - 1); i++) {
    var newFrame = this.getRandomFrame();
    framesArray[i] = newFrame;
  }

  return framesArray;
};

Bowling.prototype.isStrike = function(frame) {
  return (frame[0] == 10);
};

Bowling.prototype.isSpare = function(frame) {
  if ( this.isStrike(frame) ) { return false };
  return ( (frame[0] + frame[1]) == 10);
};

Bowling.prototype.findBonusRolls = function(frame) {
  // if
};

Bowling.prototype.findAllBonuses = function(frame) {
  // return ( frame.map() )
};

