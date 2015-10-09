function BonusScores() {
  this.bonusScores = [];
};

BonusScores.prototype.addNewBonusScore = function () {
  this.frameScores = [[this.rawScores[0]]];

  for (i = 0; i < this.rawScores.length; i++) {
    console.log(this.frameScores)
    if (this.frameScores[this.frameScores[0] + this.frameScores[1]] === 10) {
      this.bonusScores.push(this.frameScores[i])
    };
  };
};
