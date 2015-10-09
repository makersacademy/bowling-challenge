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
  this.frame = 1;
};

Game.prototype.tallyScore = function(player){
  for( i=this.frame; i < (Object.keys(this.frames).length); i++){
    for( j = player.turn; j < (Object.keys(this.frames[i]).length); j++){
    this.totalScore += (this.frames[i][j])
    };
  };
};

Game.prototype.updateScore = function(player){
  this.addScoretoFrame(player);
  this.strikeCheck(this.frame);
  this.tallyScore(player);
  player.updateTurn();
  this.updateFrame(player)
};

Game.prototype.nextFrame = function(){
  this.frame += 1
};

Game.prototype.updateFrame = function(player){
  if( player.turn == 0 ){ this.nextFrame() }
};

Game.prototype.strikeCheck = function(frame) {
  if(this.frames[frame] == 10){ this.nextFrame() }
};

Game.prototype.addScoretoFrame = function(player) {
  this.frames[this.frame][player.turn] = (player.downedPins)
};

Game.prototype.addBonuses = function(player) {
  if(this.frames[(this.frame)-1][0] == 10){
    (this.frames[(this.frame)-1][1]) += (player.downedPins)
  }
};
