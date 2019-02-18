$(document).ready(function(){
  var game = new Game();

  pinHit = function(pins){
    game.roll(pins);
    if (game._frame.length == 2){
      game.endFrame();
    };
    frameScore();
    totalScore();
    $('#total-score').text(game._score);
  };

  frameScore = function() {
    frame1.innerHTML = game.frameLog['0'];
    frame2.innerHTML = game.frameLog['1'];
    frame3.innerHTML = game.frameLog['2'];
    frame4.innerHTML = game.frameLog['3'];
    frame5.innerHTML = game.frameLog['4'];
    frame6.innerHTML = game.frameLog['5'];
    frame7.innerHTML = game.frameLog['6'];
    frame8.innerHTML = game.frameLog['7'];
    frame9.innerHTML = game.frameLog['8'];
    frame10.innerHTML = game.frameLog['9'];
    // same as getElementByID("frame1").innerHTML
  };

  totalScore = function (){
    marker0.innerHTML = game.frameScore['1'];
    marker1.innerHTML = game.frameScore['2'];
    marker2.innerHTML = game.frameScore['3'];
    marker3.innerHTML = game.frameScore['4'];
    marker4.innerHTML = game.frameScore['5'];
    marker5.innerHTML = game.frameScore['6'];
    marker6.innerHTML = game.frameScore['7'];
    marker7.innerHTML = game.frameScore['8'];
    marker8.innerHTML = game.frameScore['9'];
    marker9.innerHTML = game.frameScore['10'];

  }

  $('#frame-number').text(game.frameNumber);
  $('#new-frame').click(function(){
    game.newFrame();
    $('#frame-number').text(game.frameNumber)
  });
});
