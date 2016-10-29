function Player() {

}

Player.prototype.roll = function(score) {
  score._previousRoll = score._mostRecentRoll;
  score._mostRecentRoll = Math.floor(Math.random()*11);
  return score._mostRecentRoll;
};



////////////////////////////////////
function Score() {
    this._mostRecentRoll = 0;
    this._previousRoll = 0;
}




////////////////////////////////////
