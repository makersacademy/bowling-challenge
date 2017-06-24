$( document ).ready(function() {
  buttons(0);
});

var game = new Game();

var frameIndex = 0;
var firstRoll = 0;
var rollIndex = 0;
var rolls = [];

function buttons(pins) {
  var buttonStr = '';
  for(var i = 0; i < (11-pins); i++) {
    buttonStr += '<button type="button" class="button" onclick="roll(' + i + ')">' + i + '</button>';
  };
  $('#buttons').html(buttonStr);
};

function roll(pins) {
  if (isFinalFrame() && rollIndex == 2) {
    updateFinalFrame(pins);
    finishGame();
  } else if (isFinalFrame() && rollIndex == 1 && (firstRoll + pins < 10)){
    updateFinalFrame(pins);
    rolls.push(0);
    finishGame();
  } else if (isFinalFrame()) {
    updateFinalFrame(pins);
  } else {
    updateFrame(pins);
  }
};

function addFinal() {
  game.addFinalFrame(rolls[0], rolls[1], rolls[2]);
};

function finishGame() {
  addFinal();
  updateScore(10);
  updateButtons();
};

function updateFrame(pins) {
  if (pins == 10) {
    updateWithStrike();
    updateScore(game.frames.length);
  } else if (rollIndex == 1 && (firstRoll + pins == 10)) {
    updateWithSpare(pins);
    updateScore(game.frames.length);
  } else {
    updateWithRoll(pins);
  };
}

function isFinalFrame() {
  return game.frames.length == 9;
};

function updateFinalFrame(pins) {
  if (pins == 10) {
    $('#scoresheetTable tr:eq(1) td:eq(' + frameIndex + ')').html('X');
    frameIndex++;
    rollIndex++;
    rolls.push(pins);
    updateButtons(0);
  } else if (rollIndex == 1 && (firstRoll + pins == 10)) {
    $('#scoresheetTable tr:eq(1) td:eq(' + frameIndex + ')').html('/');
    frameIndex++;
    rollIndex++;
    rolls.push(pins);
    updateButtons(0);
  } else {
    $('#scoresheetTable tr:eq(1) td:eq(' + frameIndex + ')').html(pins);
    frameIndex++;
    rollIndex++;
    firstRoll = pins;
    rolls.push(pins);
    updateButtons(pins);
  };
};


function updateScore(index) {
  for(var i = 1; i < index + 1; i++) {
    var score = game.score(i);
    $('#scoresheetTable tr:eq(2) td:eq(' + (i - 1) + ')').html(score);
  };
};

function updateWithSpare(pins) {
  $('#scoresheetTable tr:eq(1) td:eq(' + frameIndex + ')').html('/');
  frameIndex++;
  rollIndex = 0;
  game.addFrame(firstRoll, pins)
  updateButtons(0);
};

function updateWithStrike() {
  frameIndex++;
  $('#scoresheetTable tr:eq(1) td:eq(' + frameIndex + ')').html('X');
  frameIndex++;
  game.addFrame(10);
  updateButtons(0);
};

function updateWithRoll(pins) {
  if (rollIndex == 0) {
    $('#scoresheetTable tr:eq(1) td:eq(' + frameIndex + ')').html(pins);
    firstRoll = pins;
    frameIndex++;
    rollIndex++;
    updateButtons(pins);
  } else {
    $('#scoresheetTable tr:eq(1) td:eq(' + frameIndex + ')').html(pins);
    frameIndex++;
    rollIndex = 0;
    game.addFrame(firstRoll, pins);
    updateScore(game.frames.length);
    updateButtons(0);
  };
};

function updateButtons(pins) {
  buttons(pins);
};
