function Game() {
}

Game.prototype.isGutter = function(frames) {
  array = frames.flat();
  if (array.reduce((a, b) => a+b) === 0) {
    return true;
  };
};

Game.prototype.isPerfect = function(frames) {
  array = frames.flat();
  if (array.reduce((a, b) => a+b) === 210) {
    return true
  };
};
