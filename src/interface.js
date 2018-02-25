$(document).ready(function() {
  var bowling = new Bowling();

  $('#score').click(function(){
    var gameArr = $('#full-game').val().replace(/\s/,'').split(',').map(Number);
    // console.log(bowling.score(gameArr));
    $('#full-game').val('');
    $('#final-score').text('Total score for that game: ' + bowling.score(gameArr));
  });
});
