var game = new Game(Frame);

$('#bowl').click(function(){
  game.bowl();
  $('.frame#0').html(game.frameArray[0].firstRollScore)
});