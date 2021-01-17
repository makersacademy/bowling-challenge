$(document).ready(function() {
  var scorecard = new Scorecard;
    updateScore();
    updateFrame();
    updatePinsDisplay();

  $('#no-pins').click(function(){
    scorecard.roll(0);
    updateScore();
    updateFrame();
    updatePinsDisplay();
  })

  $('#one-pin').click(function(){
    scorecard.roll(1);
    updateScore();
    updateFrame();
    updatePinsDisplay();
  })

  $('#two-pins').click(function(){
    scorecard.roll(2);
    updateScore();
    updateFrame();
    updatePinsDisplay();
  })

  $('#three-pins').click(function(){
    scorecard.roll(3);
    updateScore();
    updateFrame();
    updatePinsDisplay();
  })

  $('#four-pins').click(function(){
    scorecard.roll(4);
    updateScore();
    updateFrame();
    updatePinsDisplay();
  })

  $('#five-pins').click(function(){
    scorecard.roll(5);
    updateScore();
    updateFrame();
    updatePinsDisplay();
  })

  $('#six-pins').click(function(){
    scorecard.roll(6);
    updateScore();
    updateFrame();
    updatePinsDisplay();
  })

  $('#seven-pins').click(function(){
    scorecard.roll(7);
    updateScore();
    updateFrame();
    updatePinsDisplay();
  })

  $('#eight-pins').click(function(){
    scorecard.roll(8);
    updateScore();
    updateFrame();
    updatePinsDisplay();
  })

  $('#nine-pins').click(function(){
    scorecard.roll(9);
    updateScore();
    updateFrame();
    updatePinsDisplay();
  })

  $('#ten-pins').click(function(){
    scorecard.roll(10);
    updateScore();
    updateFrame();
    updatePinsDisplay();
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
    if ( scorecard.getCurrentFrame().remainingPins != 10 ) {
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
