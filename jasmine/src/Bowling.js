function Turn() {
};

Turn.prototype.roll = function(pins) {
  return Math.floor(Math.random() * (pins + 1));
};

function Frame(number) {
  this.number = number;
  this.pinsDown = [];
  this.scorer = [];
};

Frame.prototype.play = function() {
  var turn1 = new Turn();
  var frameScores = [turn1.roll(10)]; //first turn is with 10 pins
  if (this.number === 10) { // if it's the 10th frame, special rules apply
    var frameScores = this.tenthFramePlay(frameScores);
  } else {
    strike: if (frameScores[0] === 10) { //if it's a strike, no second turn
      this.scorer.push("X");
      break strike;
    } else {
      this.scorer.push(frameScores[0]);
      var turn2 = new Turn();
      frameScores.push(turn2.roll(10-frameScores[0])) //take the second turn
      if (frameScores[0] + frameScores[1] === 10) { this.scorer.push("/") } else {this.scorer.push(frameScores[1]);}
    }
  }
  this.pinsDown = frameScores;
};

Frame.prototype.tenthFramePlay = function(firstRoll) {
  var frameScores = firstRoll;
  var turn2 = new Turn();

  if (frameScores[0] === 10) { //if it's a strike in the 10th frame, another 10 pins get served
    this.scorer.push("X");
    frameScores.push(turn2.roll(10))
  } else {
    this.scorer.push(frameScores[0]);
    frameScores.push(turn2.roll(10-frameScores[0])) //take the second turn
  }

  var turn3 = new Turn();

  missed: if (frameScores[1] === 0) { //if the second shot is missed, the turn is over
    this.scorer.push(frameScores[1]);
    break missed;
  } else if (frameScores[1] === 10) { //if it's a strike from the second shot in the 10th frame, another 10 pins get served
    this.scorer.push("X");
    var thirdRollResult = turn3.roll(10)
    frameScores.push(thirdRollResult)
    if (frameScores[2] === 10) {this.scorer.push("X");}
    if (frameScores[1] + frameScores[2] === 10 && frameScores[2] > 0 && frameScores[0] + frameScores[1] != 10) {this.scorer.push("/");}
  } else if (frameScores[0] + frameScores[1] === 10 && frameScores[1] > 0) { //if it's a spare from the second shot in the 10th frame, another 10 pins get served
    this.scorer.push("/");
    var thirdRollResult = turn3.roll(10)
    frameScores.push(thirdRollResult)
    if (frameScores[2] === 10) {
      this.scorer.push("X")
    } else if (frameScores[1] + frameScores[2] === 10 && frameScores[2] > 0 && frameScores[0] + frameScores[1] != 10) {
      this.scorer.push("/")
    } else {
      this.scorer.push(frameScores[2])
    }
  }
  return frameScores;
};

function Game() {
  this.frames;
};

Game.prototype.autoplay = function() {
  this.frames = [];
  for (frameNumber = 1; frameNumber <= 10; frameNumber ++) {
    var frame = new Frame(frameNumber);
    frame.play();
    this.frames.push(frame);
  };
  return this.frames;
};

Game.prototype.begin = function() {
  return this.frames = [];
};
