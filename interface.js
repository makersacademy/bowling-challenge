$(document).ready(function() {
  var game = new Game();
  // console.log(game)
  $('#submit').on('click', function() {
    var rollScore = $('#RollScore').val();
    // var numScore = parseInt(rollScore);
    game.addRoll(parseInt(rollScore));
    // console.dir(game);
    console.log(game);
  })
  // console.log(game.totalScore)
})

