MAXPINS = 10

function Game(){
  this._frames = []
  this.totalscore = 0
  this.currentframe = []
  this.roll = 0
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
};

Game.prototype.endround = function(){
  this._frames.push(this.currentframe)
  this._newFrame();
  if(this.roll === MAXPINS){
    this._SpareBonus();
  };
};



Game.prototype._addscore = function(){
  for (var i = 0; i < this.currentframe.length; i++ ){
    this.totalscore += this.currentframe[i];
  };
};



Game.prototype._strike = function() {
  if(this.roll === MAXPINS){
    this._frames.push(this.currentframe);
    this._StrikeBonus();
    this._newFrame();
    return 'STRIKE';
  };
};


Game.prototype._SpareBonus = function(){

};

Game.prototype._StrikeBonus = function(){

};
