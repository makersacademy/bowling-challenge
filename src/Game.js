function Game() {
  this._frames = [];
}

Game.prototype.bowl = function (rolls) {
  this._frames.push(rolls);
};

Game.prototype.score = function () {
  function flatten(a,b) {
    return a.concat(b);
  }

  function add(a,b) {
    return a + b;
  }
  return (this._frames.reduce(flatten,[])).reduce(add,0);
};
