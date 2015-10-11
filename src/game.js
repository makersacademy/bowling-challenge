function Game() {
  this.frames = { 1: [0,0],
                  2: [0,0],
                  3: [0,0],
                  4: [0,0],
                  5: [0,0],
                  6: [0,0],
                  7: [0,0],
                  8: [0,0],
                  9: [0,0],
                  10: [0,0,0]
                };
  this.totalScore = 0;
  this.bonusPoints = 0;
  this.frame = 1;
  this.tenthTurn = 0;
};

Game.prototype.tallyScore = function(player){
  this.totalScore = 0;
  for( i = 1; i < (Object.keys(this.frames).length + 1); i++){
    for( j = 0; j < (Object.keys(this.frames[i]).length); j++){
    this.totalScore += this.frames[i][j]
    };
  };
  this.totalScore += this.bonusPoints
};

Game.prototype.update = function(player){
  if(this.frame == 10){
    this.updateScoreOnTenthFrame(player)
  }
  else {
    this.updateScore(player)
  }
};

Game.prototype.updateScore = function(player){
  this.addScoreToFrame(player);
  if(this.frame > 1){this.addBonuses(player)};
  this.tallyScore(player);
  player.updateTurn();
  this.strikeCheck(this.frame);
  this.updateFrame(player)
};

Game.prototype.updateScoreOnTenthFrame = function(player){
  this.addScoreToTenthFrame(player);
  this.tallyScore(player);
  this.isGameOver();
  this.updateTenthTurn()
};

Game.prototype.nextFrame = function(){
  this.frame += 1
};

Game.prototype.updateFrame = function(player){
  if( player.turn == 0 ){ this.nextFrame() }
};

Game.prototype.strikeCheck = function(frame) {
  if(this.frames[frame] == [10,0]){ this.nextFrame() }
};

Game.prototype.addScoreToFrame = function(player) {
  this.frames[this.frame][player.turn] = (player.downedPins)
};

Game.prototype.addScoreToTenthFrame = function(player) {
  this.frames[this.frame][this.tenthTurn] = (player.downedPins)
};

Game.prototype.addBonuses = function(player) {
  if(((this.frames[(this.frame)-1][0])+(this.frames[(this.frame)-1][1])) == 10){
    this.strikeBonus(player);
    this.spareBonus(player)
  };
};

Game.prototype.strikeBonus = function(player) {
  if(this.frames[(this.frame)-1][0] == 10) {
    if(player.downedPins == 10){
      this.bonusPoints += 20
    }
    else{
    this.bonusPoints += (player.downedPins)
    }
  }
};

Game.prototype.spareBonus = function(player) {
  if(player.turn == 0 && this.frames[(this.frame)-1][0] != 10) {
    this.bonusPoints += (player.downedPins)
  }
};

Game.prototype.updateTenthTurn = function(){
  this.tenthTurn += 1
};

Game.prototype.isGameOver = function() {
  if(this.tenthTurn == 3){return true};
  if ((this.frames[10][0] + this.frames[10][1]) < 10){
    return true
  }
  return false
};
