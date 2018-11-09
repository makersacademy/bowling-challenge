$(document).ready(function() {
  var game = new Game();

scorebuttons_div
var i;
$('#scorebuttons_div').append("<button class='scorebuttons' id='0' value='0'>0</button>")
for (i = 1; i < 11; i++) {

  $('#scorebuttons_div').append("<button class='scorebuttons' id='score_btn_"+i+"' value='"+i+"'>"+i+"</button>")
  $('#heading-row').append('<th colspan="6" width="10%" id="score_head_'+i+'">'+i+'</th>');
  $('#score-row').append('<td colspan="3"></td><td colspan="3" width="10%" id="score_'+i+'"></td>');
  $('#marker-row').append('<td colspan="6" width="10%" id="marker_'+i+'"></td>');

}
$('#score_head_1').attr('class', 'frame_selected');
  // updateTemperature();

  function showScore(pin) {
    // $('#score_'+game.currentframenumber+'').text(game.currentframe.rolls);
    $('#score_'+game.currentframenumber+'').text(game.currentframe.formatRolls());
    $('#marker_'+game.currentframenumber+'').text(game.currentframe.getPinsScore());
    $('#current-score').text(game.calculateGameTotalScore());
    // console.log(game.currentframe.isFrameOpen())
    // console.log(game.currentframe.formatRolls())
    if(game.currentframe.isFrameOpen()){
    disableButtons(game.currentframe.remainingPins())
    } else {
      enableButtons()
      resetFormatting()
    }
  }

  function disableButtons(remainder) {
    var i;
    for (i = remainder+1; i < 11; i++) {
      $('#score_btn_'+i+'').prop('disabled', true);
    }
  }

  function enableButtons() {
    var i;
    for (i = 0; i < 11; i++) {
      $('#score_btn_'+i+'').prop('disabled', false);
    }
  }

  function resetFormatting() {
    var i;
    for (i = 1; i < 11; i++) {
      $('#score_head_'+i+'').attr('class', '');
    }
  }

  $('.scorebuttons').on('click', function() {
    val = parseInt($(this).attr("value"))
    // console.log(val)
    game.enterRoll(val);
    $('#frame-number').text(game.currentframenumber);
    showScore()
    if(game.currentframe.isFrameOpen()){ frametext = game.currentframenumber } else {frametext = game.currentframenumber+1}
    $('#frame-number').text(frametext);
    $('#score_head_'+frametext+'').attr('class', 'frame_selected');


  });



});
