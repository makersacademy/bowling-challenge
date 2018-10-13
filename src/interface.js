$(document).ready(function runDocument() {
  var game = new Game()

  score = function() {
    // for (var i = 0; i < 10; i++) {
      for (var j = 0; j < game.rolls.length; j++) {
        if (game.isStrike(j)) {
          $("#F" + game.frameCount + "r" + j).text('X')
        } else if (game.isSpare(j)) {
          $("#F" + game.frameCount + "r" + j).text('/')
        } else {
          $("#F" + game.frameCount + "r" + j).text(game.rolls[j]);
        }
      }


  }

  $('#rollonesub').click(function(event) {
    event.preventDefault();
   let inputroll = $('#rollOne').val();
   game.roll(inputroll)
   score();
})


 $('#reset').click(function() {
   game.resetGame()
 })

});
