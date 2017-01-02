function Game() {
  this.rolls = [];
  this.framez = [];
  this.result = 0
};

if (!Array.prototype.last){
    Array.prototype.last = function(n){
        return this[this.length - n];
    };
};

Game.prototype.cleanRolls = function() {
  this.rolls = [];
};

Game.prototype.recordRoll = function(roll) {
  if (typeof roll !== "number") {
    throw Error("A roll needs to be a number");
  }
  this.rolls.push(roll);
  this.calculateSpare();
  if (this.isGameCompleted()) {
    this.calculateResult();
  }
  if (this.isFrameCompleted()) {
    this.recordFrame();
  }
};

Game.prototype.isFrameCompleted = function() {
  return (this.rolls.length === 2 || this.isStrike());
};
Game.prototype.isStrike = function() {
  return this.rolls[0] === 10
};

Game.prototype.isLastFrameStrike = function() {
  return this.framez.length !== 0 && this.framez.last(1)[0] === 10
};

Game.prototype.isDoubleStrike = function() {
  return this.framez.length >= 2 && this.framez.last(2)[0] === 20
};

Game.prototype.calculateStrike = function() {
  if (this.isDoubleStrike()) {
    this.framez.last(2)[0] += this.rolls[0]
  }
  if (this.isLastFrameStrike()) {
    this.framez.last(1)[0] += this.rolls.reduce(function(a, b=0) {
          return a + b;
      }, 0);
  }
};

Game.prototype.isLastFrameSpare = function() {
  return this.framez.length !== 0 && this.framez.last(1).length === 2 && this.framez.last(1)[0] + this.framez.last(1)[1] === 10
};

Game.prototype.calculateSpare = function() {
  if (this.isLastFrameSpare() && this.rolls.length === 1) {
    this.framez.last(1)[1] += this.rolls[0]
  }
};

Game.prototype.recordFrame = function() {
  this.calculateStrike();
  this.framez.push(this.rolls);
  this.cleanRolls();
  if (this.isGameCompleted()) {
    this.calculateResult();
  }
};

Game.prototype.isRegularEnd = function() {
  return this.framez.length === 10 && !(this.isLastFrameStrike()) && !(this.isLastFrameSpare())
}

Game.prototype.isGameCompleted = function () {
  if (this.isRegularEnd()) {
    return true
  } else if (this.framez.length === 10 && this.isLastFrameSpare()){
    return this.rolls === 1
  } else {
    return this.framez.length === 12
  }
};

Game.prototype.cutExtraFramez = function() {
  for(var i=0; i < 2; i++){
    if (this.framez.length > 10) {
      this.framez.pop();
    }
  }
};

Game.prototype.cleanFramez = function() {
  this.framez = [];
};

Game.prototype.calculateResult = function() {
  this.result = 0;
  this.cutExtraFramez();
  var allRolls = this.framez.reduce(function(a, b) {
    return a.concat(b);
  }, []);
  this.result = allRolls.reduce(function(a, b=0) {
        return a + b;
    }, 0);
  this.cleanFramez();
};
