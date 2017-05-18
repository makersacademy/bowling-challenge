$(document).ready(function(){
  var game = new Game();
  var number = 1;

$('#roll-2').click(function() {
  game.roll(2);
  console.log(1);
  $(`#r${number}`).text('2');
  number += 1;
});

$('#roll-3').click(function() {
  game.roll(3);
  $(`#r${number}`).text('3');
  number += 1;
  $('#r2-total').text(game.rollScore);
});

});
