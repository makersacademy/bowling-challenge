$(document).ready(function(){

  var calculator = new CalculatorTenPinsBowling();

  displayAll();

  $('#my-form').submit(function(event) {
    event.preventDefault();
    var pins = $('#pins').val();
    if( calculator.frame === 10 && calculator.gameFinish === false ){
        calculator.passScore(pins);
        displayAll();

        if( calculator.isGameFinish() ){
            calculator.gameFinish = true;
            $('#game-status').text( "Your score is " + calculator.sumGameScores() + "!" );
        }

        calculator.increaseRoll();
        
    } else if( calculator.frame < 10 ) {
        $('#game-status').text( "Playing..." );
        calculator.passScore(pins);
        calculator.clearFrameScores();
        displayAll();
        calculator.increaseFrame();
        calculator.changeRoll();
    }
  })

  function displayAll(){
    displayFrame();
    displayRoll();
    displayTable();
    displayTotalScore();
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
