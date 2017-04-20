var game = new Game();

function Bowl() {
  game.bowl();
  document.getElementById('spnScore').innerHTML = game.calculateScore();
  document.getElementById('spnFrame').innerHTML = game._frames.length;
  var currentCell = document.getElementById('frm'+game._frames.length);
  currentCell.innerHTML = game.currentFrame.firstBowl + '<br/>';
  currentCell.innerHTML += game.currentFrame.secondBowl === null ? '' : game.currentFrame.secondBowl;
  if(game.currentFrame.isAStrike()) {
    currentCell.innerHTML += "X"
  }
  if (game.currentFrame.isASpare()) {
    currentCell.innerHTML += "&nbsp;&nbsp;&nbsp;/"
  }
  if(game.gameOver()){
    document.getElementById('btnClick').disabled= true;
    document.getElementById('divFinish').style.display = 'block';
  }
}
