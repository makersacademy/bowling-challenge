function Game() {
  this.frames = [];
  this.score = 0;
}

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame)
}

Game.prototype.totalGameScore = function() {
  var gameScore = 0;
  this.frames.forEach(function(element) {
    gameScore = gameScore + element.score;
  });
  this.score = this.score + gameScore
}

Game.prototype.spareBonus = function() {
  indices = this.frames.reduce((a, e, i) => (e.spare === true) ? a.concat(i) : a, [])
  var arrayOfArrays = this.frames;
  var spareScore = 0;
  indices.forEach(function(element) {
    spareScore = spareScore + arrayOfArrays[element + 1].turn[0];
  });
  this.score = this.score + spareScore
}

Game.prototype.strikeBonus = function() {
  indices = this.frames.reduce((a, e, i) => (e.strike === true) ? a.concat(i) : a, [])
  var arrayOfArrays = this.frames;
  var strikeScore = 0;
  indices.forEach(function(element) {
    strikeScore = strikeScore + arrayOfArrays[element + 1].score;
  });
  this.score = this.score + strikeScore
}
