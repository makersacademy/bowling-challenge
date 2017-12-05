MAXPINS = 10

function Game(){
  this._frames = [[0,0],[0,0]]
  this.totalscore = 0
  this.currentframe = []
  this.roll = 0
  this.count = 0
}

Game.prototype._newFrame= function(){
  this.currentframe = [];
  return 'Added new frame'
};

Game.prototype.playRound1 = function(pins){
  this.currentframe.push(pins);
  this.roll += pins;
  this._strike();
};

Game.prototype.playRound2 = function(pins){
  this.currentframe.push(pins);
  this.roll += pins
  this._addscore();
  this.maxRounds();
  this.endround();
  this._StrikeBonus();
  this._spare();
  this.roll = 0;
  this.endGame();
};

Game.prototype.endround = function(){
  this._frames.push(this.currentframe)
  this._newFrame();
};

Game.prototype._showtotalscore = function(){
  return this.totalscore;
};

Game.prototype._addscore = function(){
  this._iteration(this.currentframe)
};

Game.prototype._strike = function() {
  if(this.roll === MAXPINS){
    this._addscore();
    this.endround();
    this.roll = 0
    this.count += 1;
    return 'STRIKE';
  };
};

Game.prototype._spare = function(){
  this.addScoreLastArray()
  if(this.addScoreLastArray() === 10 && (this._frames[(this._frames.length) - 2].length) === 2){
    this._iteration(this._frames[(this._frames.length) - 1])
  };
};

Game.prototype._showcount = function(){
  return this.count;
};

Game.prototype._StrikeBonus = function(){
    if(this._frames[(this._frames.length) - 3].length === 1){
      this._iteration(this._frames[(this._frames.length) - 1])
      this._iteration(this._frames[(this._frames.length) - 2])
    };
};

Game.prototype._iteration = function(array){
  for (var i = 0; i < array.length; i++ ){
    this.totalscore += array[i];
  };
};

Game.prototype.addScoreLastArray = function(){
  this.sum = 0
  for (var i = 0; i < this._frames[(this._frames.length) - 2].length; i++ ){
    this.sum += this._frames[(this._frames.length) - 2][i];
  };
  return this.sum
};

Game.prototype.maxRounds = function(){
  if (this.count == 10 && this.currentframe[0] !== 10){
    this.count += 0
  } else {
    this.count += 1
  }
};

Game.prototype.endGame = function(){
  return this.count == 9 && this.currentframe[0] !== 10 || this.count === 11
}
