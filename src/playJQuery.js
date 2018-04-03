$( document ).ready(function() {
  var play = new Play;

  $( "#roll" ).click(function(event) {
    event.preventDefault();
    var pins = $( '#score-select' ).val();
      if (pins > 11) {
        $( '#score' ).text("Game Over")
      }
      else {
        play.roll(parseInt(pins))
        updateScore()
        updateFrameNo()}
  })

  function updateScore(){
    if (play._frameCounter > 10) {
      $( '#score' ).text('Score: ' + play._rolls.join(', '))
    }
    else if (play._frameCounter <= 10) {
      $( '#score' ).text("Final Score: " + play.score(play._score))
    }
  }

  function updateFrameNo(){
    $( '#frame' ).text('Frame: ' + play._frameCounter)
  }

})
