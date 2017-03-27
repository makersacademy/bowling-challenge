var game;

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
  $('#Bf' + frame.frameNumber).text(frame.getFrameScore());
  content = "";

  if(frame.balls[0] == 10){
    content = "X";
  }
  else if ((frame.balls[0] + frame.balls[1]) === 10) {
    content = frame.balls[0] + " | /";
  }
  else{
    if(typeof frame.balls[1] !== 'undefined') {
      content = frame.balls[0] + " | " + frame.balls[1];
    }
    else {
      content = frame.balls[0];
    }
  }

  $('#Tf' + frame.frameNumber).text(content);
};

function updateGameScore(){
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
