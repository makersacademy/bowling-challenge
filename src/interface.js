$(document).ready(function(){

  game = new Game();
  frame = new Frame();

  var frameNumber = 0;

  $('#add-frame').click(function(){
    $('#controls').append(frameNumber);
  });

  $('#save-frame').click(function(){
    frameNumber++;
    game.addFrames(frameNumber);
    console.log(game._frames);
    if(frameNumber > 10){
      alert('Last frame!');
    } else 
    $('#current-frame').append(frameNumber)
    $('#current-score').append(game._score);
  });

  $('#bowl').click(function(){
    var frameIndex = frameNumber - 1
    // game._frames[frameIndex].firstBowl();
  });

});