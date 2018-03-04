$(document).ready(function (){
  var game = new Game();

  $( '#bowlingBall' ).click(function() {
    console.log(game);
    var pins =  parseInt(document.getElementById('pins').value);
    game.rollBall(pins);

  {$('.roll_scored').text('You rolled a: ' + pins);}

  for( var frameIndex = 0, len = game.allFrames.length; frameIndex < len; frameIndex++) {
    var currentFrame = game.allFrames[frameIndex];
    for( var rollNumber = 1, rollLen = (currentFrame.length + 1); rollNumber < rollLen; rollNumber++) {
      {$('#frame' + (frameIndex + 1) +'_roll'+ rollNumber).text(game.rollCount);}
    }
  }

  // if (game.rollCount === 2)
  //   {$('#frame1_roll'+ '1').text(game.rollCount);}
  });

//   $( '#temperature-up' ).click(function() {
//   thermostat.upTempOne();
//   $('#12345').text("Current temperature is: " + thermostat.temperature);
// });

});



// $('header').text("Bowling game is ready");

//   roll_score.visible = false;
  // var show = false;
// show = true;
// roll_score.visible = true;
//   // $('.roll_score').attr('class', 'visible_form');
// // showFunction();
// showFunction = function() {
// if (show === true) {$('.roll_score').show();}
// else {$('.roll_score').hide();}
// };
