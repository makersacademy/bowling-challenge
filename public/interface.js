$(document).ready(function() {
  var bowling = new BowlingGame;
  var player = new Player;

  var isStrike = function(pins) {
    return pins === 10;
  };

  $('#roll').on('click', function() {
    var pins = player.bowl();
    // var pins = 1;
    bowling.roll(pins);
    $('#' + bowling.currentRoll.toString()).text(bowling._rolls[bowling.currentRoll - 1]);
    $('#rolls').text(bowling.currentRoll);
  })

  $('#result').on('click', function() {
    $('#score').text(bowling.score());
    event.preventDefault();
    $( this ).hide( "slow" );
  })







});
