$(document).ready(function(){
  var game = new Game();

  $('#zero').click(function() {
    game.roll(0);
    $('#tot').text(game.tot());
  });
  
});
