$(document).ready(function() {
  var game = new Game();

  $('#pin0').click(function(){
  game.roll(0);
  updateFrame(0);
  });

  $('#pin1').click(function(){
  game.roll(1);
  updateFrame(1);
  });

  $('#pin2').click(function(){
  game.roll(2);
  updateFrame(2);
  });

  $('#pin3').click(function(){
  game.roll(3);
  updateFrame(3);
  });

  $('#pin4').click(function(){
  game.roll(4);
  updateFrame(4);
  });

  $('#pin5').click(function(){
  game.roll(5);
  updateFrame(5);
  });

  $('#pin6').click(function(){
  game.roll(6);
  updateFrame(6);
  });

  $('#pin7').click(function(){
  game.roll(7);
  updateFrame(7);
  });

  $('#pin8').click(function(){
  game.roll(8);
  updateFrame(8);
  });

  $('#pin9').click(function(){
  game.roll(9);
  updateFrame(9);
  });

  $('#pin10').click(function(){
  game.roll(10);
  updateFrame(10);
  playStrikeAnimation();
  });

  $('#restart-btn').click(function(){
    location.reload();
  });

  function updateFrame(pins) {
    if(pins === 10) {$('#r' + game.rolls).text('X');}
    else if (game.spareInPreviousFrame() === true && game.rolls % 2 === 0){$('#r' + game.rolls).text('/');}
    else {$('#r' + game.rolls).text(pins);}
    updateCumulativeScores();
    updateTotalScore();
  }

  function updateTotalScore() {
    $('#total-score').text(game.totalScore);
  }

  function updateCumulativeScores() {
    for(var i=1; i<11; i++) {
      $('#cumulative-score-f' + i).text(game.cumulativeFrameScores[i-1])
    }
  }

  function playStrikeAnimation() {
    // $("img").show();
    // var counter = 5;
    // var id = setInterval(function() {
    //   counter--;
    //   if(counter < 0) {
    //       clearInterval(id);
    //       $("img").hide();
    // }, 1000);
  }

});
