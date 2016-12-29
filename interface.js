$(document).ready(function(){

  var calculator = new CalculatorTenPinsBowling();

  displayFrame();
  displayRoll();
  displayTable();
  displayTotalScore();

  $('#my-form').submit(function(event) {
    event.preventDefault();
    var pins = $('#pins').val();
    if( calculator.frame < 10 ){
    calculator.passScore(pins);
    calculator.clearFrameScores();
    calculator.increaseFrame();
    calculator.changeRoll();
    }
    displayFrame();
    displayRoll();
    displayTable();
    displayTotalScore();
  })

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
