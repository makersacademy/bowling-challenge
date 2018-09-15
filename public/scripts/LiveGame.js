import("./Frame.js");

function liveGame() {
  this.score = 0;
}

$("#pinButtons").on("click", function() {
  console.log("hello");
});

function addRoll(pin) {
  if ($frames.length < 10) {
    $currentFrame.firstRoll === null ? _addRollFirst(pin) : _addRollSecond(pin);
  }
}

function _addRollFirst(pin) {
  $currentFrame.firstRoll = pin;
  $(`#frame${$frames.length + 1}`).text($currentFrame.firstRoll);
}

function _addRollSecond(pin) {
  if ($currentFrame.firstRoll + pin > 10) return;
  $currentFrame.secondRoll = pin;
  $currentGame.score += $currentFrame.frameScore();
  $frames.push($currentFrame);
  $("#previousFrames").text($frames);
  $(`#frame${$frames.length}`).text(
    `${$currentFrame.firstRoll}, ${$currentFrame.secondRoll}`
  );
  $(`#marker${$frames.length}`).text($currentGame.score);
  _clearFrame();
}

function _clearFrame() {
  $currentFrame.firstRoll = null;
  $currentFrame.secondRoll = null;
}
