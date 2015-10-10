$( document ).ready (function() {

  var player = new Player;
  var game = new Game;

  var update = function(){
    $( "#frame1" ).text(game.frames[1][0])
  }

  $( "#score" ).click(function( event ) {
    player.bowl($(".form-control").val());
    game.updateScore(player);
    update();
  });
});
