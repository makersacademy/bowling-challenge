function Game() {
  this.rollHistory = {
    1: [], 2: [] , 3: [], 4:[], 5:[], 6: [], 7: [], 8: [], 9: [], 10: [], 11:[]
  };

};

Game.prototype.roll = function (score) {
  for (var i = 1; i <= 11; i++) {
    if (this.rollHistory[i].length < 2 && this.rollHistory[i][0] != 10 && i != 11) {
      this.rollHistory[i].push(score);
      break;
    } else if (i === 11 && this.rollHistory[i - 1].length === 2 && (this.rollHistory[i - 1][0] + this.rollHistory[i - 1][1]) === 10 && this.rollHistory[i].length === 0) {
      this.rollHistory[i].push(score);
      break;
    };
  };
};
