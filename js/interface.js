$(document).ready(function() {

  var game = new Game;

  currentRoll = $('#score-sheet .current-roll');
  $('.current-score').text(game.score());

  $('.score').click(function(){
    score = $(this).val()
    game.roll(parseInt(score));
    $('.current-score').text(game.score());
    $(currentRoll).text(score);
    rollIndex = $(currentRoll).attr('data-roll')-1
    console.log(rollIndex)
    if (game.isStrike(rollIndex)) {
      console.log('yes');
      currentRoll = $('.current-roll').next().next('.roll');
      currentRoll.prev().prev().removeClass('current-roll');
    } else {
    console.log('no')
    currentRoll = $('.current-roll').next('.roll');
    }
    currentRoll.addClass('current-roll');
    currentRoll.prev().removeClass('current-roll');
    $('.rolls').text(game.rolls);
  });


  function UpdateScore() {

  }

});
