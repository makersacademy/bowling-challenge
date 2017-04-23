
function Game() {
  this.frame = 1;
  this.roll = 1;
  this.frames = [];
  this.pins = 10;
  this.totalScore = 0;
  this.message = ' ';
  this.strikes = 0;
  this.spare = false;
  this.tenthFrameCount = 0;
}

Game.prototype.firstRoll = function(number) {
  this.pins -= number;
  this.addScore(number);
  this.firstRollMessage(number);
  this.documentRoll(number, this.message);
  if (number === 10) {
    this.strikes += 1;
    this.documentStrike();
    this.reset();
  } else {
    this.roll = 2;
  }
}

Game.prototype.secondRoll = function(number) {
  this.addScore(number);
  this.pins -= number;
  this.secondRollMessage();
  this.documentRoll(number, this.message);
  this.strikes = 0;
  if (this.pins === 0) {
    this.spare = true;
  }
  this.reset();
}
Game.prototype.firstRollMessage = function(number) {
  if (number === 10)  {
    this.message = "Strike!"
  }
};

Game.prototype.secondRollMessage = function() {
  if (this.pins === 0)  {
    this.message = "Spare!";
  }
};

Game.prototype.reset = function(number) {
  if (this.frame < 10) {
    this.frame += 1;
    this.roll = 1;
    this.pins = 10;
  }
}

Game.prototype.rollBall = function() {
    var number = Math.floor(Math.random() * this.pins)
    if (this.frame === 10) {
    this.tenthFrame(number);
  } else if (this.roll === 1) {
    this.firstRoll(number);
  } else {
    this.secondRoll(number);
  }
};

Game.prototype.tenthFrame = function(number) {
    this.tenthFrameCount += 1;
    if (this.tenthFrameCount < 4) {
    this.pins -= number;
    this.addScore(number);
    this.documentRoll(number, this.message);
    this.tenthFrameReset();
  }
};


Game.prototype.tenthFrameReset = function(number) {
  if (this.pins === 0 || this.tenthFrameCount === 2 ) {
    this.roll = 1;
    this.pins = 10;
  } else {
    this.roll = 2;
  }
}

Game.prototype.addScore = function (number) {
  if (this.strikes > 0 && number !== 10) {
  this.totalScore += number + (number * this.strikes);
} else if (this.spare === true && this.roll === 1) {
  this.totalScore += number * 2
  this.spare = false;
} else {
    this.totalScore += number;
  }
};

Game.prototype.documentRoll = function (number, message) {
  this.frames.push([this.frame, this.roll, number, this.totalScore, message])
}

Game.prototype.documentStrike = function () {
  this.frames.push([this.frame, 2, ' ', this.totalScore, ' '])
}
