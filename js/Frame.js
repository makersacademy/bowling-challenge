function Frame() {
  this.shots = [];
  this.play();
}

Frame.prototype.play = function() {
  var firstShot = Math.floor((Math.random() * 11));
  if(firstShot < 10) {
    this.shots.push(firstShot)
    var secondShot = Math.floor((Math.random() * (11 - firstShot)))
    this.shots.push(secondShot);
  } else {
    this.strike();
  }
};

Frame.prototype.strike = function() {
  this.shots.push(10, 0);
}
