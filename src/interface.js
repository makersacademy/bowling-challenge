var game = new Game();
var frame1 = new Frame();
var frame2 = new Frame();

$(document).ready(function() {
  
  $('#submitScore').click(function() {
    var r1 = parseInt(roll1.value, 10)
    var r2 = parseInt(roll2.value, 10)
    game.addScore(r1,r2)
    $('#frameScore').text(r1 + r2)
    $('#gameScore').text(game.score)
    if(r1 === 10) {
      $('#text')
    }
    $('#roll1').replaceWith(r1)
    $('#roll2').replaceWith(r2)
  });

  // $('#notes').text(function() {
    if(r1 + r2 === 10) {
      $('#notes').text('Strike')
    }
  // })
    
    
  $('#frameCount').text(game.frameCount)




});
    
    // function updateFrameScore() {
    //   $('#frame-score').text(('#roll1').value+('#roll2').value);
    // };