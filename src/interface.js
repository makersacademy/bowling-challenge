$( document ).ready(function() {
  var game =  new Game
  game.fullFrame(new Frame);
  var rollNumber = 0
  var frameNumber = 0
  console.log(game.scores[0][0])

$("#bowl").click(function(){
  game.roll(frameNumber, rollNumber)
  calculate();
  updateText()
  updateCounter()
    })

    function updateText() {
      $( "#Results" ).text(game.scores[frameNumber][rollNumber]);
      $( "#Frametotals" ).text(game.frametotals);
    }

    function calculate() {
        game.frames[frameNumber].calculateFrameScore(game.frames[frameNumber].rolls)
        game.updateGameScores(frameNumber)
        game.updateFrameTotals(frameNumber)

    }

    function updateCounter() {
      if(rollNumber === 0) {
        rollNumber ++
      } else {
        frameNumber++
        rollNumber--
      }
    }


});
