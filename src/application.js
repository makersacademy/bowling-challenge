$(document).ready(function() {
  var bowlingGame = new BowlingGame();

  var buildGUI = function() {
    var row;
    for (var rowID = 0; rowID < 3; rowID++) {
      row=$('<tr>');
      $('.scorecard').append(row);
      for (var colID = 1; colID < 12; colID++) {
        if (rowID === 0) { row.append($('<th>').text('Frame' + colID).attr('colspan', 2)); }
        if (rowID === 1) { row.append('<td>&nbsp;'); row.append('<td>&nbsp;'); }
        if (rowID === 2) { row.append($('<td>&nbsp;').attr('colspan', 2)); }
      }
    }
    $('.scorecard th:last').html('Total');
    $('.scorecard tr:nth-child(2) td:last').remove();
  };

  var buildButtons = function() {
    for (rowID =0; rowID <= 10; rowID++) {
      var input = $('<input type="submit">').val(rowID)
        .on('click', $.proxy(registerValue, this));
      var li = $('<li>').append(input);
      $('.buttons').append(li);
    }
  };

  var registerValue = function(cell) {
    var value = parseInt($(cell.currentTarget).val());
    bowlingGame.register(value);
    update();
  };

  var update = function() {
    updateRoll();
    updateScore();
    if (bowlingGame.frameNumber === 10) { updateRollTenthFrame(); }
  };

  var updateRoll = function() {
    var frameNum = bowlingGame.frameNumber;
    var cellNumber  = (bowlingGame.frameNumber * 2) - 2;
    $('.scorecard tr td').eq(cellNumber).html(bowlingGame.roll.frame[frameNum][0]);
    if (bowlingGame.rollNumber === 2) { $('.scorecard tr td').eq(cellNumber + 1).html(bowlingGame.roll.frame[frameNum][1]); }
  };

  var updateScore = function() {
    var endCounter = bowlingGame.frameNumber;
    var startCounter = Math.max(1, endCounter - 2);
    for (var i = startCounter; i <= endCounter; i++) {
      $('.scorecard tr:last td').eq(i - 1).html(bowlingGame.gameTotal(i));
      $('.scorecard tr:last td').eq(10).html(bowlingGame.gameTotal(i));
    }
  };

  var updateRollTenthFrame = function() {
    if (bowlingGame.rollNumber === 3) {
      $('.scorecard th').eq(9).attr('colspan', 3);
      $('.scorecard tr:nth-child(2)').append('<td>');
      $('.scorecard tr:last td:nth-last-child(2)').attr('colspan', 3);
      $('.scorecard tr:nth-child(2) td:nth-last-child(2)').html(bowlingGame.roll.frame[10][2]);
    }
  };

  buildGUI();
  buildButtons();
});
