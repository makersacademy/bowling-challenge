$(document).ready(function() {
  var bowling = new Bowling();

  $("#zero").click(function() {
    bowling.roll(0);
    updateScore()
    $("#" + bowling.currentRoll).text('0')
  })

  $("#one").click(function() {
    bowling.roll(1);
    updateScore()
    $("#" + bowling.currentRoll).text('1')
  })

  $("#two").click(function() {
    bowling.roll(2);
    updateScore()
    $("#" + bowling.currentRoll).text('2')
  })

  $("#three").click(function() {
    bowling.roll(3);
    updateScore()
    $("#" + bowling.currentRoll).text('3')
  })

  $("#four").click(function() {
    bowling.roll(4);
    updateScore()
    $("#" + bowling.currentRoll).text('4')
  })

  $("#five").click(function() {
    bowling.roll(5);
    updateScore()
    $("#" + bowling.currentRoll).text('5')
  })

  $("#six").click(function() {
    bowling.roll(6);
    updateScore()
    $("#" + bowling.currentRoll).text('6')
  })

  $("#seven").click(function() {
    bowling.roll(7);
    updateScore()
    $("#" + bowling.currentRoll).text('7')
  })

  $("#eight").click(function() {
    bowling.roll(8);
    updateScore()
    $("#" + bowling.currentRoll).text('8')
  })

  $("#nine").click(function() {
    bowling.roll(9);
    updateScore()
    $("#" + bowling.currentRoll).text('9')
  })

  $("#strike").click(function() {
    bowling.roll('x');
    updateScore()
    $("#" + bowling.currentRoll).text('x')
  })

  function updateScore() {
    $("#totalScore").text(bowling.score)
  };
});
