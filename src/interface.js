bowling = new Bowling();

$(document).ready(function() {

  updateGame();
  
  $("#submit").click(function() {
    var pinsHit = parseInt($('input#pins-hit').val());
    bowling.bowl(pinsHit);
    updateGame();
  })

  function updateGame() {
    $('#current-score').text(bowling.totalScore);
    $('#frame').text(bowling.frame);
    $('#roll').text(bowling.roll);
  };
})