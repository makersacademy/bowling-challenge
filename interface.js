$(document).ready(function(){
  var game = new Game();
  var scoreboard = new Scoreboard();
  $('#frameCount').text(game.frameCount);

  $(function () {
  $('#rackUp').click(function(){
    game.rackUp();
    updateFrameCount();
      $('#firstRoll').show();
                if ($(this.rackedPins).val() == false) {
                  $('.roll1').prop('disabled', true);
              } else {
                  $('.roll1').prop('disabled', false);
              };
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
  updateCurrentScore();
  });

  function updateFrameCount() {
    $('#frameCount').text(game.frameCount);
  };

  function updateCurrentScore() {
    scoreboard.calculateScore();
    $('#currentTotalScore').text(scoreboard.scores[scoreboard.scores.length-1]);
  };


});
