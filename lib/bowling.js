function Player() {

}

Player.prototype.roll = function () {
  score._previousRoll = score._mostRecentRoll;
  score._mostRecentRoll = Math.floor(Math.random()*11);
  return score._mostRecentRoll;
};



////////////////////////////////////
var score = function() {
    this._mostRecentRoll = 0;
    this._previousRoll = 0;
}




////////////////////////////////////
