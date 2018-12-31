var Game = function(){
  this.frame = 1;
  this.turn = 1;
  this.gameOver = false;
  this.scoreTable = [];
};

Game.prototype.addFrame = function (frame) {
  this.scoreTable.push(frame);
  this.frame ++
};

Game.prototype.updateTotal = function () {
  for (var i = 0; i < this.scoreTable.length; i++) {
    this.total += this.scoreTable[i].total
  }
};

Game.prototype.addPrevious = function (i) {
  if (this.scoreTable[i-1] === undefined) {
    return;
  } else {
    this.scoreTable[i].total += this.scoreTable[i-1].total;
  }
};

Game.prototype.applyStrikeBonuses = function (i) {
  if (this.scoreTable[i+1] === undefined) {
    return;
  } else if (this.scoreTable[i+1].firstTurn === 'x' || this.scoreTable[i+1].firstTurn === 'X') {
    if (this.scoreTable[i+2] === undefined) {
      return;
    } else {
      this.scoreTable[i].total += (this.scoreTable[i+1].total + this.scoreTable[i+2].total);
    }
  } else {
    this.scoreTable[i].total += (this.scoreTable[i+1].total);
  }
  game.scoreTable[i].bonusApplied = true;
  this.addPrevious(i);
};

Game.prototype.applySpareBonuses = function (i) {
  if (this.scoreTable[i+1] === undefined) {
    return;
  } else if (this.scoreTable[i+1].firstTurn === "x" || this.scoreTable[i+1].firstTurn === "X") {
    this.scoreTable[i].total += 10;
  } else {
    this.scoreTable[i].total += this.scoreTable[i+1].firstTurn;
  }
  game.scoreTable[i].bonusApplied = true;
  this.addPrevious(i);
};

Game.prototype.applyStandardScoring = function (i) {
  if (this.scoreTable[i-1] === undefined) {
    game.scoreTable[i].bonusApplied = true;
    return;
  } else {
    this.scoreTable[i].total += this.scoreTable[i-1].total;
    game.scoreTable[i].bonusApplied = true;
  }
};

Game.prototype.calculateScores = function () {
  for (var i = 0; i < game.scoreTable.length; i++) {
    if (game.scoreTable[i].firstTurn === "x" &&
        game.scoreTable[i].bonusApplied === false ||
        game.scoreTable[i].firstTurn === "X" &&
        game.scoreTable[i].bonusApplied === false){
      game.applyStrikeBonuses(i);
    } else if (game.scoreTable[i].secondTurn === "/" && game.scoreTable[i].bonusApplied === false) {
      game.applySpareBonuses(i);
    } else if (game.scoreTable[i].bonusApplied === false) {
      game.applyStandardScoring(i);
    }
  }
};

Game.prototype.overCheck = function () {
  if (game.scoreTable[9] === undefined) {
    return;
  } else if (game.scoreTable[9].bonusApplied === true) {
    game.gameOver = true;
  }
};

var Frame = function(frame){
  this.frame = frame
  this.firstTurn = 0;
  this.secondTurn = 0;
  this.bonusApplied = false;
  this.total = 0;
};

Frame.prototype.addFirstScore = function (score) {
  if (score === "/"){
    alert("'/' can only be entered on the second go")
  } else if (score === 'x' || score === 'X') {
    this.firstTurn = score;
    this.secondTurn = '-';
    this.addTotal();
  } else {
    this.firstTurn = parseInt(score);
  }
};

Frame.prototype.addSecondScore = function (score) {
  if (score === '/') {
    this.secondTurn = score;
  } else {
    this.secondTurn = parseInt(score);
  }
  this.addTotal();
};

Frame.prototype.addTotal = function () {
  if (this.firstTurn === 'x' || this.firstTurn === 'X' || this.secondTurn === '/') {
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
