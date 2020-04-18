/* eslint-disable no-underscore-dangle */
function Frame() {
}

Frame.prototype.score = function score() {
  return { score1: this._score1, score2: this._score2, total: undefined };
};

Frame.prototype.addScore = function addScore( score ) {
  if ( this._score1 === undefined ) {
    this._score1 = score;
  } else if ( this._score2 === undefined ) {
    this._score2 = score;
  }
};
