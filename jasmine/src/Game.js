MAXPINS = 10

function Game(){
  this._frames = [[0,0]]
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
  this.endround();
  this._spare();
  this.count += 1;
  this.roll = 0
};

Game.prototype.endround = function(){
  this._frames.push(this.currentframe)
  this._newFrame();
};



Game.prototype._addscore = function(){
  for (var i = 0; i < this.currentframe.length; i++ ){
    this.totalscore += this.currentframe[i];
  };
};

Game.prototype._strike = function() {
  if(this.roll === MAXPINS){
    this._addscore();
    this.endround();
    this.roll = 0
    this.count += 1;
    this._StrikeBonus();
    return 'STRIKE';
  };
};

Game.prototype._spare = function(){
  this.addScoreLastArray()
  if(this.addScoreLastArray() === 10){
    for (var i = 0; i < this._frames[(this._frames.length) - 1].length; i++ ){
      this.totalscore += this._frames[(this._frames.length) - 1][i];
    };
  };
};


Game.prototype._SpareBonus = function(){

};

Game.prototype._StrikeBonus = function(){

};

Game.prototype.addScoreLastArray = function(){
  this.sum = 0
  for (var i = 0; i < this._frames[(this._frames.length) - 2].length; i++ ){
    this.sum += this._frames[(this._frames.length) - 2][i];
  };
  return this.sum
};
