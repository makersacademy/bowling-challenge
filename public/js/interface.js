$(document).ready(function() {
  var bowling = new Bowling();

  $('#button0').click(function() {
    hideImpossibleScores()
    bowling.bowl(0)
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('0')
    updateFrameScores();
  });

  $('#button1').click(function() {
    hideImpossibleScores()
    bowling.bowl(1)
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('1')
    updateFrameScores();
  });

  $('#button2').click(function() {
    bowling.bowl(2)
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('2')
    updateFrameScores();
  });

  $('#button3').click(function() {
    bowling.bowl(3)
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('3')
    updateFrameScores();
  });

  $('#button4').click(function() {
    bowling.bowl(4)
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('4')
    updateFrameScores();
  });

  $('#button5').click(function() {
    bowling.bowl(5)
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('5')
    updateFrameScores();
  });

  $('#button6').click(function() {
    bowling.bowl(6)
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('6')
    updateFrameScores();
  });

  $('#button7').click(function() {
    bowling.bowl(7)
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('7')
    updateFrameScores();
  });

  $('#button8').click(function() {
    bowling.bowl(8)
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('8')
    updateFrameScores();
  });

  $('#button9').click(function() {
    bowling.bowl(9)
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('9')
    updateFrameScores();
  });

  $('#button10').click(function() {
    bowling.bowl(10)
    $('#bowl1-bowl' + (bowling.getCurrentBowl() - 1)).text('-')
    $('#bowl1-bowl' + bowling.getCurrentBowl()).text('X')
    updateFrameScores();
  });

  function hideImpossibleScores() {
    console.log(bowling.getFrameScore()
  }

  function updateFrameScores() {
    $('#frame1').text(bowling.getFrameScore(1));
    $('#frame2').text(bowling.getFrameScore(1)+bowling.getFrameScore(2));
    $('#frame3').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3));
    $('#frame4').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4));
    $('#frame5').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5));
    $('#frame6').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)+bowling.getFrameScore(6));
    $('#frame7').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)+bowling.getFrameScore(6)+bowling.getFrameScore(7));
    $('#frame8').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)+bowling.getFrameScore(6)+bowling.getFrameScore(7)+bowling.getFrameScore(8));
    $('#frame9').text(bowling.getFrameScore(1)+bowling.getFrameScore(2)+bowling.getFrameScore(3)+bowling.getFrameScore(4)+bowling.getFrameScore(5)+bowling.getFrameScore(6)+bowling.getFrameScore(7)+bowling.getFrameScore(8)+bowling.getFrameScore(9));
    $('#frame10').text(bowling.getTotalScore(10));
  }


});
