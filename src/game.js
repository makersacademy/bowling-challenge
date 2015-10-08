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

Game.prototype.tallyScore = function(){
  for( i=1; i < 10; i++){
    for( j = 0; j < 2; j++){
    this.totalScore += (this.frames[i][j])
    };
  };
};

Game.prototype.updateScore = function(player){
  this.frames[this.frame][player.turn] = (player.downedPins);
  this.tallyScore();
  player.updateTurn()
};

Game.prototype.nextFrame = function(){
  this.frame += 1
};
