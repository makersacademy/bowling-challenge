$(document).ready(function(){
  var game = new Game();

$('#frame-number').text(game.frameNumber);

  pinHit = function(pins){
    game.roll(pins);
    if (game._frame.length == 2){
      game.endFrame();
      game.countBonus();
      game.newFrame();
      $('#frame-number').text(game.frameNumber);

    };
    frameScore();
    totalScore();
    $('#total-score').text(game.getTotalScore());
  };

  frameScore = function() {
    for (let i = 1 ; i < game.frameNumber ; i ++){
    document.getElementById('frame'+i).innerHTML = game.frameLog[i];
    };
  };

  totalScore = function (){
    for (let i = 1 ; i < game.frameNumber ; i ++){
    document.getElementById('marker'+i).innerHTML = game.frameScore[i];
    };
  };

});
