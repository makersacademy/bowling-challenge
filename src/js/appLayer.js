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
  if (game.isComplete() && !game.isAllowExtraBowl()) {
    $('#play').hide();
    $('#home').show();
    $('#header').append('<div><span id="score">Score: ' + game.score() + '</span></div>');
  };
});

function updateFrame() {
  $('#current-frame').text(game.currentFrame());
};

function updateScore() {
  $('#current-score').text(game.score());
};

function updateSelection() {
  $('#pin-selection').empty();
  if (isGameEnded()) return;
  for (var i = 1; i <= game.pinsRemaining(); i++) {
    $('#pin-selection').append('<button class="pins" value="' + i + '">' + i + '</button>');  
  };
};

function isGameEnded() {
  return game.isComplete() && !game.isAllowExtraBowl();
};

function updateRound() {
  $('#current-round').text(game.currentRound());  
};

function updateScoreCard(pins) {
  $('#all-frames .each-frame').empty();
  for (var i = 1; i <= 9; i++ ) {
    var frame = game.frames()[i - 1];
    if (frame) {
      $('#frame-' + i).append('<div class="frame-number"><span>' + i + '</span></div>');
      $('#frame-' + i).append('<div class="round-one"><span>' + scoreCardLeft(frame) + '</span></div>');
      $('#frame-' + i).append('<div class="round-two"><span>' + scoreCardSpareStrike(frame) + '</span></div>');
      $('#frame-' + i).append('<div class="frame-score"><span>'+ frame.score() + '</span></div>');
    } else if (i === game.currentFrame() && game.currentRound() === 2) {
      $('#frame-' + i).append('<div class="frame-number"><span>' + i + '</span></div>');
      $('#frame-' + i).append('<div class="round-one"><span>' + pins + '</span></div>');
      $('#frame-' + i).append('<div class="round-two"><span></span></div>');
      $('#frame-' + i).append('<div class="frame-score"><span></span></div>');
    } else {
      $('#frame-' + i).append('<div class="frame-number"><span>' + i + '</span></div>');
      $('#frame-' + i).append('<div class="round-one"><span></span></div> ');
      $('#frame-' + i).append('<div class="round-two"><span></span></div>');
      $('#frame-' + i).append('<div class="frame-score"><span></span></div>');
    };  
  };
  var frame = game.frames()[9];
  if (frame) {
    $('#frame-' + i).append('<div class="frame-number"><span>' + i + '</span></div>');
    $('#frame-' + i).append('<div class="round-one"><span>' + scoreCardFinalFrame(1) + '</span></div>');
    $('#frame-' + i).append('<div class="round-two"><span>' + scoreCardFinalFrame(2) + '</span></div>');
    $('#frame-' + i).append('<div class="round-three"><span>' + scoreCardFinalFrame(3) + '</span></div>');
    $('#frame-' + i).append('<div class="frame-score"><span>'+ frame.score() + '</span></div>');
  } else if (i === game.currentFrame() && game.currentRound() === 2) {
    $('#frame-' + i).append('<div class="frame-number"><span>' + i + '</span></div>');
    $('#frame-' + i).append('<div class="round-one"><span>' + pins + '</span></div>');
    $('#frame-' + i).append('<div class="round-two"><span></span></div>');
    $('#frame-' + i).append('<div class="round-three"><span></span></div>');    
    $('#frame-' + i).append('<div class="frame-score"><span></span></div>');
  } else {
    $('#frame-' + i).append('<div class="frame-number"><span>' + i + '</span></div>');
    $('#frame-' + i).append('<div class="round-one"><span></span></div> ');
    $('#frame-' + i).append('<div class="round-two"><span></span></div>');
    $('#frame-' + i).append('<div class="round-three"><span></span></div>');    
    $('#frame-' + i).append('<div class="frame-score"><span></span></div>');
  };  
};

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
  var frame = game.frames()[9];  
  return (frame.bowls()[turn - 1] ? scoreCardSpareStrike(frame, true, turn) : '');
};
