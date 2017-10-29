'use strict';

var game = new Game();

updateScore();
updateSelection();
updateFrame();
updateRound();
updateScoreCard()

$('#pin-selection').on('click', ".pins", function () {
  var pins = Number($(this).val());
  game.bowl(pins);
  updateScore();
  updateSelection();
  updateFrame();
  updateRound();
  updateScoreCard(pins);
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
      $('#frame-' + i).append('<p class="frame-number">' + i + '</p>');
      $('#frame-' + i).append('<p class="round-one">' + scoreCardLeft(frame) + '</p>');
      $('#frame-' + i).append('<p class="round-two">' + scoreCardSpareStrike(frame) + '</p>');
      $('#frame-' + i).append('<p class="frame-score">'+ frame.score() + '</p>');
    } else if (i === game.currentFrame() && game.currentRound() === 2) {
      $('#frame-' + i).append('<p class="frame-number">' + i + '</p>');
      $('#frame-' + i).append('<p class="round-one">' + pins + '</p>');
      $('#frame-' + i).append('<p class="round-two"></p>');
      $('#frame-' + i).append('<p class="frame-score"></p>');
    } else {
      $('#frame-' + i).append('<p class="frame-number">' + i + '</p>');
      $('#frame-' + i).append('<p class="round-one"></p> ');
      $('#frame-' + i).append('<p class="round-two"></p>');
      $('#frame-' + i).append('<p class="frame-score"></p>');
    };  
  };
  var frame = game.frames()[9];
  if (frame) {
    $('#frame-' + i).append('<p class="frame-number">' + i + '</p>');
    $('#frame-' + i).append('<p class="round-one">' + scoreCardFinalFrame(1) + '</p>');
    $('#frame-' + i).append('<p class="round-two">' + scoreCardFinalFrame(2) + '</p>');
    $('#frame-' + i).append('<p class="round-three">' + scoreCardFinalFrame(3) + '</p>');
    $('#frame-' + i).append('<p class="frame-score">'+ frame.score() + '</p>');
  } else if (i === game.currentFrame() && game.currentRound() === 2) {
    $('#frame-' + i).append('<p class="frame-number">' + i + '</p>');
    $('#frame-' + i).append('<p class="round-one">' + pins + '</p>');
    $('#frame-' + i).append('<p class="round-two"></p>');
    $('#frame-' + i).append('<p class="round-three"></p>');    
    $('#frame-' + i).append('<p class="frame-score"></p>');
  } else {
    $('#frame-' + i).append('<p class="frame-number">' + i + '</p>');
    $('#frame-' + i).append('<p class="round-one"></p> ');
    $('#frame-' + i).append('<p class="round-two"></p>');
    $('#frame-' + i).append('<p class="round-three"></p>');    
    $('#frame-' + i).append('<p class="frame-score"></p>');
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
