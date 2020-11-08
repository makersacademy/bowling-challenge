$(document).ready(function() {
  var scorecard = new Scorecard;
  updateScore();

  $('#one-pin').click(function(){
    scorecard.roll(1);
    updateScore();
  })

  function updateScore(){
    $('#score').text(scorecard.calculateScore())
  }
})
