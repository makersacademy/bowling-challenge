var game = new Game();
// var frame1 = new Frame();
// var frame2 = new Frame();

$(document).ready(function() {
  
  $('#submitScore1').click(function() {
    var r1 = parseInt(f1roll1.value, 10)
    var r2 = parseInt(f1roll2.value, 10)
    game.addScore(r1,r2)
    $('#frameScore1').text(r1 + r2)
    $('#gameScore1').text(game.score)
    if(r1 === 10) {
      $('#text')
    }
    $('#f1roll1').replaceWith(r1)
    $('#f1roll2').replaceWith(r2)
      if(r1 === 10) {
        $('#notes1').text('Strike!!!')
      } else if( r1 + r2 === 10) {
        $('#notes1').text('Spare!!!')
      }
  });

  $('#submitScore2').click(function() {
    var r1 = parseInt(f2roll1.value, 10)
    var r2 = parseInt(f2roll2.value, 10)
    game.addScore(r1,r2)
    $('#frameScore2').text(r1 + r2)
    $('#gameScore2').text(game.score)
    if(r1 === 10) {
      $('#text')
    }
    $('#f2roll1').replaceWith(r1)
    $('#f2roll2').replaceWith(r2)
      if(r1 === 10) {
        $('#notes2').text('Strike!!!')
      } else if( r1 + r2 === 10) {
        $('#notes2').text('Spare!!!')
      }
  });

  $('#frameCount').text(game.frameCount)




});
  