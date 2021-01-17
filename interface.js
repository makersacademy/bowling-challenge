$(document).ready(function() {
  var game = new Game();

  $('.User_Roll').change(function() {
    let pins = parseInt($('.User_Roll').val());
    $(`#f${game.frameCount()}r${game.rollCount()}`).text(pins);
    game.roll(pins);
    frameResults();
    updateTotalScore();
    $('.User_Roll option').prop('selected', function(){
      return this.defaultSelected;
    })
  })

  $('#reset').click(function() {
    game = new Game();
    $('h2').text("");
    $('.frame_score').text("");
    $('#overall_score').text("");
  })

  function updateTotalScore() {
    $('#overall_score').text(game.scorer.total());
  }

  function frameResults() {
    if (!game._isAtStart()) {
      for (let i = 0; i < game.scoreCount(); i++) {
        $(`#frame${i + 1}_score`).text(game.scorer.scores[i]);
      }
    }
  }

})
