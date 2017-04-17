function Game() {
  this.score = 0;
  this.frames = [];
  this.currentFrame = 1;
  this.totalScore = 1;
}

Game.prototype.throwBowl = function(firstBowl, secondBowl) {
  this.frames.push({firstBowl: firstBowl,
                    secondBowl: secondBowl,
                    outcome: this.frameOutcome([firstBowl, secondBowl]),
                    total: firstBowl+secondBowl});
  this.currentFrame += 1
};

Game.prototype.frameOutcome = function(array) {
  if (array[0] === 10)            return 'X';
  if (array[0] + array[1] === 10) return '/';
                                  return 'O';
};

Game.prototype.flattenFrames = function(frames) {
  var result = [];
  for(i=0; i<10; i++) {
    if (frames[i].firstBowl === 10) {
      result.push(frames[i].firstBowl);
    } else {
      result.push(frames[i].firstBowl, frames[i].secondBowl);
    };
  };
  return result;
};

Game.prototype.isCompleted = function() {

};

Game.prototype.strikeBonus = function(index) {
  var bonus = 0;
  var frames = this.frames;
  if (frames[index+1].outcome === 'X') {
    if (frames[index+2].outcome === 'X') {
      bonus = 20;
    } else {
      bonus = 10 + frames[index+2].firstBowl;
    };
  } else {
    bonus = frames[index+1].total;
  };
  return bonus;
};

Game.prototype.spareBonus = function(index) {
  return (this.frames[index+1].firstBowl)
};
