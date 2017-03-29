var game;
var printer;

$( document ).ready(function() {
  startGame();
  for(var i = 0; i < 11; i++){
    $( "#" + i ).click(function(){
      takeTurn($(this).attr("value"));
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
  $('#blurb').text("' You knocked down " + score + " pins '");
};

function updateFrameScore(){
  frame = game._getCurrentFrame();
  $('#Tf' + frame.frameNumber).text(printer.printFrameBalls(frame.balls, frame.frameNumber));
  $('#Bf' + frame.frameNumber).text(frame.getFrameScore());
};

function updateGameScore(){
  console.log(game.frames);
  $('#score').text(game.getScore());
};

function updateBowlButtons(){
  max = game._getCurrentFrame()._getPins();
  for(var i = 0; i < 11; i++){
    if(i > max){$( "#" + i ).css("background-color","yellow")};
    if(i <= max){$( "#" + i ).css("background-color","pink")};
  }
};

function newGame(){
  location.reload();
};
