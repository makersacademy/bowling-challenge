$(document).ready(function() {

  var bowlingGame = new game();
  var frameOne = new frame();
  var frameTwo = new frame();
  var frameThree = new frame();
  var frameFour = new frame();
  var frameFive = new frame();
  var frameSix = new frame();
  var frameSeven = new frame();
  var frameEight = new frame();
  var frameNine = new frame();
  var frameTen = new frame();



  var frames = [];


  // $("#addf1r1").on('click', (function() {
  //   $('#running-score').text('Hello world');
  // })
  // $('#temp-up').on('click', function() { // event listener
  //   thermostat.increaseTemperature(); // update model
  //   $('#temperature').text(thermostat.temperature); // update view
  // });

  $('#addf1').on('click', function() {
    scoreOne = parseInt($('#f1r1').val());
    scoreTwo = parseInt($('#f1r2').val());
    frameOne.firstRollScore(scoreOne);
    frameOne.secondRollScore(scoreTwo);
    frames.push(frameOne);

    $('#game-score').text(frameOne.preBonusScore());
  });

  // game.roll(parseInt($("#I1").val()));
  // var newValue = game._runningScore;
  // $("#input-I1").text(newValue);

  $('#addf2').on('click', function() {
    scoreOne = parseInt($('#f2r1').val());
    scoreTwo = parseInt($('#f2r2').val());
    frameTwo.firstRollScore(scoreOne);
    frameTwo.secondRollScore(scoreTwo);
    frames.push(frameTwo);

    $('#game-score').text(frameTwo.preBonusScore());
  });

  $('#addf3').on('click', function() {
    scoreOne = parseInt($('#f3r1').val());
    scoreTwo = parseInt($('#f3r2').val());
    frameThree.firstRollScore(scoreOne);
    frameThree.secondRollScore(scoreTwo);
    frames.push(frameThree);
  });

  $('#addf4').on('click', function() {
    scoreOne = parseInt($('#f4r1').val());
    scoreTwo = parseInt($('#f4r2').val());
    frameFour.firstRollScore(scoreOne);
    frameFour.secondRollScore(scoreTwo);
    frames.push(frameFour);
  });

  $('#addf5').on('click', function() {
    scoreOne = parseInt($('#f5r1').val());
    scoreTwo = parseInt($('#f5r2').val());
    frameFive.firstRollScore(scoreOne);
    frameFive.secondRollScore(scoreTwo);
    frames.push(frameFive);
  });

  $('#addf6').on('click', function() {
    scoreOne = parseInt($('#f6r1').val());
    scoreTwo = parseInt($('#f6r2').val());
    frameSix.firstRollScore(scoreOne);
    frameSix.secondRollScore(scoreTwo);
    frames.push(frameSix);
  });

  $('#addf7').on('click', function() {
    scoreOne = parseInt($('#f7r1').val());
    scoreTwo = parseInt($('#f7r2').val());
    frameSeven.firstRollScore(scoreOne);
    frameSeven.secondRollScore(scoreTwo);
    frames.push(frameSeven);
  });

  $('#addf8').on('click', function() {
    scoreOne = parseInt($('#f8r1').val());
    scoreTwo = parseInt($('#f8r2').val());
    frameEight.firstRollScore(scoreOne);
    frameEight.secondRollScore(scoreTwo);
    frames.push(frameEight);
  });

  $('#addf9').on('click', function() {
    scoreOne = parseInt($('#f9r1').val());
    scoreTwo = parseInt($('#f9r2').val());
    frameNine.firstRollScore(scoreOne);
    frameNine.secondRollScore(scoreTwo);
    frames.push(frameNine);
  });

  $('#addf10').on('click', function() {
    scoreOne = parseInt($('#f10r1').val());
    scoreTwo = parseInt($('#f10r2').val());
    scoreThree = $('#f10r3').val();
    frameTen.firstRollScore(scoreOne);
    frameTen.secondRollScore(scoreTwo);
    frameTen.thirdRollScore(scoreThree);
    frames.push(frameTen);

    $('#game-score').text(bowlingGame.gameScore(frames));
  });





});
