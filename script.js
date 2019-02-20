$(document).ready(function(){
  var game = new Game();

$('#frame-number').text(game.frameNumber);

  pinHit = function(pins){
    game.roll(pins);
    if (game._frame.length == 2){
      game.endFrame();
      game.countBonus();
      game.newFrame();
      $('#frame-number').text(game.frameNumber);

    };
    frameScore();
    totalScore();
    $('#total-score').text(game.getTotalScore());
  };

  frameScore = function() {
    for (let i = 1 ; i < 11 ; i ++){
    // write a condition to display only when frameLog is not empty
    //   if (game.frameLog[i-'1'] === null ) {
    //     game.frameLog[i-'1'] = 0;
    // };
    document.getElementById('frame'+i).innerHTML = game.frameLog[i];
    };
  };

  totalScore = function (){
    // for (let i = 1 ; i < 11 ; i ++){
    // document.getElementById('marker'+i).innerHTML = game.frameScore[i+'1'];
    // };
    marker1.innerHTML = game.frameScore['1'];
    marker2.innerHTML = game.frameScore['2'];
    marker3.innerHTML = game.frameScore['3'];
    marker4.innerHTML = game.frameScore['4'];
    marker5.innerHTML = game.frameScore['5'];
    marker6.innerHTML = game.frameScore['6'];
    marker7.innerHTML = game.frameScore['7'];
    marker8.innerHTML = game.frameScore['8'];
    marker9.innerHTML = game.frameScore['9'];
    marker10.innerHTML = game.frameScore['10'];

  }

});
