$(document).ready(function() {
  var game;
  $('#frame').text(game.frame_counter);

  $('#bonus_roll').click(function() {
    let roll = $('#roll1').val();
    game.AddRolls(roll);
    let roll2 = $('#roll2').val();
    game.AddRolls(roll2);
    $('#roll_one').text(game.frames[0]);
    $('#roll_two').text(roll2);
  })
})
