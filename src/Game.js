function Game() {
  this.isStarted = false;

  this.start = function() {
    this.isStarted = true;
    prepareGame();
  };
};

var prepareGame = function() {
  for(var i=0; i < 10; i++){
    Scorecard.list[i] = new BowlingFrame();
    if(i===9) {Scorecard.list[i].subFrame['three'] = 0;}
  };
};

// $('#NewGame').click(function(){
//   var game = new Game();
//   game.start();
// });



// Game.prototype.start = function() {
//     this.isStarted = true;
// };