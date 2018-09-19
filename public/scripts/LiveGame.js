import("./Frame.js");

function liveGame() {
  this.score = 0;
  this.isGameOver = false;
}

function _previousFrame() {
  return $frames[$frames.length - 2];
}

function addRoll(pin) {
  if (this.isGameOver) return;
  if ($frames.length < 9) {
    $currentFrame.firstRoll == null ? _addRollFirst(pin) : _addRollSecond(pin);
  } else if ($frames.length == 9) {
    addFinalFrame(pin);
  }
}

function _addRollFirst(pin) {
  $currentFrame.firstRoll = pin;
  $(`#frame${$frames.length + 1}`).text($currentFrame.firstRoll);
}

function _addRollSecond(pin) {
  if ($currentFrame.firstRoll + pin > 10) return;
  $currentFrame.secondRoll = pin;
  $frames.push($currentFrame);
  $(`#frame${$frames.length}`).text(
    `${$currentFrame.firstRoll}, ${$currentFrame.secondRoll}`
  );
  if ($frames.length == 1) _firstFrameScore();
  if ($frames.length == 2) _secondFrameScore();
  if ($frames.length > 2 && $frames.length < 10) {
    _previousFrame().isStrike() ? _doubleCheck() : _spareCheck();
  }
  if ($frames.length < 10) _clearFrame();
}

function addFinalFrame(pin) {
  if ($currentFrame.firstRoll == null) return _addRollFirstFinal(pin);
  if ($currentFrame.firstRoll != null && $currentFrame.secondRoll == null)
    return _addRollSecondFinal(pin);
  _addRollThird(pin);
}

function _addRollFirstFinal(pin) {
  $currentFrame.firstRoll = pin;
  $("#frame10").text(pin);
}

function _addRollSecondFinal(pin) {
  $currentFrame.secondRoll = pin;
  $("#frame10").text(`${$currentFrame.firstRoll}, ${pin}`);
  $frames.push($currentFrame);
  $currentGame.score += $currentFrame.frameScore();
  $("#runningTotal10").text(`${$currentGame.score}`);
  this.isGameOver = true;
  _checkNinth();
  if ($currentFrame.isSpare()) finalBonus();
  if ($currentFrame.isStrike()) finalBonus();
}

function finalBonus() {
  this.isGameOver = false;
  $frames.pop();
}

function _checkNinth() {
  debugger;
  if ($frames[7].isStrike() && $frames[8].isStrike()) {
    $("#runningTotal8").text(
      parseInt($("#runningTotal8").text(), 10) + $currentFrame.firstRoll
    );
    $currentGame.score += $currentFrame.firstRoll;
    $("runningTotal9").text(
      parseInt($("#runningTotal9").text(), 10) + $currentFrame.frameScore()
    );
  } else if ($frames[8].isStrike() && !$frames[7].isStrike()) {
    $("runningTotal9").text(
      parseInt($("#runningTotal9").text(), 10) + $currentFrame.frameScore()
    );
    $currentGame.score += $currentFrame.frameScore();
  } else if ($frames[8].isSpare()) {
    $("runningTotal9").text(
      parseInt($("#runningTotal9").text(), 10) + $currentFrame.firstRoll
    );
    $currentGame.score += $currentFrame.firstRoll;
  }
}

function _addRollThird(pin) {
  $currentFrame.thirdRoll = pin;
  $frames.push($currentFrame);
  $("#frame10").text(
    `${$currentFrame.firstRoll}, 
     ${$currentFrame.secondRoll}, 
     ${$currentFrame.thirdRoll}`
  );
  $currentGame.score += pin;
  $("#runningTotal10").text($currentGame.score);
  this.isGameOver = true;
}

function _doubleCheck() {
  _isDouble() ? _doubleScore() : _strikeScore();
}

function _spareCheck() {
  _previousFrame().isSpare() ? _spareScore() : _noBonusScore();
}

function _isDouble() {
  return $frames[$frames.length - 3].isStrike() && _previousFrame().isStrike();
}

function _firstFrameScore() {
  $currentGame.score = $currentFrame.frameScore();
  $(`#runningTotal1`).text($currentGame.score);
}

function _secondFrameScore() {
  _previousFrame().isStrike() ? _strikeScore() : _spareCheck();
}

function _noBonusScore() {
  $currentGame.score += $currentFrame.frameScore();
  $(`#runningTotal${$frames.length}`).text($currentGame.score);
}

function _spareScore() {
  $(`#runningTotal${$frames.length - 1}`).text(
    $currentGame.score + $currentFrame.firstRoll
  );
  $currentGame.score += $currentFrame.frameScore() + $currentFrame.firstRoll;
  $(`#runningTotal${$frames.length}`).text($currentGame.score);
}

function _strikeScore() {
  $(`#runningTotal${$frames.length - 1}`).text(
    $currentGame.score + $currentFrame.frameScore()
  );
  $currentGame.score += 2 * $currentFrame.frameScore();
  $(`#runningTotal${$frames.length}`).text($currentGame.score);
}

function _doubleScore() {
  $(`#runningTotal${$frames.length - 2}`).text(
    parseInt($(`#runningTotal${$frames.length - 2}`).text(), 10) + 10
  );
  $(`#runningTotal${$frames.length - 1}`).text(
    parseInt($(`#runningTotal${$frames.length - 1}`).text(), 10) + 20
  );
  $currentGame.score += 30;
  $(`#runningTotal${$frames.length}`).text($currentGame.score);
}

function _clearFrame() {
  $currentFrame = new Frame();
}
