function Bowling () {
  this.score = 0;
  this.framesList = [];
}

Bowling.prototype.strik = function(frame) {
  if (this.framesList[this.framesList.length-2][1] === '/') {
    (this.framesList[this.framesList.length-2])[2] +=
    (this.framesList[this.framesList.length-1])[2];
  }
}

Bowling.prototype.spare = function (frame) {
  if (this.framesList[this.framesList.length-2][2] === 10) {
this.framesList[this.framesList.length - 2][2] +=
this.framesList[this.framesList.length - 1][0];
  }
}

Bowling.prototype.play = function (roll1, roll2, roll3 = 0) {
  var frame = []
    if((this.framesList.length < 10) && (roll1 === 10)) {
      roll2 = '/';
      frame = [roll1, roll2, 10]
      this.framesList.push(frame)
      this.updateScore(frame)
    }
    else if ((this.framesList.length < 10) && (roll1 !== 10)) {
      frame = [roll1, roll2, (roll1 + roll2)]
      this.framesList.push(frame)
      this.updateScore(frame)
    }
    else if (this.framesList.length === 9){this.lastPlay(roll1, roll2, roll3)}
};

Bowling.prototype.lastPlay = function (roll1, roll2, roll3) {
  var frame = []
  if ((roll1 === 10) || (roll1 + roll2 === 10)) {
  frame = [roll1, roll2, (roll1 + roll2 + roll3), roll3]
  this.framesList.push(frame)
  }
  else {
    frame = [roll1, roll2, (roll1 + roll2)]
    this.framesList.push(frame)
  }
  this.updateScore (frame)
  this.finalScore = this.framesList[this.framesList.length-1][2];
}


Bowling.prototype.updateScore = function (frame) {
  if (this.framesList.length > 1) {
    this.strik (frame);
    this.spare (frame);
  this.framesList[this.framesList.length-1][2] +=
  this.framesList[this.framesList.length-2][2];
  }
}
