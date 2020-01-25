$(document).ready(function() {

  let frames = [];
  let frameNumber = 0;
  
  for (var i = 0; i < 10; i++) { 
    frames[i] = new Frame(); 
  }

  let currentFrame = frames[frameNumber];
  let game = new Game();

  recordScore = function(pins){
    isGameOver();
    isFrameOver();
    addRoll(pins);
    showFrameScore();
    showBonusScore();
    showTotalScore();
    // console.log(frameNumber)
    // console.log(frames)
    // console.log(currentFrame)
  }

  isGameOver = function(){
    if (game.gameInPlay === false ){
      var elems = document.getElementsByClassName("btn-info");
      for(i = 0; i < 11; i++){
        elems[i].disabled = true;
      }
      gameover.innerHTML = 'Game Over!';
      yourscore.innerHTML = 'Your score: ' +" "+ game.getTotalScore();
      playagain.innerHTML = '<button type="button" onclick="newGame()"  class="btn btn-secondary">Play Again!</button>'
      } else {
        return;
      }
  };

  isFrameOver = function(){
    if (currentFrame.roll.length == 2 && frameNumber < 10){
      // move to next frame
      frameNumber++; 
      currentFrame = frames[frameNumber];
    } 
    // else check bonus frame and then set gameover to true
  }

  addRoll = function(pins){
    if (currentFrame.roll.length == 1){
      currentFrame.knockedDownPins(pins)
    } else {
      currentFrame.knockedDownPins(pins)
      game.addFrame(currentFrame.roll);
    }
  }

  showFrameScore = function() {
    frame11.innerHTML = game.frameScore['1'][0] || "";
    frame12.innerHTML = game.frameScore['1'][1] || "";
    frame21.innerHTML = game.frameScore['2'][0] || "";
    frame22.innerHTML = game.frameScore['2'][1] || "";
    frame31.innerHTML = game.frameScore['3'][0] || "";
    frame32.innerHTML = game.frameScore['3'][1] || "";
    frame41.innerHTML = game.frameScore['4'][0] || "";
    frame42.innerHTML = game.frameScore['4'][1] || "";
    frame51.innerHTML = game.frameScore['5'][0] || "";
    frame52.innerHTML = game.frameScore['5'][1] || "";
    frame61.innerHTML = game.frameScore['6'][0] || "";
    frame62.innerHTML = game.frameScore['6'][1] || "";
    frame71.innerHTML = game.frameScore['7'][0] || "";
    frame72.innerHTML = game.frameScore['7'][1] || "";
    frame81.innerHTML = game.frameScore['8'][0] || "";
    frame82.innerHTML = game.frameScore['8'][1] || "";
    frame91.innerHTML = game.frameScore['9'][0] || "";
    frame92.innerHTML = game.frameScore['9'][1] || "";
    frame101.innerHTML = game.frameScore['10'][0] || "";
    frame102.innerHTML = game.frameScore['10'][1] || "";
  };

  showBonusScore = function(){
    score = game.bonusFrame[frameNumber];
    console.log(game.bonusFrame)
    bonus1.innerHTML = score || "";
    bonus2.innerHTML = score || "";
    bonus3.innerHTML = score || "";
    bonus4.innerHTML = score || "";
    bonus5.innerHTML = score || "";
    bonus6.innerHTML = score || "";
    bonus7.innerHTML = score || "";
    bonus8.innerHTML = score || "";
    bonus9.innerHTML = score || "";
    bonus10.innerHTML = score || "";
  }

  showTotalScore = function() {
    let tScore = [];
    tScore.push(game.getTotalScore());
    
  };

  newGame = function(){
    delete window.game;
    location.reload();
  }
})

