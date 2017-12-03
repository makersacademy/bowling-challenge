$(document).ready(function() {

  var game = new Game();
  var counter = 0;

  function updateScore () {
    $('#points').text("Points: " + game.scoreCard)
    $('#counter').text(getCounter())
    $('#finalscore').text(avoidNan(game.score()))
  }

  $("#newGame").on('click', function() {
    counter = 0;
    $("#newGame").html(game.newGame());
    updateScore();
  })

  $("#scoreOne").on('click', function() {
    counter += 1
    $("#scoreOne").html(game.bowl(1));
    updateScore();
  })

  $("#scoreTwo").on('click', function() {
    counter += 1
    $("#scoreTwo").html(game.bowl(2));
    updateScore();
  })

  $("#scoreThree").on('click', function() {
    counter += 1
    $("#scoreThree").html(game.bowl(3));
    updateScore();
  })

  $("#scoreFour").on('click', function() {
    $("#scoreFour").html(game.bowl(4));
    counter += 1
    updateScore();
  })

  $("#scoreFive").on('click', function() {
    $("#scoreThree").html(game.bowl(5));
    counter += 1
    updateScore();
  })

  $("#scoreSix").on('click', function() {
    $("#scoreSix").html(game.bowl(6));
    counter += 1
    updateScore();
  })

  $("#scoreSeven").on('click', function() {
    $("#scoreSeven").html(game.bowl(7));
    counter += 1
    updateScore();
  })

  $("#scoreEight").on('click', function() {
    $("#scoreEight").html(game.bowl(8));
    counter += 1
    updateScore();
  })

  $("#scoreNine").on('click', function() {
    $("#scoreNine").html(game.bowl(9));
    counter += 1
    updateScore();
  })

  $("#scoreTen").on('click', function() {
    $("#scoreTen").html(game.bowl(10));
    counter += 2
    updateScore();
  })

  function getCounter (){
    if (counter < 21){
      return "Frame: " + Math.floor((counter + 1) / 2);
    }
    else {
      $("#newGame").on('click', function() {
        counter = 0;
        $("#newGame").html(game.newGame());
        updateScore();
      })
    }
  }

  function avoidNan (value){
    if (isNaN(value)){
      return "Final score: calculating.."
    }
    else {
      return "Final score:" + value;
    }
  }

});
