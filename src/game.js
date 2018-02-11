function Game() {
  var self = this;

  self.scoreArray = [];
  self.screenArray = [];
  self.frameCounter = 0;
  self.finalScore = 0;
}

Game.prototype.startGame = function (pinsdropped) {
  var self = this;

  if (self.scoreArray.length < 21) {
    self.pinsDroppedEachRoll(pinsdropped);

    for (var i = 1; i < 11; i++) {
      self.scoreTotal(i);
    }
  }
  return;
};

Game.prototype.scoreTotal = function (frame) {
  var self = this;
  self.finalScore = 0;

    for (var r = 0; r < self.scoreArray.length; r+= 2) {
      if (self.screenArray[r + 1] === 'X') {
        self.finalScore += (10 + self.strikeBonus(r));

      } else if (self.screenArray[r + 1] === '/') {
        self.finalScore += (10 + self.spareBonus(r));

      } else {
        self.finalScore += self.frameTotal(r);
      }
    }
  return self.finalScore;
};

Game.prototype.pinsDroppedEachRoll = function (pinsdropped) {
  var self = this;

  if (self.isIncorrectScore(pinsdropped)) {
    self.alert();
  } else {
    if (self.isStrike(pinsdropped)) {

    } else if (self.isSpare(pinsdropped)) {

    } else {
      self.scoreArray.push(pinsdropped);
      self.displayResult(pinsdropped);
    }
    self.frameCounter += 1;
}
};


Game.prototype.isStrike = function (pinsdropped) {
  var self = this;

  if (self.tenthFrame()) {

    if ( pinsdropped === 10) {
      self.displayResult('X');
      self.scoreArray.push(10);
      return true;
    }

  } else {

    if ( pinsdropped === 10 && self.frameCounter % 2 === 0 ) {
      self.displayResult(0);
      self.displayResult('X');
      self.scoreArray.push(10);
      self.scoreArray.push(0);
      self.frameCounter += 1;
      return true;
    }
  }
};


Game.prototype.isSpare = function (pinsdropped) {
  var self = this;

  if (self.frameCounter % 2 !== 0) {
    if (pinsdropped + self.scoreArray[self.frameCounter - 1] === 10) {
      self.displayResult('/');
      self.scoreArray.push(pinsdropped);
      return true;
    }
  }
};

Game.prototype.strikeBonus = function (index) {
  var self = this;

  if (self.tenthFrame() && self.screenArray[index] === 'X') {
    if (self.screenArray[index + 1] === 'X' && self.screenArray[index + 2] === 'X') {

      return 20;

    } else if (self.screenArray[index + 1] === 'X') {

      return (10 + self.scoreArray[index + 2]) || 0;

    } else {

      return self.scoreArray[index + 1] + self.scoreArray[index + 2] || 0;
    }

  } else {

    if (self.screenArray[index + 3] === 'X' && self.screenArray[index + 5] === 'X') {

      return 20;

    } else if (self.screenArray[index + 3] === 'X') {

      return (10 + self.scoreArray[index + 4]) || 0;

    } else {
      return self.scoreArray[index + 2] + self.scoreArray[index + 3] || 0;
    }
  }
};

Game.prototype.spareBonus = function (index) {
  return this.scoreArray[index + 2] || 0;
};

Game.prototype.displayResult = function (displayresult) {
  var self = this;

  self.screenArray.push(displayresult);
};


Game.prototype.tenthFrame = function () {
  return this.frameCounter >= 18;
};

Game.prototype.frameTotal = function (index) {
  return this.scoreArray[index] + this.scoreArray[index + 1] || 0;
};

Game.prototype.alert = function () {
  alert("Incorrect Score");
};

Game.prototype.isIncorrectScore = function (pinsdropped) {
  var self = this;

  if (self.tenthFrame()) {
    return self.frameCounter % 2 !== 0 && (pinsdropped + self.scoreArray[self.frameCounter - 1] > 30);
  } else {
    return self.frameCounter % 2 !== 0 && (pinsdropped + self.scoreArray[self.frameCounter - 1] > 10);
  }

};
