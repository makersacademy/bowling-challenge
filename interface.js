$(document).ready(function(){

  var calculator = new CalculatorTenPinsBowling();

  displayAll();

  $('#my-form').submit(function(event) {
    event.preventDefault();
    var pins = $('#pins').val();
    if( calculator.frame === 10 && calculator.finish === false ){
        if( calculator.spare === true ){ calculator.passSpareBonus(pins) }
        if( calculator.strike === true ){ calculator.passStrikeBonus(pins) }
        calculator.clearSpare();
        calculator.passScore(pins);
        displayAll();

        if( calculator.isGameFinish() ){
            calculator.finish = true;
            $('#game-status').text( "Your score is " + calculator.sumGameScores() + "!" );
        }

        calculator.increaseRoll();

    } else if( calculator.frame < 10 ) {
        $('#game-status').text( "Playing..." );


        if( calculator.roll === 2 ){
          calculator.passScore(pins);
          if( calculator.strike === true ){ calculator.passStrikeBonus(pins) }
          if( calculator.sumFrameScores() === 10 ){ calculator.setSpare() };
          calculator.clearStrike();
          displayAll();
          calculator.increaseFrame();
          calculator.changeRoll();
          calculator.clearFrameScores();
          calculator.clearStrikeBonus();
        } else {
          if( calculator.spare === true ){ calculator.passSpareBonus(pins) }
          if( calculator.strike === true ){ calculator.passStrikeBonus(pins) }
          if( pins === '10' ){
            calculator.setStrike()
            calculator.passStrike()
            calculator.strikeBonus = [10,0]
            displayAll();
            calculator.increaseFrame();
            calculator.clearFrameScores();
            calculator.clearStrikeBonus();
          } else {
            calculator.passScore(pins);
            calculator.clearSpare();
            displayAll();
            calculator.changeRoll();
          }
        }
    }
  })

  function displayAll(){
    displayFrame();
    displayRoll();
    displayTable();
    displayTotalScore();
    $('#1').text( calculator.gameScores );
    $('#2').text( calculator.frameScores );
    $('#3').text( calculator.strike );
    $('#4').text( calculator.spare );
    $('#5').text( calculator.strikeBonus );
    $('#6').text( calculator.gameFinish );
  }

  function displayFrame(){
      $('#frame').text( calculator.frame );
  }

  function displayRoll(){
      $('#roll').text( calculator.roll );
  }

  function displayTable(){
    var i;
    var j;
    var place;
    for(i=0; i<calculator.gameScores.length; i++){
      for(j=0; j<calculator.gameScores[i].length; j++){
        place = '#' + (i+1) + '-' + (j+1)
        $(place.toString()).text( calculator.gameScores[i][j] );
      }
    }
  }

  function displayTotalScore(){
    $('#total').text( calculator.sumGameScores() );
  }

})
