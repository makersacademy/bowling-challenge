function Game() {
  this.frames = [];
}

Game.prototype.bowl = function (rolls) {
  this.frames.push(new Frame(rolls));
};

Game.prototype.score = function () {
  return this.frames.reduce(function(total, frame, i, frames){
    return total + frame.total(frames[i + 1],frames[i + 2]);
  },0);
};
