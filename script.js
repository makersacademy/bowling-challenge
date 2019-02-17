$(document).ready(function(){
  var game = new Game();

  pinHit = function(pins){
    game.roll(pins);
    game.endFrame();
    frameScore();
    // totalScore();
    $('#total-score').text(game._score);
  };

  frameScore = function() {
    frame1.innerHTML = game.frameScore['1'];
    frame2.innerHTML = game.frameScore['2'];
    frame3.innerHTML = game.frameScore['3'];
    frame4.innerHTML = game.frameScore['4']
    frame5.innerHTML = game.frameScore['5']
    frame6.innerHTML = game.frameScore['6']
    frame7.innerHTML = game.frameScore['7']
    frame8.innerHTML = game.frameScore['8']
    frame9.innerHTML = game.frameScore['9']
    frame10.innerHTML = game.frameScore['10']
  };

  $('#frame-number').text(game.frameNumber);
  $('#new-frame').click(function(){
    game.newFrame();
    $('#frame-number').text(game.frameNumber)
  });
});
