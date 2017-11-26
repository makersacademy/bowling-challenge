$(document).ready(function() {

  var game = new Game();

  function updateScore () {
    $('#score').text(game.score(0))
  }

  $("#newGame").on('click', function() {
    $("#newGame").html(game.newGame());
    updateScore();
  })

  $("#scoreOne").on('click', function() {
    $("#scoreOne").html(game.bowl(1));
    updateScore();
    console.log(game.score())
  })

  $("#scoreTwo").on('click', function() {
    $("#scoreTwo").html(game.bowl(2));
    updateScore();
  })

  $("#scoreThree").on('click', function() {
     $("#scoreThree").html(game.bowl(3));
     updateScore();
  })

  $("#scoreFour").on('click', function() {
    $("#scoreFour").html(game.bowl(4));
    updateScore();
  })

  $("#scoreFive").on('click', function() {
     $("#scoreThree").html(game.bowl(5));
     updateScore();
  })

  $("#scoreSix").on('click', function() {
    $("#scoreSix").html(game.bowl(6));
    updateScore();
  })

  $("#scoreSeven").on('click', function() {
    $("#scoreSeven").html(game.bowl(7));
    updateScore();
  })

  $("#scoreEight").on('click', function() {
    $("#scoreEight").html(game.bowl(8));
    updateScore();
  })

  $("#scoreNine").on('click', function() {
    $("#scoreNine").html(game.bowl(9));
    updateScore();
  })

  $("#scoreTen").on('click', function() {
    $("#scoreTen").html(game.bowl(10));
    updateScore();
  })
});
