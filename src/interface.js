var game = new Game();
var frame1 = new Frame();
var frame2 = new Frame();

$(document).ready(function() {  
  $("#f1roll1" ).change(function(){
    frame1.rollOne(f1roll1.value)
    $('#f1roll1').replaceWith(frame1.rollOneScore())
    if(frame1.rollOneScore() === 10) {
      $('#notes1').text('Strike!!!')
      $('#f1roll2').replaceWith("-")
      $("#frame2").fadeToggle()
    }
  })
  
  $("#f1roll2").change(function(){
    frame1.rollTwo(f1roll2.value)
    game.addScore(frame1.rollOneScore(),frame1.rollTwoScore())
    $("#frameScore1").text(frame1.frameScores())
    $("#gameScore1").text(game.score)
    $('#f1roll2').replaceWith(frame1.rollTwoScore())
    if( frame1.rollOneScore() + frame1.rollTwoScore() === 10) {
      $('#notes' + game.frameCount).text('Spare!!!')
    }
    game.frameCountPlusOne()
    $("#frame" + game.frameCount).fadeToggle()
  })

  // $('#submitScore'+ game.frameCount).click(function() {
  //   var r1 = parseInt(f1roll1.value, 10)
  //   var r2 = parseInt(f1roll2.value, 10)

  //   game.addScore(r1,r2)
  //   $('#frameScore' + game.frameCount ).text(r1 + r2)
  //   $('#gameScore' + game.frameCount).text(game.score)
  //   if(r1 === 10) {
  //     $('#text')
  //   }
  //   $('#f1roll1').replaceWith(r1)
  //   $('#f1roll2').replaceWith(r2)
  //     if(r1 === 10) {
  //       $('#notes' + game.frameCount).text('Strike!!!')
  //     } else if( r1 + r2 === 10) {
  //       $('#notes' + game.frameCount).text('Spare!!!')
  //     }
  //     game.frameCountPlusOne
  //     $('#frame' + (game.frameCount += 1)).fadeToggle();
  // });

  // $('#submitScore2').click(function() {
  //   var r1 = parseInt(f2roll1.value, 10)
  //   var r2 = parseInt(f2roll2.value, 10)
  //   game.addScore(r1,r2)
  //   $('#frameScore2').text(r1 + r2)
  //   $('#gameScore2').text(game.score)
  //   if(r1 === 10) {
  //     $('#text')
  //   }
  //   $('#f2roll1').replaceWith(r1)
  //   $('#f2roll2').replaceWith(r2)
  //     if(r1 === 10) {
  //       $('#notes2').text('Strike!!!')
  //     } else if( r1 + r2 === 10) {
  //       $('#notes2').text('Spare!!!')
  //     }
  // });

  $('#frameCount').text(game.frameCount)




});
  