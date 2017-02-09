$(document).ready(function() {

  var game;
  var frame;

  function Roll(ballNumber, pinsLeft){
    frame.updateResult(frame.roll(pinsLeft));
    $("#ball"+ballNumber+"-Frame"+game._frameNumber).html(frame._results[ballNumber-1]);
  }

  function additionalRoll(ballNumber, pinsLeft){
    frame.updateResult(frame.roll(pinsLeft));
    $("#add"+ballNumber+"-lastframe").html(frame._results[frame._results.length-1]);
  }

  function printResults(){
    if (game._frameNumber>1 && game._frameNumber<10){
      $("#result-frame-" + (game._frameNumber-1)).html(game._frameScore[game._frameNumber-2]);
      $("#total").html(game._finalScore(game._frameScore));
    } else if (game._frameNumber===10) {
      $("#result-frame-" + (game._frameNumber-1)).html(game._frameScore[game._frameNumber-2]);
      $("#result-frame-" + (game._frameNumber)).html(game._frameScore[game._frameNumber-1]);
      $("#total").html(game._finalScore(game._frameScore));
    }
  }

  function printResultsBeforeLastGame(){
      $("#result-frame-" + (game._frameNumber-1)).html(game._frameScore[game._frameNumber-2]);
      $("#total").html(game._finalScore(game._frameScore));
  }

    function printResultsLastGame(){
      $("#result-frame-" + (game._frameNumber)).html(game._frameScore[game._frameScore.length-1]);
      $("#total").html(game._finalScore(game._frameScore));
    }

  function calculateResult(){
    game._getNewFrameRegularResult(frame);
    game._getNewFrameBonusResult(frame);
    game._getStrikeAndSpareStatus(frame);
  }

  $("#ball-1").hide();
  $("#ball-2").hide();
  $("#ball-add1").hide();
  $("#ball-add2").hide();
  $("#10frame_add1").hide();
  $("#10frame_add2").hide();

  $("#play-new-game").click(function(){
    game = new Game()
    $(this).hide();
    frame = game.createNewFrame();
    $("#ball-1").show();
  });

  $("#ball-1").click(function(){
    $(this).hide();
    Roll(1, frame.INITIALNUMBERPINS)
    frame.checkStrike();

    if (game._frameNumber<10){
      if (frame.getStrikeStatus()==="yes"){
        calculateResult();
        printResults();
        frame = game.createNewFrame();
        $("#ball-1").show();
      } else {
        $("#ball-2").show();
      }

    } else if(game._frameNumber===10){
      if(frame.getStrikeStatus()==="yes"){
        $("#ball-add1").show()
        $("#10frame_add1").show();
        calculateResult();
        printResultsBeforeLastGame();
      } else {
        $("#ball-2").show();
      }
    } else {
      $("#play-new-game").show();
    }
  });

  $("#ball-2").click(function(){
    $(this).hide();
    Roll(2, frame.INITIALNUMBERPINS-frame._results[0]);
    frame.checkSpare();
    if (game._frameNumber<10){
      calculateResult();
      printResults();
      frame = game.createNewFrame();
      $("#ball-1").show();
    } else if (game._frameNumber===10 && frame.getSpareStatus()==="yes") {
      $("#10frame_add1").show();
      $("#ball-add1").show();
      calculateResult();
      printResultsBeforeLastGame();

    } else {
      calculateResult();
      printResults();
    }
  });

  $("#ball-add1").click(function(){
    additionalRoll(1, frame.INITIALNUMBERPINS);
    $(this).hide();
    if (frame.getStrikeStatus() === 'yes'){
      game._updateLastGameResults(frame);
      $("#ball-add2").show();
      $("#10frame_add2").show();
    } else {
      game._updateLastGameResults(frame);
      printResultsLastGame();
    }
  });

  $("#ball-add2").click(function(){
    $(this).hide();
    if (frame._results[frame._results.length-1]===10){
      leftPins = frame.INITIALNUMBERPINS
    } else {
      leftPins = frame.INITIALNUMBERPINS - frame._results[frame._results.length-1]
    }
    additionalRoll(2, leftPins);
    game._updateLastGameResults(frame);
    printResultsLastGame();
  });
});
