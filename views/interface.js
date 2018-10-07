$(document).ready(function() {
  var game = new Bowling();
  var pins;
  $('#scorer').text(0);
  // $('#pins').text(?????);
  // $('#frame').text(????);
  // $('#ball').text(????);

  $('#roller').submit(function(event){
    event.preventDefault(); // what does this do?... stops page refresh?
    // game.roll($('#bowlButt').val());
    // game.roll($('Bowl').val());
    game.roll(5); // *** HOW DO I PASS IN 'PINS' ***
    $('#scorer').text(game.score());
  });

  $('#reset').click(function(){ // put reset function in the logic instead?
    game = new Bowling();
    $('#scorer').text(game.score());
  });

  // the below is to stop repetition...

  // function updateScore() {
  //   $('#scorer').text(game.score);
  // };

});
