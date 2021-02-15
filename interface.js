$(document).ready(function() {
  var game;
  game = new Game();
  $('#frame').text(game.frame_counter + 1);

  $('#submit').mouseover(function() {
    // event.preventDefault();
    let roll = $('#roll1').val();
    console.log(roll);
    game.run(roll);
    $('#f1r1').text(game.frames[game.frame_counter].roll1);
  })
})
