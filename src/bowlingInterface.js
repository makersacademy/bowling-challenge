$(document).ready(function() {
  bowling = new Bowling();

  $("#btn0").click(function() {
    bowling.roll(0);
    writeRolls();
    disableButtons();
  });

  $("#btn1").click(function() {
    bowling.roll(1);
    writeRolls();
    disableButtons();
    console.log(bowling.isTenthFrame());
  });

  $("#btn2").click(function() {
    bowling.roll(2);
    writeRolls();
    disableButtons();
  });

  $("#btn3").click(function() {
    bowling.roll(3);
    writeRolls();
    disableButtons();
  });

  $("#btn4").click(function() {
    bowling.roll(4);
    writeRolls();
    disableButtons();
  });

  $("#btn5").click(function() {
    bowling.roll(5);
    writeRolls();
    disableButtons();
  });

  $("#btn6").click(function() {
    bowling.roll(6);
    writeRolls();
    disableButtons();
  });

  $("#btn7").click(function() {
    bowling.roll(7);
    writeRolls();
    disableButtons();
  });

  $("#btn8").click(function() {
    bowling.roll(8);
    writeRolls();
    disableButtons();
  });

  $("#btn9").click(function() {
    bowling.roll(9);
    writeRolls();
    disableButtons();
  });

  $("#btn10").click(function() {
    bowling.roll(10);
    writeRolls();
    disableButtons();
  });

  function disableButtons() {
    for (let i = 0; i <= 10; i++) {
      if (bowling.rollsArray.length % 2 !== 0) {
        if (bowling.rollsArray.slice(-1)[0] + i > 10) {
          $("#btn" + i).prop("disabled", true);
        }
      } else {
        $("#btn" + i).prop("disabled", false);
      }
    }
  }


  function writeRolls() {
    for (let i = 0; i < bowling.rollsArray.length; i++) {
      $("#box" + i).text(bowling.rollsArray[i]);
    }
  }
});
