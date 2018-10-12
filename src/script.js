'use strict';

$( document ).ready(function() {
  var game;
  game = new Game();

  function showCorrectPins(pinValNum){
    var currentFrame = game.getCurrentFrameNumber();
    var frames = game.frames();

    $('.pin').each(function(){
      var val = parseInt($(this).attr('data-value'));
      if(val > (10 - pinValNum)){
        $(this).hide();
      }
    })

    if(currentFrame <= 10 && frames[currentFrame].length == 0){
      $('.pin').show();
    }
  }

  $('input').click(function(){
    var pinVal = $(this).attr('data-value');
    var pinValNumber = parseInt(pinVal)
    game.roll(pinValNumber);

    //hide invalid pins
    showCorrectPins(pinValNumber);

    updateDisplayTable();
  })

  function updateDisplayTable(){
    var currentFrame = game.getCurrentFrameNumber();
    var frames = game.frames();

    if(currentFrame > 10){
      currentFrame = 10;
    }
    for(var i = 1; i <= currentFrame; i++){
      for(var j = 0;j < frames[i].length;j++){
        var rollVal = frames[i][j];
        var tableSelector = 'f' + i + 'r' + j;
        
        if (rollVal === 10) {
          $('#' + tableSelector).text("X");
        } else if (game.frameScore(i) === 10){
          $('#' + 'f' + i + 'r1').text('/');
        }
        else {
          $('#' + tableSelector).text(rollVal);
        }
        
      }
      var frameScoreSelector = 'frame-score-' + i;
      var frameScore = game.frameScore(i);
        $('#' + frameScoreSelector).text(frameScore);
    }
    $('#total-score').text(game.totalScore());
    
    
  }

  $('#total-score').text(game.totalScore());

});