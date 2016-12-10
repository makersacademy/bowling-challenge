$(document).ready(function(){

  var caluclater = new CaluclaterTenPinsBowling();

  $('#my-form').submit(function(event) {
    event.preventDefault();
    var pins = $('#pins').val();
    displayScore(pins);
  })

  function displayScore(pins){
    $('#score').text( caluclater.passScore(pins) );
  }

})
