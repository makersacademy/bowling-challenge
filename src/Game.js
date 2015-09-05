function Game() {
  this.isStarted = false;
  this.player = new Player();

  this.start = function() {
    this.isStarted = true;
    prepareGame(this.player.scorecard);
  };
};

var prepareGame = function(scorecard) {
  for(var i=0; i < 12; i++){
    scorecard.list[i] = new BowlingFrame();
  };
};

// $('#NewGame').click(function(){
//   var game = new Game();
//   game.start();
// });



// Game.prototype.start = function() {
//     this.isStarted = true;
// };