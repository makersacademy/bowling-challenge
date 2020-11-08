$(document).ready(function() {
  var scorecard = new Scorecard;
  updateScore();
  updateFrame();

  $('#one-pin').click(function(){
    scorecard.roll(1);
    updateScore();
    updateFrame();
  })

  $('#two-pins').click(function(){
    scorecard.roll(2);
    updateScore();
    updateFrame();
  })

  $('#three-pins').click(function(){
    scorecard.roll(3);
    updateScore();
    updateFrame();
  })

  $('#four-pins').click(function(){
    scorecard.roll(4);
    updateScore();
    updateFrame();
  })

  $('#five-pins').click(function(){
    scorecard.roll(5);
    updateScore();
    updateFrame();
  })

  $('#six-pins').click(function(){
    scorecard.roll(6);
    updateScore();
    updateFrame();
  })

  $('#seven-pins').click(function(){
    scorecard.roll(7);
    updateScore();
    updateFrame();
  })

  $('#eight-pins').click(function(){
    scorecard.roll(8);
    updateScore();
    updateFrame();
  })

  $('#nine-pins').click(function(){
    scorecard.roll(9);
    updateScore();
    updateFrame();
  })

  $('#ten-pins').click(function(){
    scorecard.roll(10);
    updateScore();
    updateFrame();
  })

  $('#reset').click(function(){
    scorecard = new Scorecard;
    updateScore();
    updateFrame();
  })



  function updateScore(){
    $('#score').text(scorecard.calculateScore())
  }
  function updateFrame(){
    $('#current-frame').text(scorecard.getCurrentFrame().number)
  }
})
