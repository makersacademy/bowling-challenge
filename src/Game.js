function Game() {
  this.isStarted = false;

  this.start = function() {
    this.isStarted = true;
    prepareGame();
  };
};

// $('#NewGame').click(function(){
//   var game = new Game();
//   game.start();
// });



// Game.prototype.start = function() {
//     this.isStarted = true;
// };