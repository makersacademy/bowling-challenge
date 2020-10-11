$(document).ready(function() {
  var game = new Game();
  updateScreen();

  $( '#1' ).click(function() {
    game.bowl(1);
    updateScreen();
  });
  $( "#2" ).click(function() {
    game.bowl(2);
    updateScreen();
  });
  $( "#3" ).click(function() {
    game.bowl(3);
    updateScreen();
  });
  $( "#4" ).click(function() {
    game.bowl(4);
    updateScreen();
  });
  $( "#5" ).click(function() {
    game.bowl(5);
    updateScreen();
  });
  $( "#6" ).click(function() {
    game.bowl(6);
    updateScreen();
  });
  $( "#7" ).click(function() {
    game.bowl(7);
    updateScreen();
  });
  $( "#8" ).click(function() {
    game.bowl(8);
    updateScreen();
  });
  $( "#9" ).click(function() {
    game.bowl(9);
    updateScreen();
  });
  $( "#10" ).click(function() {
    game.bowl(10);
    updateScreen();
  });
  function updateScreen() {
    game.reset();
    game.play();
    $('#current-score').text('Current Score is :' + game.score());
    $('#frame-number').text('Frame Number :' + game.frameNumber);
    $('#bowl-number').text('Ball Number :' + game.bowlNumber);
  };
});