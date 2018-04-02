var game
function startGame(){
  emptyFrames();
  var game = new Game (Frame);
  document.getElementById("msg").innerHTML = 'Game on!';
  document.getElementById("rollSelect").style.display = 'block';
  document.getElementById("rollButton").style.display = 'block';
  showScore(game);
  document.getElementById("score").style.display = 'block';
  buildRollSelect(game);
  addFrame(game);
  return game;
}
function showScore(game){
  document.getElementById("score").innerHTML = 'Total Score: ' + game.score();
}
function buildRollSelect(game){
  emptyRollSelect();
  var rollSelect = document.getElementById("rollSelect");
  if (game.currentFrame().isFinished()) {
    var maxPermittedScore = 10;

  } else {
      var maxPermittedScore = 10 - game.currentFrame().normalScore();
  }
  for (var i = 0; i <= maxPermittedScore; i++) {
    var el = document.createElement("option");
    el.textContent = String(i);
    el.textContent = String(i);
    rollSelect.appendChild(el);
  }
}
function emptyRollSelect(){
  var rollSelect = document.getElementById("rollSelect");
  var length = rollSelect.options.length
  for (i = 0; i < length; i++) {
    rollSelect.remove(rollSelect.i);
  }
}
function addRoll(game){
  var rollSelect = document.getElementById("rollSelect");
  var score = parseInt(rollSelect.options[rollSelect.selectedIndex].value);
  game.roll(score);
  showScore(game);
  addFrame(game);
  updateFrames(game);
  buildRollSelect(game);
  checkFinished(game);
}
function addFrame(game){
  var frameDisplay = document.getElementById("frameDisplay");
  var displayedFrames = frameDisplay.getElementsByTagName("li").length;
  var nFrame = game.currentFrame().n();
  if (displayedFrames != nFrame) {
    var frameID = 'frame' + nFrame;
    var node = document.createElement("LI");
    var textNode = document.createTextNode("Frame " + nFrame);
    node.id = frameID;
    node.appendChild(textNode)
    frameDisplay.appendChild(node);
  }
}
function updateFrames(game){
  var frameDisplay = document.getElementById("frameDisplay");
  var displayedFrames = frameDisplay.getElementsByTagName("li").length;
  for (i = 0; i < displayedFrames; i++) {
    var frameI = i + 1
    var frame = game.frames()[i];
    var score = frame.score();
    var rollstring = frame.rolls().reduce( function (stringOut, roll) {
      return stringOut + " (" + roll + ")"
    }, "");
    var brollstring = frame.brolls().reduce( function (stringOut, roll) {
      return stringOut + " [" + roll + "]"
    }, "")
    var displayFrame = document.getElementById("frame" + frameI)
    displayFrame.innerHTML = "Frame " + frameI + ": " + score + rollstring + brollstring;
  }
}
function emptyFrames(){
  var frameDisplay = document.getElementById("frameDisplay");
  while( frameDisplay.firstChild ){
    frameDisplay.removeChild( frameDisplay.firstChild );
  }
}
function checkFinished(game){
  if (game.isFinished()) {
    var winString = ""
    if (game.score() === 300) { winString = " Perfect game!" }
    if (game.score() === 0) { winString = " Gutter game!" }
    document.getElementById("msg").innerHTML = 'Game over!' + winString;
  }
}
