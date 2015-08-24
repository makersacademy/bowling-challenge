$(document).ready(function() {
  var bowlingGame = new BowlingGame();

  $(function() {
      for (i =0; i <= 10; i++){
        $(".list").append($('<option></option>').val(i).html(i));
      }
  });

  $(function() {
    var row;
    for (var i = 0; i < 3; ++i){
      row=$('<tr>');
      $('.scorecard').append(row);
      for (var j = 1; j < 12; ++j) {
        if (i === 0) { row.append($('<th>').text('Frame' + j).attr('colspan', 2)); }
        if (i === 1) { row.append('<td>&nbsp;'); row.append('<td>&nbsp;'); }
        if (i === 2) { row.append($('<td>&nbsp;').attr('colspan', 2)); }
      }
    }
    $('.scorecard th:last').html('Total');
    $('.scorecard tr:nth-child(2) td:last').remove();
  });

  $('.button').click(function() {
    var pins = $('.list option:selected').val();
    bowlingGame.register(parseInt(pins));
    update();
  });

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
    for (var j = startCounter; j <= endCounter; j++) {
      $('.scorecard tr:last td').eq(j - 1).html(bowlingGame.frameTotal(j));
      $('.scorecard tr:last td').eq(10).html(bowlingGame.gameTotal(j));
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
});
