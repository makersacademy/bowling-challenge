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
  var maxPermittedScore = 10 - game.currentFrame().normalScore();
  for (var i = 1; i <= maxPermittedScore; i++) {
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
  addFrame(game);
  var rollSelect = document.getElementById("rollSelect");
  var score = parseInt(rollSelect.options[rollSelect.selectedIndex].value);
  game.roll(score);
  buildRollSelect(game);
  showScore(game);
}
function addFrame(game){
  var frameDisplay = document.getElementById("frameDisplay");
  var displayedFrames = frameDisplay.getElementsByTagName("li").length;
  var nFrame = game.currentFrame().n();
  console.log(nFrame);
    if (displayedFrames != nFrame) {
    var frameID = 'frame' + nFrame;
    var node = document.createElement("LI");
    var textNode = document.createTextNode("Frame " + nFrame);
    node.id = frameID;
    node.appendChild(textNode)
    frameDisplay.appendChild(node);
  }
}
function emptyFrames(){
  var frameDisplay = document.getElementById("frameDisplay");
  while( frameDisplay.firstChild ){
    frameDisplay.removeChild( frameDisplay.firstChild );
  }
}
