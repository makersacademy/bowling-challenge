let scorecard = new scorecard

$(document).ready(function(){
  $('#roll1').write(function() {
    thermostat.totals();
    $('#roll1').text(scorecard.total);
    $('#roll1').attr('class', scorecard.total());
  });

})