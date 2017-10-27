function Game() {

  this._player = 'Hugo';
  this._score = 0;
  this._scoreSheet = [];
  this._frameAndGo = [1, 1];
  this._wasStrike = false;
  this._wasSpare = false;

  Game.prototype.player = function() {
    return this._player;
  };

  Game.prototype.score = function() {
    return this._score;
  };

  Game.prototype.go = function(go) {
    this._frameAndGo[1] === 1 ? this._firstGo(go) : this._secondGo(go);
    this._frameAndGoChange(go);
  };

  Game.prototype.frameAndGo = function() {
    return this._frameAndGo;
  };

  Game.prototype._add = function(value) {
    this._score = this._score + value;
  };

  Game.prototype._firstGo = function(go) {
    if (this._wasSpare) {
      this._add(go);
      this._wasSpare = false;
    } else if (this._wasStrike) {
      this._add(go);
    } else {
      this._add(go);
      this._scoreSheet.push([go, null]);
    }
  };

  Game.prototype._secondGo = function(go) {
    if (this._wasStrike) {
      this._add(go);
      this._wasStrike = false;
    }
    if ((go + this._scoreSheet[this._scoreSheet.length - 1][0]) === 10) this._wasSpare = true;
    this._add(go);
  };

  Game.prototype._frameAndGoChange = function(go) {
    if ((this._frameAndGo[1] === 2) || (go === 10)) {
      this._frameAndGo[0] += 1;
      this._frameAndGo[1] = 1;
    } else {
      this._frameAndGo[1] += 1;
    }
  };
};
