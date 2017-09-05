function Frame () {
  this.number = undefined;
  this.roles = [];
  this.score = undefined;
  this.bonusMode = "none";
  this.bonusScore = 0;
};

Frame.prototype.play = function (frameScoresArray) {
  for(var i = 0; i<2; i++) {
    var role = new Role();
    this.normalOrStrike(role, frameScoresArray[i]);
    this.add(role);
  };
  this.calculateRegularScore();
  this.assignBonusMode();
};

Frame.prototype.normalOrStrike = function (role, inputArrVal) {
  var knockedDownPins;
  if (this.roles.length > 0 && this.roles[0].points === 10) {
    knockedDownPins = 0;
  } else if ( inputArrVal === 0 ) {
    knockedDownPins = 0;
  } else {
    var userInput = inputArrVal || prompt("How many pins did you knock down?");
    knockedDownPins = Number(userInput);
  };
  role.addPoints(knockedDownPins);
};

Frame.prototype.add = function (role) {
  this.checkInRangeOfRegularScore(role);
  this.roles.push(role);
};

Frame.prototype.calculateRegularScore = function () {
  this.score = this.roles[0].points + this.roles[1].points;
};

Frame.prototype.assignBonusMode = function () {
  if (this.roles[0].points === 10) {
    this.bonusMode = "strike";
  } else if (this.score === 10) {
    this.bonusMode = "spare";
  };
};

Frame.prototype.checkInRangeOfRegularScore = function (role) {
  if (this.roles.length === 1) {
    if (this.roles[0].points + role.points > 10) {
      throw Error("Max total regular points are 10");
    };
  };
};

Frame.prototype.adjustForBonus = function (anotherFrame) {
  this.updateBonus(anotherFrame);
  this.score += this.bonusScore;
}

Frame.prototype.updateBonus = function (anotherFrame) {
  if (this.bonusMode === "strike") {
    this.bonusScore = anotherFrame.score;
  } else if (this.bonusMode === "spare") {
    this.bonusScore = anotherFrame.roles[0].points
  };
};
