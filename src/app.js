scorecard = new Scorecard();

$(document).ready(function() {

  $('#roll').show(function(){
    roll.innerHTML = scorecard.recordRoll(10);
  });

});
