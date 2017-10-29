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
    var frame = game._frames[i - 1];
    if (frame) {
      $('#frame-' + i).append('<p class="frame-number">' + i + '</p>');
      $('#frame-' + i).append('<p class="round-one">' + scoreCardLeft(frame) + '</p>');
      $('#frame-' + i).append('<p class="round-two">' + scoreCardRight(frame) + '</p>');
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
  frame = game._frames[i - 1]
  if (frame) {
    $('#frame-' + i).append('<p class="frame-number">' + i + '</p>');
    $('#frame-' + i).append('<p class="round-one">' + scoreCardLeft(frame) + '</p>');
    $('#frame-' + i).append('<p class="round-two">' + scoreCardRight(frame) + '</p>');
    $('#frame-' + i).append('<p class="round-three">' + '</p>');    
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
  if (frame._bowls[0] === 10) {
    return '';
  } else {
    return frame._bowls[0];
  };
};

function scoreCardRight(frame) {
  if (frame._bowls[0] === 10) {
    return 'X';
  } else if (frame.pinsRemaining() === 0) {
    return '/';
  } else {
    return frame._bowls[1];
  };
};
