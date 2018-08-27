$(document).ready(function() {
  var bowling = new Bowling();
  updateScores();

  function updateScores() {
    $('#frame-one-total').text(bowling.frameOneTotal);
    $('#frame-two-total').text(bowling.frameTwoTotal);
    $('#frame-three-total').text(bowling.frameThreeTotal);
    $('#frame-four-total').text(bowling.frameFourTotal);
    $('#frame-five-total').text(bowling.frameFiveTotal);
    $('#frame-six-total').text(bowling.frameSixTotal);
    $('#frame-seven-total').text(bowling.frameSevenTotal);
    $('#frame-eight-total').text(bowling.frameEightTotal);
    $('#frame-nine-total').text(bowling.frameNineTotal);
    $('#frame-ten-total').text(bowling.frameTenTotal);
    $('#total').text(bowling.maxTotal);
    $('#spare-bonus-1').text(bowling.totalSpareBonus1);
    $('#spare-bonus-2').text(bowling.totalSpareBonus2);
    $('#spare-bonus-3').text(bowling.totalSpareBonus3);
    $('#spare-bonus-4').text(bowling.totalSpareBonus4);
    $('#spare-bonus-5').text(bowling.totalSpareBonus5);
    $('#spare-bonus-6').text(bowling.totalSpareBonus6);
    $('#spare-bonus-7').text(bowling.totalSpareBonus7);
    $('#spare-bonus-8').text(bowling.totalSpareBonus8);
    $('#spare-bonus-9').text(bowling.totalSpareBonus9);
    $('#strike-bonus-1').text(bowling.totalStrikeBonus1);
    $('#strike-bonus-2').text(bowling.totalStrikeBonus2);
    $('#strike-bonus-3').text(bowling.totalStrikeBonus3);
    $('#strike-bonus-4').text(bowling.totalStrikeBonus4);
    $('#strike-bonus-5').text(bowling.totalStrikeBonus5);
    $('#strike-bonus-6').text(bowling.totalStrikeBonus6);
    $('#strike-bonus-7').text(bowling.totalStrikeBonus7);
    $('#strike-bonus-8').text(bowling.totalStrikeBonus8);
    $('#strike-bonus-9').text(bowling.totalStrikeBonus9);
  };



  $('.strike-bonus').text(bowling.totalStrikeBonus);

  $('#roll1').click(function (){
    bowling.frameOneFirstRoll(document.getElementById('a').value);
    updateScores();
  });
  $('#roll2').click(function (){
    bowling.frameOneSecondRoll(document.getElementById('b').value);
    updateScores();
  });
  $('#roll3').click(function (){
    bowling.frameTwoFirstRoll(document.getElementById('c').value);
    updateScores();
  });
  $('#roll4').click(function (){
    bowling.frameTwoSecondRoll(document.getElementById('d').value);
    updateScores();
  });
  $('#roll5').click(function (){
    bowling.frameThreeFirstRoll(document.getElementById('e').value);
    updateScores();
  });
  $('#roll6').click(function (){
    bowling.frameThreeSecondRoll(document.getElementById('f').value);
    updateScores();
  });
  $('#roll7').click(function (){
    bowling.frameFourFirstRoll(document.getElementById('g').value);
    updateScores();
  });
  $('#roll8').click(function (){
    bowling.frameFourSecondRoll(document.getElementById('h').value);
    updateScores();
  });
  $('#roll9').click(function (){
    bowling.frameFiveFirstRoll(document.getElementById('i').value);
    updateScores();
  });
  $('#roll10').click(function (){
    bowling.frameFiveSecondRoll(document.getElementById('j').value);
    updateScores();
  });
  $('#roll11').click(function (){
    bowling.frameSixFirstRoll(document.getElementById('k').value);
    updateScores();
  });
  $('#roll12').click(function (){
    bowling.frameSixSecondRoll(document.getElementById('l').value);
    updateScores();
  });
  $('#roll13').click(function (){
    bowling.frameSevenFirstRoll(document.getElementById('m').value);
    updateScores();
  });
  $('#roll14').click(function (){
    bowling.frameSevenSecondRoll(document.getElementById('n').value);
    updateScores();
  });
  $('#roll15').click(function (){
    bowling.frameEightFirstRoll(document.getElementById('o').value);
    updateScores();
  });
  $('#roll16').click(function (){
    bowling.frameEightSecondRoll(document.getElementById('p').value);
    updateScores();
  });
  $('#roll17').click(function (){
    bowling.frameNineFirstRoll(document.getElementById('q').value);
    updateScores();
  });
  $('#roll18').click(function (){
    bowling.frameNineSecondRoll(document.getElementById('r').value);
    updateScores();
  });
  $('#roll19').click(function (){
    bowling.frameTenFirstRoll(document.getElementById('s').value);
    updateScores();
  });
  $('#roll20').click(function (){
    bowling.frameTenSecondRoll(document.getElementById('t').value);
    updateScores();
  });
  $('#roll21').click(function (){
    bowling.frameTenThirdRoll(document.getElementById('u').value);
    updateScores();
  });

});
