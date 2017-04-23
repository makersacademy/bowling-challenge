$(document).ready(function() {
  var game = new Game();

  $(document).ready(function() {
    $('#play').click(function() {
      game.frameSet();
      game.strikeLogic();
      updateBonus();
      game.rollBUpdate();
      updaterollB();
      game.scoreUpdate();
      updateScore();
      game.total();
      updateTotals();
      resetPins();
      updatePins();
      finishCheck();
      console.log(game.rollBreakdownRaw);
      console.log(game.scoresRaw);
      console.log(game.bonus);
      console.log(game.totals);
      console.log(game.pins);
    });
  });

  function finishCheck() {
    if (game.scoresRaw.length == 10) {
      alert ("You have finished! Congrats!")
    }
  }

  function updaterollB() {
  $('#roll1').text(game.rollBreakdown[0]);
  $('#roll2').text(game.rollBreakdown[1]);
  $('#roll3').text(game.rollBreakdown[2]);
  $('#roll4').text(game.rollBreakdown[3]);
  $('#roll5').text(game.rollBreakdown[4]);
  $('#roll6').text(game.rollBreakdown[5]);
  $('#roll7').text(game.rollBreakdown[6]);
  $('#roll8').text(game.rollBreakdown[7]);
  $('#roll9').text(game.rollBreakdown[8]);
  $('#roll10').text(game.rollBreakdown[9]);
  $('#roll11').text(game.rollBreakdown[10]);
  $('#roll12').text(game.rollBreakdown[11]);
  $('#roll13').text(game.rollBreakdown[12]);
  $('#roll14').text(game.rollBreakdown[13]);
  $('#roll15').text(game.rollBreakdown[14]);
  $('#roll16').text(game.rollBreakdown[15]);
  $('#roll17').text(game.rollBreakdown[16]);
  $('#roll18').text(game.rollBreakdown[17]);
  $('#roll19').text(game.rollBreakdown[18]);
  $('#roll20').text(game.rollBreakdown[19]);
  $('#roll21').text(game.rollBreakdown[20]);
}

function updateScore() {
$('#score1').text(game.scores[0]);
$('#score2').text(game.scores[1]);
$('#score3').text(game.scores[2]);
$('#score4').text(game.scores[3]);
$('#score5').text(game.scores[4]);
$('#score6').text(game.scores[5]);
$('#score7').text(game.scores[6]);
$('#score8').text(game.scores[7]);
$('#score9').text(game.scores[8]);
$('#score10').text(game.scores[9]);
}

function updateBonus() {
$('#bonus1').text(game.bonus[0]);
$('#bonus2').text(game.bonus[1]);
$('#bonus3').text(game.bonus[2]);
$('#bonus4').text(game.bonus[3]);
$('#bonus5').text(game.bonus[4]);
$('#bonus6').text(game.bonus[5]);
$('#bonus7').text(game.bonus[6]);
$('#bonus8').text(game.bonus[7]);
$('#bonus9').text(game.bonus[8]);
$('#bonus10').text(game.bonus[9]);
}

function updateTotals() {
$('#total1').text(game.totals[0]);
$('#total2').text(game.totals[1]);
$('#total3').text(game.totals[2]);
$('#total4').text(game.totals[3]);
$('#total5').text(game.totals[4]);
$('#total6').text(game.totals[5]);
$('#total7').text(game.totals[6]);
$('#total8').text(game.totals[7]);
$('#total9').text(game.totals[8]);
$('#total10').text(game.totals[9]);
}

function resetPins() {
  $('#pin0').html("<img src='https://s-media-cache-ak0.pinimg.com/736x/7e/31/1b/7e311b2be358c4112ea706840e24ca8d.jpg' width='30px' height='60px' >");
  $('#pin1').html("<img src='https://s-media-cache-ak0.pinimg.com/736x/7e/31/1b/7e311b2be358c4112ea706840e24ca8d.jpg' width='30px' height='60px' >");
  $('#pin2').html("<img src='https://s-media-cache-ak0.pinimg.com/736x/7e/31/1b/7e311b2be358c4112ea706840e24ca8d.jpg' width='30px' height='60px' >");
  $('#pin3').html("<img src='https://s-media-cache-ak0.pinimg.com/736x/7e/31/1b/7e311b2be358c4112ea706840e24ca8d.jpg' width='30px' height='60px' >");
  $('#pin4').html("<img src='https://s-media-cache-ak0.pinimg.com/736x/7e/31/1b/7e311b2be358c4112ea706840e24ca8d.jpg' width='30px' height='60px' >");
  $('#pin5').html("<img src='https://s-media-cache-ak0.pinimg.com/736x/7e/31/1b/7e311b2be358c4112ea706840e24ca8d.jpg' width='30px' height='60px' >");
  $('#pin6').html("<img src='https://s-media-cache-ak0.pinimg.com/736x/7e/31/1b/7e311b2be358c4112ea706840e24ca8d.jpg' width='30px' height='60px' >");
  $('#pin7').html("<img src='https://s-media-cache-ak0.pinimg.com/736x/7e/31/1b/7e311b2be358c4112ea706840e24ca8d.jpg' width='30px' height='60px' >");
  $('#pin8').html("<img src='https://s-media-cache-ak0.pinimg.com/736x/7e/31/1b/7e311b2be358c4112ea706840e24ca8d.jpg' width='30px' height='60px' >");
  $('#pin9').html("<img src='https://s-media-cache-ak0.pinimg.com/736x/7e/31/1b/7e311b2be358c4112ea706840e24ca8d.jpg' width='30px' height='60px' >");

}

function updatePins() {
  if (game.pins[0] == 'X') $('#pin0').html("<img src='http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png' width='30px' height='60px'>");
  if (game.pins[1] == 'X') $('#pin1').html("<img src='http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png' width='30px' height='60px'>");
  if (game.pins[2] == 'X') $('#pin2').html("<img src='http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png' width='30px' height='60px'>");
  if (game.pins[3] == 'X') $('#pin3').html("<img src='http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png' width='30px' height='60px'>");
  if (game.pins[4] == 'X') $('#pin4').html("<img src='http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png' width='30px' height='60px'>");
  if (game.pins[5] == 'X') $('#pin5').html("<img src='http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png' width='30px' height='60px'>");
  if (game.pins[6] == 'X') $('#pin6').html("<img src='http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png' width='30px' height='60px'>");
  if (game.pins[7] == 'X') $('#pin7').html("<img src='http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png' width='30px' height='60px'>");
  if (game.pins[8] == 'X') $('#pin8').html("<img src='http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png' width='30px' height='60px'>");
  if (game.pins[9] == 'X') $('#pin9').html("<img src='http://alloutput.com/wp-content/uploads/2013/11/black-circle-mask-to-fill-compass-outline.png' width='30px' height='60px'>");
}

});
