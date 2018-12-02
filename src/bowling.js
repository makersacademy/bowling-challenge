var Game = function(){
  this.frame = 1;
  this.turn = 1;
  this.total = 0
  this.scoreTable = [];
};

Game.prototype.addFrame = function (frame) {
  this.total += frame.total;
  this.scoreTable.push(frame);
  this.frame ++
};

Game.prototype.applyStrikeBonuses = function (i) {
  if (this.scoreTable[i+1] === undefined) {
    return;
  } else if (this.scoreTable[i+1].firstTurn === 'x') {
    if (this.scoreTable[i+2] === undefined) {
      return;
    } else {
      this.scoreTable[i].total += (this.scoreTable[i+1].total + this.scoreTable[i+2].total);
    }
  } else {
    this.scoreTable[i].total += (this.scoreTable[i+1].total);
  }
  if (this.scoreTable[i-1] === undefined) {
    return;
  } else {
    this.scoreTable[i].total += this.scoreTable[i-1].total;
  }
};

// Game.prototype.applySpareBonuses = function (running_total) {
//   if (this.scoreTable[i+1] === undefined) {
//     break;
//   } else {
//     this.scoreTable[i].total += (this.scoreTable[i+1].firstTurn + running_total);
//   }
//   return running_total;
// };

Game.prototype.calculateScores = function () {
  for (var i = 0; i < game.scoreTable.length; i++) {
    if (game.scoreTable[i].firstTurn === "x"){
      game.applyStrikeBonuses(i);
    // } else if (game.scoreTable[i].secondTurn === "/") {
    //   game.applySpareBonuses();
    } else {
      game.applyStandardScoring(i);
    }
  }
};

Game.prototype.applyStandardScoring = function (i) {
  if (this.scoreTable[i-1] === undefined) {
    return;
  } else {
    this.scoreTable[i].total += this.scoreTable[i-1].total;
  }
};

var Frame = function(frame){
  this.frame = frame
  this.firstTurn = 0;
  this.secondTurn = 0;
  this.total = 0;
};

Frame.prototype.addFirstScore = function (score) {
  if (score === 'x') {
    this.firstTurn = score;
    this.secondTurn = '-';
    this.addTotal();
  } else {
    this.firstTurn = score;
  }
};

Frame.prototype.addSecondScore = function (num) {
  this.secondTurn = num;
};

Frame.prototype.addTotal = function () {
  if (this.firstTurn === 'x' || this.secondTurn === '/') {
    this.total = 10;
  } else {
  this.total = (this.firstTurn + this.secondTurn);
  }
};

is_strike = function (firstTurn) {
  if (firstTurn === "x") {
    return true;
  } else {
    return false;
  }
};

is_spare = function (secondTurn) {
  if (secondTurn === "/") {
    return true;
  } else {
    return false;
  }
};
