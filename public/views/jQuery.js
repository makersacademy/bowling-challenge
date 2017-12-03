$(document).ready(function() {

  scorecard = new BowlingScorecard();

  var outputCounter = 0;
  var numberChecker = 0;
  printTotal();

  $("#button0").on('click', function() {
    if (isGameOver(outputCounter) == false) {
      $("#button0").html(scorecard.roll(0));
      printButton(0);
      printTotal();
    }
  })
  $("#button1").on('click', function() {
    if (isGameOver(outputCounter) == false) {
      $("#button1").html(scorecard.roll(1));
      printButton(1);
      printTotal();
    }
  })
  $("#button2").on('click', function() {
    if (isGameOver(outputCounter) == false) {
      $("#button2").html(scorecard.roll(2));
      printButton(2);
      printTotal();
    }
  })
  $("#button3").on('click', function() {
    if (isGameOver(outputCounter) == false) {
      $("#button3").html(scorecard.roll(3));
      printButton(3);
      printTotal();
    }
  })
  $("#button4").on('click', function() {
    if (isGameOver(outputCounter) == false) {
      $("#button4").html(scorecard.roll(4));
      printButton(4);
      printTotal();
    }
  })
  $("#button5").on('click', function() {
    if (isGameOver(outputCounter) == false) {
      $("#button5").html(scorecard.roll(5));
      printButton(5);
      printTotal();
    }
  })
  $("#button6").on('click', function() {
    if (isGameOver(outputCounter) == false) {
      $("#button6").html(scorecard.roll(6));
      printButton(6);
      printTotal();
    }
  })
  $("#button7").on('click', function() {
    if (isGameOver(outputCounter) == false) {
      $("#button7").html(scorecard.roll(7));
      printButton(7);
      printTotal();
    }
  })
  $("#button8").on('click', function() {
    if (isGameOver(outputCounter) == false) {
      $("#button8").html(scorecard.roll(8));
      printButton(8);
      printTotal();
    }
  })
  $("#button9").on('click', function() {
    if (isGameOver(outputCounter) == false) {
      $("#button9").html(scorecard.roll(9));
      printButton(9);
      printTotal();
    }
  })
  $("#button10").on('click', function() {
    if (isGameOver(outputCounter) == false) {
      $("#button10").html(scorecard.roll(10));
      printButton(10);
      printTotal();
    }
  })

  function printButton(number) {
    outputCounter += 1;
    if (outputCounter > 20) {
      if (numberChecker == 10) {
        $("#" + outputCounter).text(number);
      } else {
        return null
      }
    }
    // even
    if (outputCounter % 2 == 0) {
      if (numberChecker + number > 10) {
        if (outputCounter == 20) {
          // last Strike
          $("#" + outputCounter).text(number);
        } else {
          outputCounter -= 1;
        }
      } else {
        $("#" + outputCounter).text(number);
        if (outputCounter == 20) {
          if (numberChecker != 10) {
            // Last Spare
            numberChecker += number;
          }
        }
      }
    // odd
    } else {
      $("#" + outputCounter).text(number);
      numberChecker = number
      if (number == 10 && outputCounter != 19) {
        outputCounter += 1
      }
    }
  };
});

function isGameOver(outputCounter) {
  if (outputCounter > 21) {
    return true
  } else {
    return false
  }
}

function printTotal() {
  // console.log(scorecard.printTotal[0])
  $('#total1').text(scorecard.printTotal[0]);
  $('#total2').text(scorecard.printTotal[1]);
  $('#total3').text(scorecard.printTotal[2]);
  $('#total4').text(scorecard.printTotal[3]);
  $('#total5').text(scorecard.printTotal[4]);
  $('#total6').text(scorecard.printTotal[5]);
  $('#total7').text(scorecard.printTotal[6]);
  $('#total8').text(scorecard.printTotal[7]);
  $('#total9').text(scorecard.printTotal[8]);
  $('#total10').text(scorecard.printTotal[9]);
  $('#totalTotal').text(scorecard.total);
}
