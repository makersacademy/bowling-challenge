$(document).ready(function (){
  var game = new Game();

  $( '#bowlingBall' ).click(function() {
    console.log(game);
    var pins =  parseInt(document.getElementById('pins').value);
    game.rollBall(pins);

  {$('.roll_scored').text('You rolled a: ' + pins);}

  printScores(game);
  });
});

var printScores = function(game) {
  for( var frameIndex = 0, len = game.allFrames.length; frameIndex < len; frameIndex++) {
    var currentFrame = game.allFrames[frameIndex];
    for( var rollNumber = 1, rollLen = (currentFrame.length + 1); rollNumber < rollLen; rollNumber++) {
      {$('#frame' + (frameIndex + 1) +'_roll'+ rollNumber).text(game.allFrames[frameIndex][rollNumber - 1]);}
    }
    {$('#marker' + (frameIndex)).text(game.scoreCalculator.frameScores[frameIndex]);}
  }
};
