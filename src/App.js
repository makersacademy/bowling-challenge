scoresheet = new Scoresheet;

window.onload = function WindowLoad(event) {
  buttons(0);
}

function press(n) {
  if(scoresheet.frames.length === 0 || scoresheet.currFrameOver()) {
    frame = new Frame;
    frame.logRollResult(n);
    scoresheet.addFrame(frame);
    var currFrame = (scoresheet.frames.length - 1);
    var rowRoll1 = document.getElementsByTagName('tr')[2];
    rowRoll1.getElementsByTagName('td')[currFrame+1].innerHTML = n;
    if(scoresheet.currFrameOver()) {
      buttons(0);
    } else {
      buttons(n);
    }
  } else {
    frame.logRollResult(n);
    var currFrame = (scoresheet.frames.length - 1);
    var rowRoll2 = document.getElementsByTagName('tr')[3];
    rowRoll2.getElementsByTagName('td')[currFrame+1].innerHTML = n;
    buttons(0);
  }

  if(scoresheet.currFrameOver()) {
    var rowRoll2 = document.getElementsByTagName('tr')[5];
    rowRoll2.getElementsByTagName('td')[currFrame+1].innerHTML = scoresheet.displayTotal();
  }

  if(scoresheet.gameOver()) {
    console.log(scoresheet.framesLimit);
    document.getElementById('gameOver').innerHTML = 'Game Over muthafucka!';
  }
}

function buttons(n) {
  var buttonStr = '';
  for(var i = 0; i < (11-n); i++) {
    buttonStr += '<button type="button" onclick="press(' + i + ')">' + i + '</button>';
  }
  document.getElementById('buttons').innerHTML = buttonStr;
}