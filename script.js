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
    if (pins === 10 && frameNumber < 10) {
      game.endFrame();
      game.countBonus();
      game.newFrame();
    };
    if (game.frameNumber === 10 ) {
      // if (pins === 10){
      //   if (game._frame.length == 3){
      //     game.endFrame();
      //     game.countBonus();
      //   }
        if (game._frame.length == 2){
          game.endFrame();
          game.countBonus();
        }
      // };
      frame10.innerHTML = game.frameLog[10];
      marker10.innerHTML = game.frameScore[10];
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

  // $('#new-game').click(function(){
  //   game.newGame();
  // });

});
