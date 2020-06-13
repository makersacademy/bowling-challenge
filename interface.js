$(document).ready(function () {
  let game = new BowlingGame();
  total = []
  frameNumber = 1

  $('#updateScore').click(function() {
    game.roll(firstScore());
    console.log(firstScore());
    game.roll(secondScore());
    console.log(secondScore());
    total.push(game.score());
    console.log(total);
    $('#frame').text(frameNumber +1)
  });


  $('#showScore').click(function() {
    $('#score').text(total);
  });

  function firstScore() {
    var n = document.getElementById("bowl").value
    return(n);
    }
  function secondScore() {
    var n = document.getElementById("bowl2").value
    return(n);
    }
});