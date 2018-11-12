"use strict";

// ***************** variables ***************************
var game = new Game;
var bowlCounter = 0;
var bowls = [];
var bowl;
var output;

// ******************** Events ***************************
$('button').click(function() {
  bowl = $(this).text();
  addBowl(bowl);
  incrementBowlCounter();
  enableDisableButtons();
  setOutput();
  showScoreForSingleBowl();
  addFrameToGame();
  updateFrameScores();
  updateTotalScore();
  endGame();
});

// ******************* Functions ************************
function addBowl(bowl){
  bowls.push(parseInt(bowl));
};

function incrementBowlCounter(){
  bowlCounter++;
  if (!_isFinalFrame() && bowls[0] === 10) {
    bowlCounter++;
  }
}

function enableDisableButtons(){
  var remainingPins;
  if (_isFinalFrame()) {
    if (bowls[bowls.length-1] !== 10) {
      remainingPins = 10 - bowls[bowls.length-1];
      _disableButtons(remainingPins);
    }

    if (bowls[0] + bowls [1] === 10) {
      _resetAllButtons();
    }

  } else{
    if (_isSecondBowl() && bowls[0] != 10) {
      remainingPins = 10 - bowls[0];
      _disableButtons(remainingPins);
    } else{
      _resetAllButtons();
    }
  }
}

function setOutput(){
  if (bowls.length === 3) {
    if (bowls[2] === 10) {
      output = 'x';
    } else {
      output = bowl;
    }
  } else if (bowls.length === 1 && bowls[0] === 10) {
    output = 'x';
  } else if (bowls[0] + bowls[1] === 10) {
    output = '/';
  } else {
    output = bowl;
  }
}

function showScoreForSingleBowl(){
  $('#bowl-' + bowlCounter).text(output);
}

function addFrameToGame(){
  if (_isFinalFrame()) {
    if (bowls.length === 2 && bowls[0] + bowls[1] < 10 ) {
      game.addFrame(new Frame([bowls[0], bowls[1]]));
    }
    if (bowls.length === 3) {
      game.addFrame(new Frame([bowls[0], bowls[1], bowls[2]]));
    }
  }
  else{
    if (bowls.length === 2){
      game.addFrame(new Frame([bowls[0], bowls[1]]));
      bowls = [];
    }
    if (bowls[0] === 10){
      game.addFrame(new Frame([bowls[0]]));
      bowls = [];
    }
  }
}

function updateFrameScores(){
  for (var i = 1; i <= game.frames.length; i++) {
    $('#frame-'+ i + '-score').text(game.frames[i-1].frameScore);
  }
}

function updateTotalScore(){
  $('#total-score').text(game.gameScore);
}

function endGame(){
  if (game.frames.length === 10) {
    $('button').prop('disabled', true);
  }
}

// *************** Private Functions ********************************
function _isFinalFrame(){
  return bowlCounter > 18;
}

function _isSecondBowl(){
  return  bowlCounter % 2 != 0;
}

function _resetAllButtons(){
  $('button').prop('disabled', false);
}

function _disableButtons(remainingPins){
  for (var i = remainingPins + 1; i <= 10; i++) {
    $('#button-' + i).prop('disabled', true);
  }
}
