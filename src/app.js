scorecard = new Scorecard();

$(document).ready(function() {

  $('#roll1A').show(function(){
    roll1A.innerHTML = scorecard.recordRollA(Math.floor((Math.random() * 11)));
  });

  $('#roll1B').show(function(){
    roll1B.innerHTML = scorecard.recordRollB(Math.floor((Math.random() * (11 - roll1A.innerHTML))));
  });

  $('#turn1').show(function(){
    turn1.innerHTML = scorecard.recordTurn(roll1A.innerHTML, roll1B.innerHTML);
  });

});
