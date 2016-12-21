$(document).ready(function(){
  var game = new Game();
  var scoreboard = new Scoreboard();
  $('#frameCount').text(game.frameCount);

  $(function () {
  $('#rackUp').click(function(){
    game.rackUp();
    updateCurrentScore();
    $('#firstRoll').show();
    if ($(this.rackedPins).val() == false) {
                $('.roll1').prop('disabled', true);
            } else {
                $('.roll1').prop('disabled', false);
            }
        });
  });

  $(function () {
  $('#firstRoll').click(function(){
    $(this).hide();
    $('#secondRoll').show();
  $('#firstScore').text(scoreboard.scoreFirstRoll(game.firstRoll()))
  if ($(this.sweepComplete).val() == false) {
              $('.roll2').prop('disabled', true);
          } else {
              $('.roll2').prop('disabled', false);
          }
      });
  });

  $('#secondRoll').click(function(){
    $(this).hide();
  $('#secondScore').text(scoreboard.scoreSecondRoll(game.secondRoll()));
  });

  // $('#restart').click(function(){
  //   game.newGame();
  // });

  function updateCurrentScore() {
    $('#frameCount').text(game.frameCount);
    // $('#currentTotalScore').text(game.currentRoundScore());
    // $('#runningTotal').text(game.runningTotal());
  };


});
