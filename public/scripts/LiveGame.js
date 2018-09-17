import("./Frame.js");

function liveGame() {
  this.score = 0;
}

function _previousFrame() {
  return $frames[$frames.length - 2];
}

function addRoll(pin) {
  if ($frames.length < 10) {
    $currentFrame.firstRoll == null ? _addRollFirst(pin) : _addRollSecond(pin);
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
  if ($frames.length == 10) _finalFramescore();
  if ($frames.length > 2 && $frames.length < 10) {
    _previousFrame().isStrike() ? _doubleCheck() : _spareCheck();
  }
  _clearFrame();
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

function _finalFramescore() {}

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
