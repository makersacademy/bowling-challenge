function Turn() {
};

Turn.prototype.roll = function(pins) {
  return Math.floor(Math.random() * (pins + 1));
};

function Frame(number) {
  this.number = number;
  this.points = [];
  this.bonus;
};

Frame.prototype.play = function() {
  var turn1 = new Turn();
  var frameScores = [turn1.roll(10)]; //first turn is with 10 pins
  if (this.number === 10) { // if it's the 10th frame, special rules apply
    var frameScores = this.tenthFramePlay(frameScores);

  } else {
    strike: if (frameScores[0] === 10) { //if it's a strike, no second turn
      this.bonus = ["X"];
      break strike;
    } else {
      var turn2 = new Turn();
      frameScores.push(turn2.roll(10-frameScores[0])) //take the second turn
      if (frameScores[0] + frameScores[1] === 10) { this.bonus = ["/"] };
    }
  }
  this.points = frameScores;
};

Frame.prototype.tenthFramePlay = function(firstRoll) {
  var frameScores = firstRoll;
  var turn2 = new Turn();

  if (frameScores[0] === 10) { //if it's a strike in the 10th frame, another 10 pins get served
    frameScores.push(turn2.roll(10))
  } else {
    frameScores.push(turn2.roll(10-frameScores[0])) //take the second turn
  }

  missed: if (frameScores[1] === 0) { //if the second shot is missed, the turn is over
    break missed;
  }
  else if (frameScores[1] === 10 || frameScores[0] + frameScores[1] === 10) { //if it's a strike or spare from the second shot in the 10th frame, another 10 pins get served
    var turn3 = new Turn();
    frameScores.push(turn3.roll(10))
  }
  return frameScores;
};

function Game() {
  this.frames;
};

Game.prototype.play = function() {
  this.frames = [];
  for (frameNumber = 1; frameNumber <= 10; frameNumber ++) {
    var frame = new Frame(frameNumber);
    frame.play();
    this.frames.push(frame);
  };
  return this.frames;
};
