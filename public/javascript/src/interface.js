$(document).ready(function() {
  var scorecard = new Scorecard;
  updatePinsDisplay();
  updateScore();
  updateFrame();

  $('#no-pins').click(function(){
    scorecard.roll(0);
    updatePinsDisplay();
    updateScore();
    updateFrame();
  })

  $('#one-pin').click(function(){
    scorecard.roll(1);
    updatePinsDisplay();
    updateScore();
    updateFrame();
  })

  $('#two-pins').click(function(){
    scorecard.roll(2);
    updatePinsDisplay();
    updateScore();
    updateFrame();
  })

  $('#three-pins').click(function(){
    scorecard.roll(3);
    updatePinsDisplay();
    updateScore();
    updateFrame();
  })

  $('#four-pins').click(function(){
    scorecard.roll(4);
    updatePinsDisplay();
    updateScore();
    updateFrame();
  })

  $('#five-pins').click(function(){
    scorecard.roll(5);
    updatePinsDisplay();
    updateScore();
    updateFrame();
  })

  $('#six-pins').click(function(){
    scorecard.roll(6);
    updatePinsDisplay();
    updateScore();
    updateFrame();
  })

  $('#seven-pins').click(function(){
    scorecard.roll(7);
    updatePinsDisplay();
    updateScore();
    updateFrame();
  })

  $('#eight-pins').click(function(){
    scorecard.roll(8);
    updatePinsDisplay();
    updateScore();
    updateFrame();
  })

  $('#nine-pins').click(function(){
    scorecard.roll(9);
    updatePinsDisplay();
    updateScore();
    updateFrame();
  })

  $('#ten-pins').click(function(){
    scorecard.roll(10);
    updatePinsDisplay();
    updateScore();
    updateFrame();
  })

  $('#reset').click(function(){
    scorecard = new Scorecard;
    updatePinsDisplay();
    updateScore();
    updateFrame();
  })

  function updateScore(){
    $('#score').text(scorecard.calculateScore())
  }
  function updateFrame(){
    $('#current-frame').text(scorecard.getCurrentFrame().number)
  }
  
  function updatePinsDisplay(){
    reversePinsArray = ['#no-pins', '#one-pin', '#two-pins', '#three-pins', '#four-pins', '#five-pins', '#six-pins', '#seven-pins', '#eight-pins', '#nine-pins', '#ten-pins'].reverse()
    if ( scorecard.getCurrentFrame().number != 10 && !scorecard.getCurrentFrame().isStrike() && scorecard.getCurrentFrame().rolls() == 1) {
      let upperLimit = scorecard.getCurrentFrame().contents[0]
      let i;
      for (i = 0; i < upperLimit; i++) {
        $(`${reversePinsArray[i]}`).addClass('hidden');
      }
    } else {
      reversePinsArray.forEach((item) => {
        $(`${item}`).removeClass('hidden');
      }) 
    }
  }
})
