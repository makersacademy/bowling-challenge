
$(document).ready(function(){
  var bowlingGame = new BowlingGame();

  $('#firstThrow').click(function() {
   bowlingGame.bowl()
   $('#thirdshow').html(bowlingGame.randomNum)
   $('#fourthshow').html(bowlingGame.secondRandomNum)
  })

$('#emptyArray').click(function() {
bowlingGame.clearArray()
})
  // $('#firstThrow').click(function(){
  //   if(bowlingGame.randomNum === 10 || (bowlingGame.randomNum + bowlingGame.secondRandomNum ===10))
  //   {bowlingGame.thirdBowl()
  //     bowlingGame.spare()
  //     bowlingGame.storingScores()
  //     $('#thirdshow').html(bowlingGame.allScores)}
  //     else
  //     {
  //       bowlingGame.firstBowl()
  //       $('#show').html(bowlingGame.randomNum)}
  //
  //     })
  //
  //     $('#secondThrow').click(function(){
  //       if (bowlingGame.randomNum === 10 )
  //       {bowlingGame.fourthBowl()
  //         bowlingGame.strike()
  //         $('#fourthshow').html(bowlingGame.fourthRandomNum)}
  //         else
  //         {bowlingGame.secondBowl()
  //           bowlingGame.scoresPerFrame()
  //
  //           $('#secondshow').html(bowlingGame.secondRandomNum)}
  //
  //
  //         })

        });
