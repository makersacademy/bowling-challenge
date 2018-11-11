$(document).ready(function() {
  var game = new Game();

scorebuttons_div
var i;
$('#scorebuttons_div').append("<button class='scorebuttons' id='score_btn_0' value='0'>0</button>")
for (i = 1; i < 11; i++) {

  $('#scorebuttons_div').append("<button class='scorebuttons' id='score_btn_"+i+"' value='"+i+"'>"+i+"</button>")
  $('#heading-row').append('<th colspan="6" width="10%" id="score_head_'+i+'">'+i+'</th>');
  $('#score-row').append('<td colspan="3"></td><td colspan="3" width="10%" id="score_'+i+'"></td>');
  $('#marker-row').append('<td colspan="6" width="10%" id="marker_'+i+'"></td>');

}
$('#score_head_1').attr('class', 'frame_selected');

  function showScore(pin) {
    $('#score_'+game.currentframenumber+'').text(game.currentframe.formatRolls());
    $('#marker_'+game.currentframenumber+'').text(game.currentframe.getPinsScore());
    $('#current-score').text(game.calculateGameTotalScore());
    if(game.currentframe.isFrameOpen()){
    disableButtons(game.currentframe.remainingPins())
    } else {
      enableButtons()
      resetFormatting()
    }
    if(game.calculateGameTotalScore() === 300) {
      disableButtons(-1)
      // $('#score_btn_0').prop('disabled', true);
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
    game.enterRoll(val);
    $('#frame-number').text(game.currentframenumber);
    showScore()
    if(game.currentframe.isFrameOpen() || game.currentframe.isFinalFrame()){ frametext = game.currentframenumber } else {frametext = game.currentframenumber+1}
    $('#frame-number').text(frametext);
    $('#score_head_'+frametext+'').attr('class', 'frame_selected');
    if (game.currentframe.isFinalFrame() && !game.currentframe.isFrameOpen()
  && game.currentframe.hasStrike()){
      $('#enter_pins_message').text("How many did you get for your bonus?")
    }


  });



});
