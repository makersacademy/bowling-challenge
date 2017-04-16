var Bowling = function() {
  this.score1 = 0;
  this.score2 = 0;
  this.totalScore = [];
  this.spare = false;

};

Bowling.prototype.firstBowl = function(pins) {
  pins = parseInt(pins);
  this.score1 = pins;
  if (pins === 10) {
    this.score2 = 0;
    this.calculateScore();
  }


};

Bowling.prototype.secondBowl = function(pins) {
  pins = parseInt(pins);
  this.score2 = pins;

  this.calculateScore();


};


Bowling.prototype.resetScore = function() {
    this.score1 = 0;
    this.score2 = 0;
};

Bowling.prototype.bonus = function() {
  x = this.totalScore.length;
  if (this.spare == true) {
    this.totalScore[(x-1)] += this.score1;
    this.spare = false;
  }
};

Bowling.prototype.nextFrame = function() {
  if (this.score1 + this.score2 == 10) {
    this.spare = true;

  }
};


Bowling.prototype.calculateScore = function() {
  var result = (this.score1 + this.score2);

  this.bonus();

  this.nextFrame();

  this.totalScore.push(result);
  this.resetScore();
};
