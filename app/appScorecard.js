$(document).ready(function() {
  scorecard = new Scorecard();
  var rowID = 1;
  var frameID = 0;
  var array = [];

  $(".pins").click(function() {
    var rollNo = parseInt($(this).text());

    $('#' + rowID).text(rollNo);
    array.push(rollNo);

    var i = array.length;

    if ((i > 0) && (rowID < 19) && ((array[0]) === 10) && ((array.length) < 2)) {
      $('#' + (rowID + 1)).text("X");
      rowID += 1;
      array.push(0);
    }
    if ((i > 0) && (rowID < 19) && ((array[0] + array[1]) === 10) && ((array.length) < 3)) {
      $('#' + (rowID)).text("/");
    }

    if ((i > 0) && (rowID < 19) && ((array[0] + array[1]) > 10)) {
      $('#' + (rowID)).text("");
      array.pop();
      alert("You cannot knock down more than 10 pins!!")
      return
    }
    var i = array.length;
    if ((i > 0) && ((i) % 2 == 0) && (rowID < 19)) {
      roll2 = array.pop();
      roll1 = array.pop();
      scorecard.roll(roll1, roll2);
      scorecard.runningTotal();
      frameID += 1;
    } else if ((i > 0) && ((i) % 2 != 0) && (rowID > 19)) {
      roll3 = array.pop();
      roll2 = array.pop();
      roll1 = array.pop();
      scorecard.roll(roll1, roll2, roll3);
      scorecard.runningTotal();
      frameID += 1;
    }
    $('#f' + (frameID - 2)).text(scorecard.frameTotals[(frameID - 3)]);
    $('#f' + (frameID - 1)).text(scorecard.frameTotals[(frameID - 2)]);
    $('#f' + frameID).text(scorecard.frameTotals[(frameID - 1)]);
    $('#runningTotal').text(scorecard.runningTotal());
    if ((i > 0) && (rowID < 19) && ((array[0]) === 10) && ((array.length) < 3)) {} else {
      rowID += 1;
    }

  });

  $('#reset').click(function() {
    window.location.reload();
  });

});
