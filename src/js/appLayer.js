'use strict';

var game;

$('#new-game').click(function () {
  game = new Game();
  $('#play').show();
  $('#home').hide();
  updateScore();
  updateSelection();
  updateFrame();
  updateRound();
  updateScoreCard()
});  

$('#pin-selection').on('click', ".pins", function () {
  var pins = Number($(this).val());
  game.bowl(pins);
  updateScore();
  updateSelection();
  updateFrame();
  updateRound();
  updateScoreCard(pins);
  if (game.isGameComplete() && !game.isExtraBowlAllowed()) {
    $('#play').hide();
    $('#home').show();
    $('#header').append('<div><span id="score">Score: ' + game.totalScore() + '</span></div>');
  };
});

function updateFrame() {
  $('#current-frame').text(game.playedFrames().length + 1);
};

function updateScore() {
  $('#current-score').text(game.totalScore());
};

function updateSelection() {
  $('#pin-selection').empty();
  if (isGameEnded()) return;
  for (var i = 0; i <= game.currentFrame().pinsRemaining(); i++) {
    $('#pin-selection').append('<button class="pins" value="' + i + '">' + i + '</button>');  
  };
};

function isGameEnded() {
  return game.isGameComplete() && !game.isExtraBowlAllowed();
};

function updateRound() {
  $('#current-round').text(game.currentFrame().round());  
};

function updateScoreCard(pins) {
  $('#all-frames .each-frame').empty();
  for (var i = 1; i <= 9; i++ ) {
    var frame = game.playedFrames()[i - 1];
    if (frame) {
      renderFrame(i, scoreCardLeft(frame), scoreCardSpareStrike(frame), undefined, frame.score());
    } else if (i === (game.playedFrames().length + 1) && game.currentFrame().round() === 2) {
      renderFrame(i, pins);      
    } else {
      renderFrame(i);            
    };  
  };
  var frame = game.playedFrames()[9];
  if (frame) {
    renderFrame(i, scoreCardFinalFrame(1), scoreCardFinalFrame(2), scoreCardFinalFrame(3), frame.score());
  } else if (i === (game.playedFrames().length + 1) && game.currentFrame().round() === 2) {
    renderFrame(i, pins);    
  } else {
    renderFrame(i);    
  };  
};

function renderFrame(frameNumber, roundOne = '', roundTwo = '', roundThree = '', score = '') {
  $('#frame-' + frameNumber).append('<div class="frame-number"><span>' + frameNumber + '</span></div>');
  $('#frame-' + frameNumber).append('<div class="round-one"><span>' + roundOne + '</span></div>');
  $('#frame-' + frameNumber).append('<div class="round-two"><span>' + roundTwo + '</span></div>');
  if (frameNumber === 10) {
    $('#frame-' + frameNumber).append('<div class="round-three"><span>' + roundThree + '</span></div>');
  };
  $('#frame-' + frameNumber).append('<div class="frame-score"><span>' + score + '</span></div>');
}

function scoreCardLeft(frame) {
  if (frame.bowls()[0] === 10) {
    return '';
  } else {
    return frame.bowls()[0];
  };
};

function scoreCardSpareStrike(frame, final = false, turn = 2) {
  if (final ? (frame.bowls()[turn-1] === 10) : frame.bowls()[0] === 10) {
    return 'X';
  } else if (frame.pinsRemaining() === 0 && turn === 2) {
    return '/';
  } else {
    return frame.bowls()[turn-1];
  };
};

function scoreCardFinalFrame(turn) {
  var frame = game.playedFrames()[9];  
  return (frame.bowls()[turn - 1] ? scoreCardSpareStrike(frame, true, turn) : '');
};
