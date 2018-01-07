var game = new Game();

$(document).ready(function(){

  var rollIndex = 0;
  var frameIndex = 0;

  var afterRoll = function(score){
    // $('#f' + frameIndex + 'score').html(game.calculateScore());
    $('#r' + rollIndex).html(score);
    var frameScore = Number($('#r' + (frameIndex*2)).html()) + Number($('#r' + (frameIndex*2+1)).html())
    $('#f' + frameIndex + 'score').html(frameScore);
    frameIndex += rollIndex%2;
    rollIndex++;
  };

  $('#reset').click(function() {
    location.reload();
  });

  $('#Roll0').click(function(){
    game.roll(0);
    afterRoll(0);
  });

  $('#Roll1').click(function(){
    game.roll(1);
      afterRoll(1);
  });

  $('#Roll2').click(function(){
    game.roll(2);
      afterRoll(2);
  });

  $('#Roll3').click(function(){
    game.roll(3);
      afterRoll(3);
  });

  $('#Roll4').click(function(){
    game.roll(4);
      afterRoll(4);
  });

  $('#Roll5').click(function(){
    game.roll(5);
      afterRoll(5);
  });

  $('#Roll6').click(function(){
    game.roll(6);
      afterRoll(6);
  });

  $('#Roll7').click(function(){
    game.roll(7);
      afterRoll(7);
  });

  $('#Roll8').click(function(){
    game.roll(8);
      afterRoll(8);
  });

  $('#Roll9').click(function(){
    game.roll(9);
      afterRoll(9);
  });

  $('#Roll10').click(function(){
    game.roll(10);
      afterRoll(10);
  });
});
