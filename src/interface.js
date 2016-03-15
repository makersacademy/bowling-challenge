$(document).ready(function() {
  var game = new Game();

  $('#btn9').on('error', function(){
    $("#errorbox").text("Don't CHEAT!!");
  });

  $('#totalscore').text(game._score);

  $('#btn0').on('click', function(){
    game.buttonActions(0);
  });
  $('#btn1').on('click', function(){
    game.buttonActions(1);
  });
  $('#btn2').on('click', function(){
    game.buttonActions(2);
  });
  $('#btn3').on('click', function(){
    game.buttonActions(3);
  });
  $('#btn4').on('click', function(){
    game.buttonActions(4);
  });
  $('#btn5').on('click', function(){
    game.buttonActions(5);
  });
  $('#btn6').on('click', function(){
    game.buttonActions(6);
  });
  $('#btn7').on('click', function(){
    game.buttonActions(7);
  });
  $('#btn8').on('click', function(){
    game.buttonActions(8);
  });
  $('#btn9').on('click', function(){
    game.buttonActions(9);
  });
  $('#btn10').on('click', function(){
    game.buttonActions(10);
  });
});

Game.prototype.buttonActions = function(number) {
  this.nextBowl(number);
  $("#frame" + this._currentFrame + "roll" + this._currentRoll).text(this.activeFrame()._rolls[this._currentRoll-1]);
  $("#framescore" + this._currentFrame).text(this.activeFrame()._frameScore);
  $("#totalscore").text(this._score);
  if(this._frames.length > 1) {
    $("#framescore" + (this._currentFrame-1)).text(this.previousFrame()._frameScore);
  }
  if(this._frames.length > 2) {
    $("#framescore" + (this._currentFrame-2)).text(this.twoFramesAgo()._frameScore);
  }
  this.hideNumbers(number);
  this.resultMessage(number);
  this.errorMessage();
  this.gutterGameMessage();
  this.perfectGameMessage();
  this.updateCurrentFrame();
};

Game.prototype.hideNumbers = function(number) {
  if(this._currentFrame != 10) {
    if(this._currentRoll === 1) {
      if(this.activeFrame().isStrike() === false) {
        for (i = 10; i > (10-number); i--) {
          $("#btn" + i).hide();
        }
      }
    } else {
      $( ".button" ).show();
    }
  }
};

Game.prototype.errorMessage = function() {
  if(this.gameOver()) {
    $("#errorbox").text("GAME OVER!!");
    for (i = 10; i > (-1); i--) {
      $("#btn" + i).hide();
    }
  }
};

Game.prototype.resultMessage = function(number) {
  if(this.activeFrame().isStrike()) {
    $("#errorbox").text("STRIKE!! You rock");
  } else if(number === 0) {
    $("#errorbox").text("GUTTERBALL!! Bowl down the middle you fool");
  } else if(this.activeFrame().isSpare()) {
    $("#errorbox").text("SPARE!! You've played before");
  } else {
    $("#errorbox").text("");
  }
};

Game.prototype.gutterGameMessage = function() {
  if(this.gutterGame()) {
    $("#errorbox").text("GAME OVER!! OH NO, GUTTER GAME");
    $('.endpicture').prepend('<img id="mourinho" class="pictures" src="./images/upset_mourinho.jpg" />');
  }
};

Game.prototype.perfectGameMessage = function() {
  if(this.perfectGame()) {
    $("#errorbox").text("PERFECT GAME!! INCREDIBLE SCENES");
    $('.endpicture').prepend('<img id="klopp" class="pictures" src="./images/klopp-celebrating.jpg" />');
  }
};
