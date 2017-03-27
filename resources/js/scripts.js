$(document).ready(function(){

  game = new BowlingGame();

  function showScore(){
    $('#Roll1').text(game.rolls[0])
    $('#Roll2').text(game.rolls[1])
    $('#Roll3').text(game.rolls[2])
    $('#Roll4').text(game.rolls[3])
    $('#Roll5').text(game.rolls[4])
    $('#Roll6').text(game.rolls[5])
    $('#Roll7').text(game.rolls[6])
    $('#Roll8').text(game.rolls[7])
    $('#Roll9').text(game.rolls[8])
    $('#Roll10').text(game.rolls[9])
    $('#Roll11').text(game.rolls[10])
    $('#Roll12').text(game.rolls[11])
    $('#Roll13').text(game.rolls[12])
    $('#Roll14').text(game.rolls[13])
    $('#Roll15').text(game.rolls[14])
    $('#Roll16').text(game.rolls[15])
    $('#Roll17').text(game.rolls[16])
    $('#Roll18').text(game.rolls[17])
    $('#Roll19').text(game.rolls[18])
    $('#Roll20').text(game.rolls[19])
    $('#Roll21').text(game.rolls[20])

  };

  function endGameScore () {
  $('#ScoreFrame10').text(game.score())
}

// SELECTING THE PINS
  $('#scoreone').on("click",function(){
    game.roll(1)
    showScore();
    endGameScore();
  });

  $('#scoretwo').on("click",function(){
    game.roll(2)
    showScore();
    endGameScore();
  });

  $('#scorethree').on("click",function(){
    game.roll(3)
    showScore();
    endGameScore();
  });

  $('#scorefour').on("click",function(){
    game.roll(4)
    showScore();
    endGameScore();
  });

  $('#scorefive').on("click",function(){
    game.roll(5)
    showScore();
    endGameScore();
  });

  $('#scoresix').on("click",function(){
    game.roll(6)
    showScore();
    endGameScore();
  });

  $('#scoreseven').on("click",function(){
    game.roll(7)
    showScore();
    endGameScore();
  });

  $('#scoreeight').on("click",function(){
    game.roll(8)
    showScore();
    endGameScore();
  });

  $('#scorenine').on("click",function(){
    game.roll(9)
    showScore();
    endGameScore();
  });

  $('#scoreten').on("click",function(){
    game.roll(10)
    showScore();
    endGameScore();
  });

});
