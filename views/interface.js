$(document).ready(function() {
  var game = new Bowling();
  // var pins // need????
  $('#scorer').text(0);
  $('#pins').text(0);
  // $('#pins').text(?????);
  // $('#frame').text(????);
  // $('#ball').text(????);

  $('#roller').submit(function(event){
    event.preventDefault(); // what does this do?... stops page refresh?
    var num = Number($('#bowlButt').val());
    game.roll(num);
    $('#scorer').text(game.score());
    $('#pins').text(game.scorecard());
  });

  $('#reset').click(function(){ // put reset function in the logic instead?
    game = new Bowling();
    $('#scorer').text(game.score());
    $('#pins').text(0);
  });

  // the below is to stop repetition...

  // function updateScore() {
  //   $('#scorer').text(game.score);
  // };

});
