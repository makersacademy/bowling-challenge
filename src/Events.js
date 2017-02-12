$(document).ready(function(){
  var game = new Game();

  $(".totalScore").text(
    game.totalScore()
  )

  $("#roll1").click(function(){
    game.roll(roll1, roll2)

  })

});
