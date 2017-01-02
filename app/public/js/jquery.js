$(document).ready(function () {
  var game = new Game(Frame);
  updatefinalSum();

  $("#roll1").click(function() {
    game.roll(1); //update model
    updateScore(); //update view
  });

  $("#roll2").click(function() {
    game.roll(1); //update model
    updateScore(); //update view
  });

  $("#roll3").click(function() {
    game.roll(1); //update model
    updateScore(); //update view
  });

  $("#roll4").click(function() {
    game.roll(1); //update model
    updateScore(); //update view
  });

  $("#roll5").click(function() {
    game.roll(1); //update model
    updateScore(); //update view
  });

  $("#roll6").click(function() {
    game.roll(1); //update model
    updateScore(); //update view
  });

  $("#roll7").click(function() {
    game.roll(1); //update model
    updateScore(); //update view
  });

  $("#roll8").click(function() {
    game.roll(1); //update model
    updateScore(); //update view
  });

  $("#roll9").click(function() {
    game.roll(1); //update model
    updateScore(); //update view
  });

  $("#roll10").click(function() {
    game.roll(1); //update model
    updateScore(); //update view
  });

  function updateScore() {
    $('#score').text(game.finalSum());
  };

});
