$(document).ready(function() {
  var game = new Bowling();
  // var pins // need????
  $('#scorer').text(0);
  $('#pins').text(0);
  $('#ball').text(1);
  $('#frame').text(1);

  $('#roller').submit(function(event){
    event.preventDefault(); // what does this do?... stops page refresh?
    var num = Number($('#bowlButt').val());
    game.roll(num);
    $('#scorer').text(game.score());
    $('#pins').text(game.scorecard());
    $('#ball').text(game.ball());
    $('#frame').text(game.frame());
  });

  $('#reset').click(function(){ // put reset function in the logic instead?
    game = new Bowling();
    $('#scorer').text(game.score());
    $('#pins').text(0);
    $('#ball').text(0);
    $('#frame').text(1);
  });

  // the below is to stop repetition...

  // function updateScore() {
  //   $('#scorer').text(game.score);
  // };

});
