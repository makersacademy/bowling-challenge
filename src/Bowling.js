function Bowling(){
};

Bowling.prototype.score = function() {
  return 'Score';
};

Bowling.prototype.getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

Bowling.prototype.getRandomFrame = function() {
  var roll1 = this.getRandomInt(0,10);
  var roll2 = this.getRandomInt(0, (10 - roll1));
  return [roll1, roll2];
};

// Bowling.prototype.getFrameTotal = function(frame) {
//   return ()
// };

Bowling.prototype.getStandaloneFramesGame = function() {
  var framesArray = [];
  framesArray[10] = [0,0];

  for (var i = 0; i < framesArray.length; i++) {
    var newFrame = this.getRandomFrame();
    framesArray[i] = newFrame;
  }

  return framesArray;
};

Bowling.prototype.isStrike = function(frame) {
  return (frame[0] == 10);
};


