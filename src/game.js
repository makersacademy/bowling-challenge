function Game() {
  var self = this;

  self.scoreArray = [];
  self.screenArray = [];
  self.frameCounter = 0;
  self.finalScore = 0;
}

Game.prototype.startGame = function (pinsdropped) {
  var self = this;

  self.pinsDroppedEachRoll(pinsdropped);

  for (var i = 1; i < 11; i++) {
    self.scoreTotal(i);
  }
};

Game.prototype.scoreTotal = function (frame) {
  var self = this;
  self.finalScore = 0;

    for (var r = 0; r < self.scoreArray.length; r+= 2) {
      console.log('loop 2');
      if (self.screenArray[r + 1] === 'X') {
        self.finalScore += (10 + self.strikeBonus(r));

      } else if (self.screenArray[r + 1] === '/') {
        self.finalScore += (10 + self.spareBonus(r));

      } else {
        self.finalScore += self.frameTotal(r);
      }
    }

  console.log(self.finalScore);
  return self.finalScore;
};

Game.prototype.pinsDroppedEachRoll = function (pinsdropped) {
  var self = this;


  if (self.isStrike(pinsdropped)) {

    self.scoreArray.push(10);
    self.scoreArray.push(0);
    self.frameCounter += 1;

  } else if (self.isSpare(pinsdropped)) {

    self.scoreArray.push(pinsdropped);

  } else {

    self.scoreArray.push(pinsdropped);
    self.displayResult(pinsdropped);
  }

  self.frameCounter += 1;

  console.log('score array');
  console.log(self.scoreArray);
};


Game.prototype.isStrike = function (pinsdropped) {
  var self = this;

  if ( pinsdropped === 10 && self.frameCounter % 2 === 0 ) {
    console.log('---------------->   STRIKE');

    self.displayResult(0);
    self.displayResult('X');
    return true;
  }
};

Game.prototype.strikeBonus = function (index) {
  var self = this;

  if (self.screenArray[index + 3] === 'X' && self.screenArray[index + 5] === 'X') {

    return 20;

  } else if (self.screenArray[index + 3] === 'X') {

    return (10 + self.scoreArray[index + 4]) || 0;

  } else {

    return self.scoreArray[index + 2] + self.scoreArray[index + 3] || 0;
  }

};

Game.prototype.isSpare = function (pinsdropped) {
  var self = this;

  if (self.frameCounter % 2 !== 0) {

    if (pinsdropped + self.scoreArray[self.frameCounter - 1] === 10) {
      console.log('---------------->   SPARE');

      self.displayResult('/');
      return true;
    }
  }
};

Game.prototype.spareBonus = function (index) {
  return this.scoreArray[index + 2] || 0;
};

Game.prototype.displayResult = function (displayresult) {
  var self = this;

  self.screenArray.push(displayresult);

  console.log('screen array');
  console.log(self.screenArray);
};


Game.prototype.tenthFrame = function () {
  return this.frameCounter > 18;
};


Game.prototype.frameTotal = function (index) {
  return this.scoreArray[index] + this.scoreArray[index + 1] || 0;
};
