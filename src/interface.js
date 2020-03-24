var game = new Game();
var frame1 = new Frame();

$(document).ready(function() {
  
  console.log("hello")
  console.log(roll2.value)
  
  $('#submitScore').click(function() {
    r1 = parseInt(roll1.value, 10)
    r2 = parseInt(roll2.value, 10)
    game.addScore(r1,r2)
    $('#frame-score').text(r1 + r2)
    $('#game-score').text(game.score)
  });



});
    
    // function updateFrameScore() {
    //   $('#frame-score').text(('#roll1').value+('#roll2').value);
    // };