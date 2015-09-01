$(document).ready(function() {
  var bowling = new Bowling();
  var count = 0;
  var counter = 0;


  $('.button').click(function() {
    var number = parseInt($('.list option:selected').val());
    if (bowling.rollCounter === 1) {
      bowling.firstRoll(number);
      $('.bowling_scores tr td').eq(count).html(number);
    } else if (bowling.rollCounter === 2) {
        if (bowling.frameNumber === 10) {
          $('.bowling_scores tr td').eq(count).html(number);
          updateTotalScore();
        }
      bowling.secondRoll(number);
      $('.bowling_scores tr td').eq(count).html(number);
      updateTotalScore();
    } else {
      bowling.thirdRoll(number);
      $('.bowling_scores tr td').eq(count).html(number);
      updateTotalScore();
    }

    if (number === 10 && count < 18) {
      $('.bowling_scores tr:last td').eq(counter).html('X');
      $('.bowling_scores tr:last td').eq(10).html(bowling.totalScore);
      counter++;
      count++;
    }

    if (number === 10 && count === 18) {
      bowling.rollCounter += 1;
    }


    if (bowling.lastStrike !== 0 && count < 19) {
      $('.bowling_scores th').eq(9).attr('colspan', 3);
      $('.bowling_scores tr:nth-child(2)').append('<td>');
      $('.bowling_scores tr:last td:nth-last-child(2)').attr('colspan', 3);
    }

    if (bowling.lastSpare !== 0 && count < 20) {
      $('.bowling_scores th').eq(9).attr('colspan', 3);
      $('.bowling_scores tr:nth-child(2)').append('<td>');
      $('.bowling_scores tr:last td:nth-last-child(2)').attr('colspan', 3);
    }


    console.log(bowling.rollCounter)
    count++;
  });

  var updateTotalScore = function() {
    $('.bowling_scores tr:last td').eq(counter).html(bowling.totalScore);
    $('.bowling_scores tr:last td').eq(10).html(bowling.totalScore);
    bowling._isGameOver();
    counter++;
  };

  var buildSelector = function() {
    for (var i = 0; i < 11; i++) {
      $('.list').append($('<option>').val(i).html(i))
    }
  };

  var buildGUI = function() {
    var row;
    for (var i = 0; i < 3; ++i){
      row = $('<tr>');
      $('.bowling_scores').append(row);
      for (var j = 1; j < 12; ++j) {
        if (i === 0) { row.append($('<th>').text('Frame ' + j).attr('colspan', 2)); }
        if (i === 1) { row.append('<td>&nbsp;'); row.append('<td>&nbsp;'); }
        if (i === 2) { row.append($('<td>&nbsp;').attr('colspan', 2)); }
      }
    }
    $('.bowling_scores th:last').html('Total');
    $('.bowling_scores tr:nth-child(2) td:last').remove();
  };


  buildGUI();
  buildSelector();
});