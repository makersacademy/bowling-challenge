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
    frameNumber += 1
    $('#frame').text(frameNumber)
  });


  $('#showScore').click(function() {
    $('#score').text(scoreTotal());
  });

  function firstScore() {
    var n = document.getElementById("bowl").value
    return(n);
    }
  function secondScore() {
    var n = document.getElementById("bowl2").value
    return(n);
    }

  function scoreTotal(){
    let s = 0;
    for(let i = 0; i < total.length; i++){
      s = s + this.total[i];
    }
    return(s);
}
});