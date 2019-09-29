$(document).ready(function() {
  bowling = new Bowling();

  $("#btn0").click(function() {
    bowling.roll(0);
    writeRolls();
  });

  $("#btn1").click(function() {
    bowling.roll(1);
    writeRolls();
  });

  $("#btn2").click(function() {
    bowling.roll(2);
    writeRolls();
  });

  $("#btn3").click(function() {
    bowling.roll(3);
    writeRolls();
  });

  $("#btn4").click(function() {
    bowling.roll(4);
    writeRolls();
  });

  $("#btn5").click(function() {
    bowling.roll(5);
    writeRolls();
  });

  $("#btn6").click(function() {
    bowling.roll(6);
    writeRolls();
  });

  $("#btn7").click(function() {
    bowling.roll(7);
    writeRolls();
  });

  $("#btn8").click(function() {
    bowling.roll(8);
    writeRolls();
  });

  $("#btn9").click(function() {
    bowling.roll(9);
    writeRolls();
  });

  $("#btn10").click(function() {
    bowling.roll(10);
    writeRolls();
  });

  function writeRolls() {
    for (let i = 0; i < bowling.rollsArray.length; i++) {
      $("#box" + i).text(bowling.rollsArray[i]);
    }
  }
});
