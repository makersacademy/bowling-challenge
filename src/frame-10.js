function Frame10() {
  this._score1 = null;
  this._score2 = null;
  this._score3 = null;
}

Object.defineProperty( Frame10.prototype, "score1", {
  get: function score1() {
    return this._score1;
  }
} );

Object.defineProperty( Frame10.prototype, "score2", {
  get: function score2() {
    return this._score2;
  }
} );

Object.defineProperty( Frame10.prototype, "score3", {
  get: function score2() {
    return this._score3;
  }
} );