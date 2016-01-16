$(document).ready(function() {
  var game = new Game();

  $('#totalscore').text(game._score);

  $('#btn0').on('click', function(){
    game.nextBowl(0);
    game.buttonActions();
  });
  $('#btn1').on('click', function(){
    game.nextBowl(1);
    game.buttonActions();
  });
  $('#btn2').on('click', function(){
    game.nextBowl(2);
    game.buttonActions();
  });
  $('#btn3').on('click', function(){
    game.nextBowl(3);
    game.buttonActions();
  });
  $('#btn4').on('click', function(){
    game.nextBowl(4);
    game.buttonActions();
  });
  $('#btn5').on('click', function(){
    game.nextBowl(5);
    game.buttonActions();
  });
  $('#btn6').on('click', function(){
    game.nextBowl(6);
    game.buttonActions();
  });
  $('#btn7').on('click', function(){
    game.nextBowl(7);
    game.buttonActions();
  });
  $('#btn8').on('click', function(){
    game.nextBowl(8);
    game.buttonActions();
  });
  $('#btn9').on('click', function(){
    game.nextBowl(9);
    game.buttonActions();
  });
  $('#btn10').on('click', function(){
    game.nextBowl(10);
    game.buttonActions();
  });
});

Game.prototype.buttonActions = function() {
  $("#frame" + this._currentFrame + "roll" + this._currentRoll).text(this.activeFrame()._rolls[this._currentRoll-1]);
  $("#framescore" + this._currentFrame).text(this.activeFrame()._frameScore);
  $("#totalscore").text(this._score);
  if(this._frames.length > 1) {
    $("#framescore" + (this._currentFrame-1)).text(this.previousFrame()._frameScore);
  }
  if(this._frames.length > 2) {
    $("#framescore" + (this._currentFrame-2)).text(this.twoFramesAgo()._frameScore);
  }
  this.updateCurrentFrame();
};
