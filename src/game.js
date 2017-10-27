function Game() {

  this._player = 'Hugo';
  this._score = 0;
  this._scoreSheet = [];
  this._frameAndGo = [1, 1];

  Game.prototype.player = function() {
    return this._player;
  };

  Game.prototype.score = function() {
    return this._score;
  };

  Game.prototype.go = function(go) {
    this._add(go);
    this._frameAndGoChange(go);

  };

  Game.prototype.frameAndGo = function() {
    return this._frameAndGo;
  };

  Game.prototype._add = function(value) {
    this._score = this._score + value;
  };

  Game.prototype._frameAndGoChange = function(go) {
    if ((this._frameAndGo[1] === 2) || (go === 10)) {
      this._frameAndGo[0] += 1;
      this._frameAndGo[1] = 1;
    } else {
      this._frameAndGo[1] += 1
    }
  };

};
