$(document).ready(function() {
  var game = new Bowling();
  $('#scorer').text(0);
  $('#pins').text("0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0");
  $('#ball').text(1);
  $('#frame').text(1);

  $('#roller').submit(function(event){
    event.preventDefault(); // what does this do?... stops page refresh?
    var num = Number($('#bowlButt').val());

    // if (game.frameCount === 10 && game.ballCount === 1 && num === 10) {
    //   game.roll(num);
    //   $('#pins').text(game.scorecard());
    // } // this is if ball 1 on last frame is a STRIKE.

    if (game.frameCount >= 10 && game.ballCount === 3) {
      game.roll(num);
      $('#pins').text(game.scorecard());
      $('#scorer').html("GAME OVER, FINAL SCORE " + game.score() + "<br/>(Please press -Reset- to restart)");
    } else {
      game.roll(num);
      $('#scorer').text(game.score());
      $('#pins').text(game.scorecard());
      $('#ball').text(game.ball());
      $('#frame').text(game.frame());
    }
  });

  $('#reset').click(function(){ // put reset function in the logic instead?
    game = new Bowling();
    $('#scorer').text(game.score());
    $('#pins').text("0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0");
    $('#ball').text(1);
    $('#frame').text(1);
  });

  // the below is to stop repetition...

  // function updateScore() {
  //   $('#scorer').text(game.score);
  // };

});
