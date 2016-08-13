function ScoreTable() {
  this.pinsLeft = 10;
  this.rollNumber = 1;
  this.frameNumber = 1;
  this.totalPoints = 0;
  this.pinsKnocked = 0;
  this.bonus = 0;
};

ScoreTable.prototype = {
  getPinsLeft: function() {
    return this.pinsLeft;
  },

  getTotalPoints: function() {
    return this.totalPoints;
  },

  receiveScore: function(score) {
    this.pinsKnocked = score;
    this.calculatePoints();
    this.nextTurn();
    return this.getPinsLeft();
  },

  calculatePoints: function () {
    this.totalPoints += this.pinsKnocked;
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
