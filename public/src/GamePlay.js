function GamePlay(player) {
  var _currentFrame;
  var _pinsBowled;
  var _game;
  var _player
  this._game = new Game();
  this._player = player;
  this._currentFrame = 1;
  this._pinsBowled = [];

}


GamePlay.prototype.pinsBowled = function() {
  for (var i = 0; i < arguments.length; i++) {
        this._pinsBowled.push(parseInt(arguments[i]));
    }
  return this._pinsBowled;
};

GamePlay.prototype.frameHistory = function() {
  var i = 0;
  var j = 0;
  while (i <= this._pinsBowled.length-1) {
    if(this._pinsBowled[i] === 10) {
      this._game.setPinsPerRoll(j,0,this._pinsBowled[i]);
      this._game.setPinsPerRoll(j,1,0);
      i++
      j++
    } else {
      this._game.setPinsPerRoll(j,0,this._pinsBowled[i]);
      if((i+1) > this._pinsBowled.length-1) {
        this._game.setPinsPerRoll(j,1,0);
      } else {
        this._game.setPinsPerRoll(j,1,this._pinsBowled[i+1]);
      }
      i++;
      i++;
      j++;
    }
  }

  if(j > 11 && this._game.isStrike(10) && (this._game.isSpare(9) || this._game.isStrike(9))){
    return 12;
  }
  if( j > 10 && (this._game.isSpare(9) || this._game.isStrike(9)) ){
    return 11;
  }
  if( j > 10) {
    return 10;
  }
  return j;

};

GamePlay.prototype.currentFrame = function() {
  return this.frameHistory();
};

GamePlay.prototype.cumScore = function() {
  return this._game.cumScore(this.frameHistory()-1);
};

GamePlay.prototype.getName = function() {
  return this._player.getName();
};

