$(document).ready(function(){
  var game = new Game();
  var scoreboard = new Scoreboard();
  $('#frameCount').text(game.frameCount);

  $(function () {
  $('#rackUp').click(function(){
    $('#firstRoll').show();
    $('#secondRoll').show();
    game.rackUp();
    if ($(this.rackedPins).val() == false) {
                $('.roll1').prop('disabled', true);
            } else {
                $('.roll1').prop('disabled', false);
            }
        });
  });

  $('#firstRoll').click(function(){
    $(this).hide();
    $('#pinSweep').show();
  $('#firstScore').text(scoreboard.scoreFirstRoll(game.firstRoll()))
  });

  $(function () {
  $('#pinSweep').click(function(){
    $(this).hide();
    game.pinSweep();
    if ($(this.sweep).val() == false) {
                $('.roll2').prop('disabled', true);
            } else {
                $('.roll2').prop('disabled', false);
            }
        });
  });

  $('#secondRoll').click(function(){
    $(this).hide();
  $('#secondScore').text(game.secondRoll());
  updateCurrentScore();
  });

  // $('#restart').click(function(){
  //   game.newGame();
  // });

  function updateCurrentScore() {
    $('#currentTotalScore').text(game.currentRoundScore());
    $('#runningTotal').text(game.runningTotal());
  };


});
