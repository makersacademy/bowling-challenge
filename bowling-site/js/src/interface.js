$(document).ready(function(){

  thrower = new Thrower();
  frameTerminator = new FrameTerminator();
  frameHandler = new FrameHandler(thrower,frameTerminator);
  game = new Game(frameHandler);


  function displaySingleFrameScore(frameNumber) {
    throw1Score = game.results[frameNumber-1].throw1;
    throw2Score = game.results[frameNumber-1].throw2;
    $('#frame-' + frameNumber +' > .throw1-score').text(throw1Score)
    $('#frame-' + frameNumber +' > .throw2-score').text(throw2Score)
    if (frameNumber == 10){
      throw3Score = game.results[frameNumber-1].throw3;

      $('#frame-' + frameNumber +' > .throw3-score').text(throw3Score)
    }


  }

  function displayAllCurrentResults(){
    for (i = 0; i < game.results.length; i++) {
    displaySingleFrameScore(i+1);
    }
  }


  $('#bowling-button').click(function(){
    game.playBowling();
    displayAllCurrentResults()
  });

  $('#reset-button').click(function(){
    location.reload();
  });
});
