$(document).ready(function(){

  var calculator = new CalculatorTenPinsBowling();
  displayTable();

  $('#my-form').submit(function(event) {
    event.preventDefault();
    var pins = $('#pins').val();
    calculator.passScore(pins);
    displayTable();
  })

  function displayScore(pins){
    $('#score').text( calculator.passScore(pins) );
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

})
