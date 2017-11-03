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

  $('#addf1r1').on('click', function() {
    scoreOne = parseInt($('#f1r1').val());
    frameOne.firstRollScore(scoreOne);
    if (scoreOne ==10) {
        $('#addf1r2').hide();
        $('#f1r2').hide();
        frames.push(frameOne);
    }
  });

  $('#addf1r2').on('click', function() {
    scoreTwo = parseInt($('#f1r2').val());
    frameOne.secondRollScore(scoreTwo);
    frames.push(frameOne);
  });

  $('#addf2r1').on('click', function() {
    scoreOne = parseInt($('#f2r1').val());
    frameTwo.firstRollScore(scoreOne);
    if (scoreOne ==10) {
        $('#addf2r2').hide();
        $('#f2r2').hide();
        frames.push(frameTwo);
    }
  });

  $('#addf2r2').on('click', function() {
    scoreTwo = parseInt($('#f2r2').val());
    frameTwo.secondRollScore(scoreTwo);
    frames.push(frameTwo);
  });

  $('#addf3r1').on('click', function() {
    scoreOne = parseInt($('#f3r1').val());
    frameThree.firstRollScore(scoreOne);
    if (scoreOne ==10) {
        $('#addf3r2').hide();
        $('#f3r2').hide();
        frames.push(frameThree);
    }
  });

  $('#addf3r2').on('click', function() {
    scoreTwo = parseInt($('#f3r2').val());
    frameThree.secondRollScore(scoreTwo);
    frames.push(frameThree);
  });

  $('#addf4r1').on('click', function() {
    scoreOne = parseInt($('#f4r1').val());
    frameFour.firstRollScore(scoreOne);
    if (scoreOne ==10) {
        $('#addf4r2').hide();
        $('#f4r2').hide();
        frames.push(frameFour);
    }
  });

  $('#addf4r2').on('click', function() {
    scoreTwo = parseInt($('#f4r2').val());
    frameFour.secondRollScore(scoreTwo);
    frames.push(frameFour);
  });

  $('#addf5r1').on('click', function() {
    scoreOne = parseInt($('#f5r1').val());
    frameFive.firstRollScore(scoreOne);
    if (scoreOne ==10) {
        $('#addf5r2').hide();
        $('#f5r2').hide();
        frames.push(frameFive);
    }
  });

  $('#addf5r2').on('click', function() {
    scoreTwo = parseInt($('#f5r2').val());
    frameFive.secondRollScore(scoreTwo);
    frames.push(frameFive);
  });

  $('#addf6r1').on('click', function() {
    scoreOne = parseInt($('#f6r1').val());
    frameSix.firstRollScore(scoreOne);
    if (scoreOne ==10) {
        $('#addf6r2').hide();
        $('#f6r2').hide();
        frames.push(frameSix);
    }
  });

  $('#addf6r2').on('click', function() {
    scoreTwo = parseInt($('#f6r2').val());
    frameSix.secondRollScore(scoreTwo);
    frames.push(frameSix);
  });

  $('#addf7r1').on('click', function() {
    scoreOne = parseInt($('#f7r1').val());
    frameSeven.firstRollScore(scoreOne);
    if (scoreOne ==10) {
        $('#addf7r2').hide();
        $('#f7r2').hide();
        frames.push(frameSeven);
    }
  });

  $('#addf7r2').on('click', function() {
    scoreTwo = parseInt($('#f7r2').val());
    frameSeven.secondRollScore(scoreTwo);
    frames.push(frameSeven);
  });

  $('#addf8r1').on('click', function() {
    scoreOne = parseInt($('#f8r1').val());
    frameEight.firstRollScore(scoreOne);
    if (scoreOne ==10) {
        $('#addf8r2').hide();
        $('#f8r2').hide();
        frames.push(frameEight);
    }
  });

  $('#addf48r2').on('click', function() {
    scoreTwo = parseInt($('#f8r2').val());
    frameEight.secondRollScore(scoreTwo);
    frames.push(frameEight);
  });

  $('#addf9r1').on('click', function() {
    scoreOne = parseInt($('#f9r1').val());
    frameNine.firstRollScore(scoreOne);
    if (scoreOne ==10) {
        $('#addf9r2').hide();
        $('#f9r2').hide();
        frames.push(frameNine);
    }
  });

  $('#addf9r2').on('click', function() {
    scoreTwo = parseInt($('#f9r2').val());
    frameNine.secondRollScore(scoreTwo);
    frames.push(frameNine);
  });

  $('#addf10r1').on('click', function() {
    scoreOne = parseInt($('#f10r1').val());
    frameTen.firstRollScore(scoreOne);
  });

  $('#addf10r2').on('click', function() {
    scoreTwo = parseInt($('#f9r2').val());
    frameTen.secondRollScore(scoreTwo);
    // frames.push(frameTen);
    if ((frameTen.firstScore() + frameTen.secondScore()) < 10 ) {
      $('#addf10r3').hide();
      $('#f10r3').hide();
      frames.push(frameTen);
      console.log(frames);
      console.log('hi');
      $('#game-score').text(bowlingGame.gameScore(frames));
    }
  });

  $('#addf10r3').on('click', function() {
    scoreThree = parseInt($('#f10r3').val());
    frameTen.thirdRollScore(scoreThree);
    frames.push(frameTen);
    // I just assumed that it seemed bad to modify the object
    // once it's in the array, but not sure why i beleive this
    $('#game-score').text(bowlingGame.gameScore(frames));
  });



  // game.roll(parseInt($("#I1").val()));
  // var newValue = game._runningScore;
  // $("#input-I1").text(newValue);

  // $('#addf2').on('click', function() {
  //   scoreOne = parseInt($('#f2r1').val());
  //   scoreTwo = parseInt($('#f2r2').val());
  //   frameTwo.firstRollScore(scoreOne);
  //   frameTwo.secondRollScore(scoreTwo);
  //   frames.push(frameTwo);
  //
  //   $('#game-score').text(frameTwo.preBonusScore());
  // });
  //
  // $('#addf3').on('click', function() {
  //   scoreOne = parseInt($('#f3r1').val());
  //   scoreTwo = parseInt($('#f3r2').val());
  //   frameThree.firstRollScore(scoreOne);
  //   frameThree.secondRollScore(scoreTwo);
  //   frames.push(frameThree);
  // });
  //
  // $('#addf4').on('click', function() {
  //   scoreOne = parseInt($('#f4r1').val());
  //   scoreTwo = parseInt($('#f4r2').val());
  //   frameFour.firstRollScore(scoreOne);
  //   frameFour.secondRollScore(scoreTwo);
  //   frames.push(frameFour);
  // });
  //
  // $('#addf5').on('click', function() {
  //   scoreOne = parseInt($('#f5r1').val());
  //   scoreTwo = parseInt($('#f5r2').val());
  //   frameFive.firstRollScore(scoreOne);
  //   frameFive.secondRollScore(scoreTwo);
  //   frames.push(frameFive);
  // });
  //
  // $('#addf6').on('click', function() {
  //   scoreOne = parseInt($('#f6r1').val());
  //   scoreTwo = parseInt($('#f6r2').val());
  //   frameSix.firstRollScore(scoreOne);
  //   frameSix.secondRollScore(scoreTwo);
  //   frames.push(frameSix);
  // });
  //
  // $('#addf7').on('click', function() {
  //   scoreOne = parseInt($('#f7r1').val());
  //   scoreTwo = parseInt($('#f7r2').val());
  //   frameSeven.firstRollScore(scoreOne);
  //   frameSeven.secondRollScore(scoreTwo);
  //   frames.push(frameSeven);
  // });
  //
  // $('#addf8').on('click', function() {
  //   scoreOne = parseInt($('#f8r1').val());
  //   scoreTwo = parseInt($('#f8r2').val());
  //   frameEight.firstRollScore(scoreOne);
  //   frameEight.secondRollScore(scoreTwo);
  //   frames.push(frameEight);
  // });
  //
  // $('#addf9').on('click', function() {
  //   scoreOne = parseInt($('#f9r1').val());
  //   scoreTwo = parseInt($('#f9r2').val());
  //   frameNine.firstRollScore(scoreOne);
  //   frameNine.secondRollScore(scoreTwo);
  //   frames.push(frameNine);
  // });
  //
  // $('#addf10').on('click', function() {
  //   scoreOne = parseInt($('#f10r1').val());
  //   scoreTwo = parseInt($('#f10r2').val());
  //   scoreThree = $('#f10r3').val();
  //   frameTen.firstRollScore(scoreOne);
  //   frameTen.secondRollScore(scoreTwo);
  //   frameTen.thirdRollScore(scoreThree);
  //   frames.push(frameTen);
  //
  //   $('#game-score').text(bowlingGame.gameScore(frames));
  // });





});
