import("./Frame.js");

function liveGame() {
  this.score = 0;
}

function previousFrame() {
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
  if ($frames.length > 1) bonusCheck();
  _clearFrame();
}

function bonusCheck() {
  if (previousFrame().isStrike()) return _strikeScore();
  if (previousFrame().isSpare()) return _spareScore();
  $currentGame.score += $currentFrame.frameScore();
  $(`#runningTotal${$frames.length}`).text($currentGame.score);
}

function _firstFrameScore() {
  $currentGame.score = $currentFrame.frameScore();
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

function _clearFrame() {
  $currentFrame = new Frame();
}
