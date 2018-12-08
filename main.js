var Game = require('./src/game.js');
var Frame = require('./src/frame.js');
var TenthFrame = require('./src/tenthFrame.js');
var Updater = require('./src/updater.js');
var $ = require('jquery');

function drawTable(game) {
  var tableHeaders = "<tr>";
  var firstAndSecondScores = "<tr>";
  var finalScores = "<tr>";
  var rowEnder = '</tr>';
  var table = "";
  var totalScore = "";
  game.frames.forEach(function(frame, index){
     if (!(frame instanceof TenthFrame)) {
        tableHeaders += '<th class="tg-0lax" colspan="2">' + (index + 1) +'</th>';
        firstAndSecondScores += '<td class="tg-0lax firstScore">' + frame.getFirstScore() + '</td>' +
                                '<td class="tg-0lax secondScore">' + frame.getSecondScore() + '</td>';
        finalScores += '<td class="tg-0lax finalScore" colspan="2">' + frame.getFinalFrameScore() + '</td>';
     } else {
        tableHeaders += '<th class="tg-0lax" colspan="3">' + (index + 1) +'</th>';
        firstAndSecondScores += '<td class="tg-0lax firstScore">' + frame.getFirstScore() + '</td>' +
                                '<td class="tg-0lax secondScore">' + frame.getSecondScore() + '</td>' +
                                '<td class="tg-0lax bonusScore">' + frame.getBonusScore() + '</td>';
        finalScores += '<td class="tg-0lax finalScore" colspan="3">' + frame.getFinalFrameScore(); + '</td>';
     }
  });

  table = tableHeaders + rowEnder + firstAndSecondScores + rowEnder + finalScores + rowEnder;
  return table;
}

$(document).ready(function(){
  console.clear();
  var game = new Game();
  $('#bowlingTable').prepend(drawTable(game));
  $('#enter_score').click(function(){
     var score = parseInt($('#num_input').val());
     game.inputScore(score);
     $('#bowlingTable').children().remove();
     $('#bowlingTable').prepend(drawTable(game));
  });

  $("#num_input").on("focus", function() {
      $(this).val("");
  });


});
