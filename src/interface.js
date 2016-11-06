$(document).ready(function() {

  var result = 0;
  var game = new Game();
  var oneFrame = []; // number of turns in one frame = 2 unless strike
  var gameTracker = []; // number of frames = 10
  var frameCount = 0;
  var count = 20; // number of turns

  $('#points').text(result);
  $('#strike').hide();
  $('.score').hide();
  $('#second-turn').hide();

  // take turn
  $('#take-turn').click(function() {
    if (oneFrame.length < 2) {
      newFrame();
      $('#frame-tally').text(frameCount);
      $('#take-turn').hide();
      $('#second-turn').show();
    }
    else {
      secondTurn(oneFrame, pinsDown);
      $('#take-turn').show();
      $('#second-turn').hide();
    }
  });

  // frame[i][x]

  function newFrame() {
    $('#strike').hide();
    $('#second-turn').hide();
    var pinsDown = Math.floor((Math.random() * 10) + 1);
    oneFrame.push(pinsDown);
    $('#frame1').text(oneFrame);
    if (pinsDown === 10) {
      frameCount += 1;
      $('#strike').show();
      $('#take-turn').show();
      $('#second-turn').hide();
      $('#frame-tally').text(frameCount);
    } else {
      $('#take-turn').hide();
      $('#second-turn').show();
      secondTurn(oneFrame, pinsDown);
      // stay on that frame
    }
      // go to new frame
  }

  function secondTurn(oneFrame, pinsDown) {
    secondTurnPinsDown = Math.floor((Math.random() * (10-pinsDown) + 1));
    oneFrame.push(secondTurnPinsDown);
    $('#frame1').text(oneFrame);
    frameCount += 1;
  }


// if it is turn 2 of a frame, a strike is not possible.



  //
  // function newTurn() {
  //   $('#strike').hide();
  //   var pinsDown = Math.floor((Math.random() * 10) + 1);
  //   if (pinsDown === 10) {
  //     $('#strike').show();
  //     newFrame = [];
  //   }
  //
  //   if (count === 0) {
  //     $('#take-turn').hide();
  //     $('#turn-tally').hide();
  //     $('.score').show();
  //     finalResult = game.score();
  //     $('#final-result').text(finalResult);
  //   }
  //   var pinsDown = Math.floor((Math.random() * 10) + 1);
  //   turn = game.roll(pinsDown);
  //   gameTracker.push(turn);
  //   $('#points').text(turn);
  //   $('#score-card').text(gameTracker);
  // }
  //
  // function newFrames() {
  //   if (gameTracker.length === 10) {
  //     $('#final-result').text(game.score());
  //     $('#take-turn').hide();
  //   }
  //   var newFrame = [];
  //   $('#strike').hide();
  //   var pinsDown = Math.floor((Math.random() * 10) + 1);
  //   turn = game.roll(pinsDown);
  //   if (pinsDown === 10) {
  //     $('#strike').show();
  //     newFrame = []
  //   }
  //
  //
  //   if (frameCount === 1) {
  //     newFrame.push(turn);
  //     $('#frame1').text(newFrame);
  //   } else if (frameCount === 2) {
  //     newFrame.push(turn);
  //     $('#frame1').text(newFrame);
  //     newFrame = [];
  //   }
  // }
  //
  // //
  //   var newFrame = [];
  //   $('#strike').hide();
  //   var pinsDown = Math.floor((Math.random() * 10) + 1);
  //   turn = game.roll(pinsDown);
  //   newFrame.push(turn);
  //   $('#points').text(newFrame);
  //   if (pinsDown === 10) {
  //     $('#strike').show();
  //     count -= 2;
  //   } else {
  //     count -= 1;
  //     newTurn();
  //   }
  //   $('#score-card').text(newFrame);
  // }

  // function hideStartButton(button) {
  //     //set input text value to be the current label text
  //     var currentLabelText = button.find("Game start").text();
  //     button.find("input[type=text]").val(currentLabelText);
  //
  //     // hide things
  //     button.find("Game start").hide();
  //
  //     //show things
  //     button.find("Take turn").show();
  // }

});
