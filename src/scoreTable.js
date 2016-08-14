function ScoreTable() {
  this.pinsLeft = 10;
  this.rollNumber = 1;
  this.frameNumber = 1;
  this.totalPoints = 0;
  this.pinsKnocked = 0;
  this.bonus = 0;
};

ScoreTable.prototype = {
  getScore: function() {
    console.log("Frame: ",        this.frameNumber);
    console.log("Roll: ",         this.rollNumber);
    console.log("Pins knocked: ", this.pinsKnocked);
    console.log("Total score: ",  this.totalPoints);
  },

  getPinsLeft: function() {
    return this.pinsLeft;
  },

  calculateRoll: function(score) {
    this.pinsKnocked = score;
    this.pinsLeft -= score;
    this.calculatePoints();
    this.getScore();
    this.nextTurn();
    return this.pinsLeft;
  },

  calculatePoints: function () {
    this.totalPoints += this.pinsKnocked + this.addBonus();
  },

  addBonus: function () {
    var bonus = 0;
    if (this.bonus > 0) {
      bonus = this.pinsKnocked;
      this.bonus -= 1;
    }
    return bonus;
  },

  nextTurn: function () {
    if (this.pinsLeft > 0 && this.rollNumber === 1){
      this.rollNumber += 1;
    }
    else if (this.pinsLeft === 0 && this.rollNumber === 1){
      this._setNewFrame(2);
    }
    else if (this.pinsLeft === 0 && this.rollNumber === 2){
      this._setNewFrame(1);
    }
    else {
      this._setNewFrame(0);
    }
  },

  _setNewFrame: function (bonus) {
    this.frameNumber += 1;
    this.rollNumber = 1;
    this.bonus = bonus;
    this.pinsLeft = 10;
  }
};
