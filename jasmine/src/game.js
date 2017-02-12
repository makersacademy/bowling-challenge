Game = function() {
  this._frame1 = new Frame();
  this._frame2 = new Frame();
  this._frame3 = new Frame();
};

Game.prototype.playFrame1 = function(roll1, roll2) {
  this._frame1.setRoll1(roll1);
  this._frame1.setRoll2(roll2);
};

Game.prototype.playFrame2 = function(roll1, roll2) {
  this._frame2.setRoll1(roll1);
  this._frame2.setRoll2(roll2);
  this.getBonus(this._frame1, roll1);
};

Game.prototype.playFrame3 = function(roll1, roll2) {
  this._frame3.setRoll1(roll1);
  this._frame3.setRoll2(roll2);
  this.getBonus(this._frame2, roll1);
  if (this._frame1.getStrikeType() === "X"){
    this.getBonus(this._frame1, roll1);
  }
};

Game.prototype.getBonus = function(previousFrame, roll1) {
  if (previousFrame.getStrikeType() === "X") {
    previousFrame.addBonus(10);
  }
  else if (previousFrame.getStrikeType() === "/") {
    previousFrame.addBonus(roll1);
  } else {
    console.log("No bonus this time");
  }
};
