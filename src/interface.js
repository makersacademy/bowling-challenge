$(document).ready(function() {

  var result = 0;
  var game = new Game();
  var oneFrame = []; // number of turns in one frame = 2 unless strike
  var gameTracker = []; // number of frames = 10
  var frameCount = 0;
  var count = 20; // number of turns
  var textForJQuery = 'frame' + gameTracker[frameCount];


  $('#points').text(result);
  // $('#strike').hide();
  $('.score').hide();
  $('#game-over').hide();

  // take turn
  $('#take-turn').click(function() {
    if (frameCount === 9) {
      $('#take-turn').hide();
      $('#game-over').show();
      $('#score-card').text(game.score());
    }
    newFrame();
    // alert(frameNumber);
  });

  function newFrame() {
    // $('#strike').hide();
    var pinsDown = Math.floor((Math.random() * 10) + 1);
    frame = oneFrame.push(pinsDown);
    if (pinsDown === 10) {
      frameCount += 1;
      alert('STRIKE!!!!')
    } else {
      secondTurn(oneFrame, pinsDown);
    }
    frameNumber = gameTracker.push(frame)
    // to get each frame onto the next line
    var frameNumberForJquery = '#frame' + frameNumber
    $(frameNumberForJquery).text(oneFrame);
    $('#frame-tally').text(frameCount);
  }

  function secondTurn(oneFrame, pinsDown) {
    secondTurnPinsDown = Math.floor((Math.random() * (10-pinsDown) + 1));
    oneFrame.push(secondTurnPinsDown);
    frameCount += 1;
    oneFrame = [];
  }



});
