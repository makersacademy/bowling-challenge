var game;
var printer;

$(document).ready(function() {
  startGame();
  for(var i = 0; i < 11; i++){
    $( '#' + i ).click(function(){
      takeTurn($(this).attr('value'));
    });
  }
  $('#reset').click(newGame);
});

function startGame(){
  game = new Game();
  printer = new Printer();
};

function takeTurn(score){
  game.bowl(Number(score));
  updateBlurb(score);
  updateFrameScore();
  updateGameScore();
  updateBowlButtons();
};

function updateBlurb(score){
  if(!game.gameComplete()){
    $('#blurb').text('\' You knocked down ' + score + ' pins \'');
  }
  else{
      $('#blurb').text('\' Game over! You scored ' + game.getScore() +' \'');
  }
};

function updateFrameScore(){
  game.frames.forEach(function(frame){
    if(frame.getBalls().length > 0){
      $('#Tf' + frame.getFrameNumber()).text(printer.printFrameBalls(frame.getBalls(), frame.getFrameNumber()));
      $('#Bf' + frame.getFrameNumber()).text(frame.getFrameScore());
    }
  });
};

function updateGameScore(){
  $('#score').text(game.getScore());
};

function updateBowlButtons(){
  if(!game.gameComplete()){
    max = game._getCurrentFrame()._getPins();
    for(var i = 0; i < 11; i++){
      if(i > max){$( '#' + i ).prop('disabled',true)};
      if(i <= max){$( '#' + i ).prop('disabled',false)};
    }
  }
  else{
    for(var i = 0; i < 11; i++){
      $( '#' + i ).prop('disabled',true)
    }
  }
};

function newGame(){
  location.reload();
};
