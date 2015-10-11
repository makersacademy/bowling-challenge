$( document ).ready (function() {

  var player = new Player;
  var game = new Game;

  var updateFrames = function(){
    $( "#frame1" ).text(game.frames[1][0]);
    $( "#frame1t2" ).text(game.frames[1][1]);

    $( "#frame2" ).text(game.frames[2][0]);
    $( "#frame2t2" ).text(game.frames[2][1]);

    $( "#frame3" ).text(game.frames[3][0]);
    $( "#frame3t2" ).text(game.frames[3][1]);

    $( "#frame4" ).text(game.frames[4][0]);
    $( "#frame4t2" ).text(game.frames[4][1]);

    $( "#frame5" ).text(game.frames[5][0]);
    $( "#frame5t2" ).text(game.frames[5][1]);

    $( "#frame6" ).text(game.frames[6][0]);
    $( "#frame6t2" ).text(game.frames[6][1]);

    $( "#frame7" ).text(game.frames[7][0]);
    $( "#frame7t2" ).text(game.frames[7][1]);

    $( "#frame8" ).text(game.frames[8][0]);
    $( "#frame8t2" ).text(game.frames[8][1]);

    $( "#frame9" ).text(game.frames[9][0]);
    $( "#frame9t2" ).text(game.frames[9][1]);

    $( "#frame10" ).text(game.frames[10][0]);
    $( "#frame10t2" ).text(game.frames[10][1]);
    $( "#frame10t3" ).text(game.frames[10][2]);

  };

  $( "#score" ).click(function( event ) {
    player.bowl($(".form-control").val());
    game.update(player);
    updateFrames();
  });
});
