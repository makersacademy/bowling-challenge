$(document).ready(function() {
  var game = new Game();
  var rolls = game.rolls;
  var frameNumber = game.frameNumber;
  //var currentRoll = game.currentRoll;

  $('#0').click(function() {
    game.roll(0);
    frameNumber = game.frameNumber;
    $('#r' + game.currentRoll).text('0');
    //frameNumber = game.frameNumber;

    console.log("frame number" + frameNumber)
    //$('#f' + (frameNumber - 1)).text(game.score());
    $('#f' + (frameNumber - 1)).text(game.currentScore(frameNumber));
  });

  $('#1').click(function() {
    game.roll(1);
    frameNumber = game.frameNumber;
    $('#r' + game.currentRoll).text('1');
    //frameNumber = game.frameNumber;
    console.log("frame number" + frameNumber)
    $('#f' + (frameNumber - 1)).text(game.currentScore(frameNumber));


  });

  $('#2').click(function() {
    game.roll(2);
    $('#r' + game.currentRoll).text('2');
    frameNumber = game.frameNumber;
    console.log("frame number" + frameNumber)
    $('#f' + (frameNumber - 1)).text(game.currentScore(frameNumber));

  });

  $('#3').click(function() {
    game.roll(3);
    $('#r' + game.currentRoll).text('3');
    frameNumber = game.frameNumber;
    console.log("frame number" + frameNumber)
    $('#f' + (frameNumber - 1)).text(game.currentScore(frameNumber));

  });

  $('#4').click(function() {
    game.roll(4);
    $('#r' + game.currentRoll).text('4');
    frameNumber = game.frameNumber;
    console.log("frame number" + frameNumber)
    $('#f' + (frameNumber - 1)).text(game.currentScore(frameNumber));

  });

  $('#5').click(function() {
    game.roll(5);
    $('#r' + game.currentRoll).text('5');
    frameNumber = game.frameNumber;
    console.log("frame number" + frameNumber)
    $('#f' + (frameNumber - 1)).text(game.currentScore(frameNumber));

  });

  $('#6').click(function() {
    game.roll(6);
    $('#r' + game.currentRoll).text('6');
    frameNumber = game.frameNumber;
    console.log("frame number" + frameNumber)
    $('#f' + (frameNumber - 1)).text(game.currentScore(frameNumber));

  });

  $('#7').click(function() {
    game.roll(7);
    $('#r' + game.currentRoll).text('7');
    frameNumber = game.frameNumber;
    console.log("frame number" + frameNumber)
    $('#f' + (frameNumber - 1)).text(game.currentScore(frameNumber));

  });

  $('#8').click(function() {
    game.roll(8);
    $('#r' + game.currentRoll).text('8');
    frameNumber = game.frameNumber;
    console.log("frame number" + frameNumber)
    $('#f' + (frameNumber - 1)).text(game.currentScore(frameNumber));

  });

  $('#9').click(function() {
    game.roll(8);
    $('#r' + game.currentRoll).text('9');
    frameNumber = game.frameNumber;
    console.log("frame number" + frameNumber)
    $('#f' + (frameNumber - 1)).text(game.currentScore(frameNumber));

  });

  $('#10').click(function() {
    game.roll(10);
    $('#r' + game.currentRoll).text('10');
    game.currentRoll += 1
    frameNumber = game.frameNumber;
    console.log("frame number" + frameNumber)
    $('#f' + (frameNumber)).text(game.currentScore(frameNumber));

  });











});
