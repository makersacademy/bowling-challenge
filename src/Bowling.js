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

  if ( roll1 == 10 ) {
    roll2 = null;
  } else {
    var roll2 = this.getRandomInt(0, (10 - roll1));
  }
  return [roll1, roll2];
};

Bowling.prototype.getStandaloneFramesGame = function() {
  var framesArray = [];
  framesArray[9] = [null,null];

  for (var i = 0; i < framesArray.length; i++) {
    var newFrame = this.getRandomFrame();
    framesArray[i] = newFrame;
  }

  return framesArray;
};

Bowling.prototype.getFrameTotal = function(frame) {
  return (frame[0] + frame[1]);
};

Bowling.prototype.isStrike = function(frame) {
  return (frame[0] == 10);
};

Bowling.prototype.isSpare = function(frame) {
  if ( this.isStrike(frame) ) { return false };
  return ( (this.getFrameTotal(frame)) == 10);
};

Bowling.prototype.findBonusRolls = function(frame) {
  if ( this.isStrike(frame) ) { return 2 };
  if ( this.isSpare(frame) ) { return 1 };
  return 0;
};

Bowling.prototype.findAllBonuses = function(game) {
  var bonuses = game.map( function(frame) {
    return Bowling.prototype.findBonusRolls(frame);
    } );
  return bonuses;
};

Bowling.prototype.findStandaloneScores = function(game) {
  var scores = game.map( function(frame) {
    return Bowling.prototype.getFrameTotal(frame);
    } );
  return scores;
};

Bowling.prototype.allocateBonuses = function(game, scores) {
  bonuses = this.findAllBonuses(game);

  for (var i = 0; i < game.length; i++) {
    switch (bonuses[i]) {
      case 0: break;
      case 1: scores[i] += game[(i + 1)][0];
              break;
      case 2: scores[i] += game[(i + 1)][0];
              console.log("i = " + i + " game[(i + 1)][1] = " + game[(i + 1)][1]);
              if (game[(i + 1)][1] != null) {
                scores[i] += game[(i + 1)][1];
              } else {
                scores[i] += game[(i + 2)][0];
              };
              break;
    }
  };

  return scores;
};

// scores[i] = (scores[i] + game[(i + 1), 0] );


