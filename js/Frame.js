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
    this.printResult();
  } else {
    this.strike();
  }
};

Frame.prototype.strike = function() {
  this.shots.push(10, 0);
  console.log("You got a strike mate!")
}

Frame.prototype.printResult = function () {
  if (this.shots[0] + this.shots[1] === 10) {
    console.log("You got a spare mate!")
  } else {
    console.log("first shot: " + this.shots[0] +
    "\n second shot: " + this.shots[1]);
  }
};
