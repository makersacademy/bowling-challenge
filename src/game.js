function Game () {
  this.frames = [];
};

Game.prototype.add = function (frame) {
  this.frames.push(frame);
};

Game.prototype.calculateTotalScore = function () {
  var currentTotalScore = 0
  for (var i = 0; i < this.frames.length; i++) {
    currentTotalScore += this.frames[i].score;
  };
  return currentTotalScore
};

Game.prototype.start = function (allRolesDataArrayofArrays, bonusArray) {
  for (var i = 0; i < 10; i++) {
    var frame = new Frame();
    frame.play(allRolesDataArrayofArrays[i]);
    this.frames.push(frame);
    if (i>0) {
      this.frames[i-1].adjustForBonus(frame);
      if (i > 1 && this.frames[i-1].bonusMode === "strike" && this.frames[i-2].bonusMode === "strike") {
        var adjustmentFrame = new Frame();
        adjustmentFrame.play([frame.roles[0].points,0]);
        this.frames[i-2].adjustForBonus(adjustmentFrame);
      };
    };
  };
  this.tenthFrameBonus(bonusArray);
  alert("Your final score is: " + this.calculateTotalScore());
};

Game.prototype.tenthFrameBonus = function (bonusArray) {
  if (this.frames[9].bonusMode === "strike") {
    bonusRole1 = bonusArray[0] || prompt("How many pins did you knock down?");
    bonusRole2 = bonusArray[1] || prompt("How many pins did you knock down?");
    if (bonusRole1 === 10) {
      var bonusFrame1 = new Frame();
      bonusFrame1.play([bonusRole1,0]);
      var bonusFrame2 = new Frame();
      bonusFrame2.play([bonusRole2,0]);
      this.add(bonusFrame1);
      this.add(bonusFrame2);
      this.frames[8].adjustForBonus(bonusFrame1);
    } else {
      var bonusFrame1 = new Frame();
      bonusFrame1.play(bonusRole1,bonusRole2);
      this.add(bonusFrame1);
    };
  } else if (this.frames[9].bonusMode === "spare") {
    bonusRole1 = bonusArray[0] || prompt("How many pins did you knock down?");
    var bonusFrame1 = new Frame();
    bonusFrame1.play([bonusRole1,0]);
    this.add(bonusFrame1);
  };
};
