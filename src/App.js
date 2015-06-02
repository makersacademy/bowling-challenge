scoresheet = new Scoresheet;

window.onload = function WindowLoad(event) {
  buttons(0);
}

function press(n) {
  if(scoresheet.frames.length === 0 || scoresheet.currFrameOver()) {
    frame = new Frame;
    scoresheet.addFrame(frame);
    frame.logRollResult(n);
    var currFrame = (scoresheet.frames.length - 1);
    var rowRoll1 = document.getElementsByTagName('tr')[2];
    rowRoll1.getElementsByTagName('td')[currFrame+1].innerHTML = n;
    var accumulator = 0;
    for(var i = 0; i < (currFrame+1); i++) {
      var rowGameTotal = document.getElementsByTagName('tr')[6];
      accumulator += scoresheet.frameScoreDisplay(i)
      if(scoresheet.frameScoreDisplay(i) != null) {
        rowGameTotal.getElementsByTagName('td')[i+1].innerHTML = accumulator;
      } else {
        rowGameTotal.getElementsByTagName('td')[i+1].innerHTML = null;
        console.log('enter null 1');
      }
    }
    for(var i = 0; i < (currFrame+1); i++) {
      var rowFrameTotal = document.getElementsByTagName('tr')[5];
      rowFrameTotal.getElementsByTagName('td')[i+1].innerHTML = scoresheet.frameScoreDisplay(i);
    }
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
    var accumulator = 0;
    for(var i = 0; i < (currFrame+1); i++) {
      var rowGameTotal = document.getElementsByTagName('tr')[6];
      accumulator += scoresheet.frameScoreDisplay(i)
      console.log(i);
      console.log(scoresheet.frameScoreDisplay(i));
      if(scoresheet.frameScoreDisplay(i) != null) {
        rowGameTotal.getElementsByTagName('td')[i+1].innerHTML = accumulator;
        console.log('enter accumulator 2');
      } else {
        rowGameTotal.getElementsByTagName('td')[i+1].innerHTML = null;
        console.log('enter null 2');
      }
    }
    for(var i = 0; i < (currFrame+1); i++) {
      var rowFrameTotal = document.getElementsByTagName('tr')[5];
      rowFrameTotal.getElementsByTagName('td')[i+1].innerHTML = scoresheet.frameScoreDisplay(i);
    }
  }

  if(scoresheet.gameOver()) {
    document.getElementById('gameOver').innerHTML = 'GAME OVER!';
  }
}

function buttons(n) {
  var buttonStr = '';
  for(var i = 0; i < (11-n); i++) {
    buttonStr += '<button type="button" onclick="press(' + i + ')">' + i + '</button>';
  }
  document.getElementById('buttons').innerHTML = buttonStr;
}