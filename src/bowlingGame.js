function BowlingGame() {
  this.total = [];
}


BowlingGame.prototype.roll = function(pins) {
   this.total.push(pins);
};


BowlingGame.prototype.score = function() {
  var sum = 0;
  var totalIndex = 0;
  var arry = this;

  for (var i = 0; i < 10; i++) {
    if (isSpare()) {
      sum += spareScore();
      totalIndex += 2;
    } else if (ifStrike()) {
      sum += strikeScore();
      totalIndex ++;
    } else {
      sum += normalScore();
      totalIndex += 2
    }
  }
  return sum


  function isSpare() {
    return arry.total[totalIndex] + arry.total[totalIndex + 1] === 10;
  }

  function spareScore() {
    return arry.total[totalIndex] + arry.total[totalIndex + 1] + arry.total[totalIndex + 2];
  }

  function normalScore() {
    return arry.total[totalIndex] + arry.total[totalIndex + 1];
  }

  function ifStrike () {
    return arry.total[totalIndex] === 10;
  }

  function strikeScore () {
    return arry.total[totalIndex] + arry.total[totalIndex + 1] + arry.total[totalIndex + 2];
  }

};
