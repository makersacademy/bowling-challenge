var Game = require('./src/game.js');
var Frame = require('./src/frame.js');
var TenthFrame = require('./src/tenthFrame.js');
var Updater = require('./src/updater.js');
var $ = require('jquery');

// TODO: fix issue with totals showing accross all frames
// make the end of rounds more dynamic

function drawTable(game) {

  var tableHeaders = "<tr>";
  var firstAndSecondScores = "<tr>";
  var finalScores = "<tr>";
  var rowEnder = '</tr>';
  var table = "";
  game.frames.forEach(function(frame, index){
     if (!(frame instanceof TenthFrame)) {
        tableHeaders += '<th class="tg-0lax" colspan="2">' + (index + 1) +'</th>';
        firstAndSecondScores += '<td class="tg-0lax firstScore">' + deNullify(frame.getFirstScore()) + '</td>' +
                                '<td class="tg-0lax secondScore">' + xOrSlash(frame) + '</td>';
        finalScores += '<td class="tg-0lax finalScore" colspan="2">' + deNullify(game.getTotal()) + '</td>';
     } else {
        tableHeaders += '<th class="tg-0lax" colspan="3">' + (index + 1) +'</th>';
        firstAndSecondScores += '<td class="tg-0lax firstScore">' + deNullify(frame.getFirstScore()) + '</td>' +
                                '<td class="tg-0lax secondScore">' + deNullify(frame.getSecondScore()) + '</td>' +
                                '<td class="tg-0lax bonusScore">' + deNullify( frame.getBonusScore()) + '</td>';
        finalScores += '<td class="tg-0lax finalScore" colspan="3">' + deNullify(game.getTotal()); + '</td>';
     }
  });

  table = tableHeaders + rowEnder + firstAndSecondScores + rowEnder + finalScores + rowEnder;
  return table;
}

function xOrSlash(frame) {
   if (frame.isStrike()) {
     return 'X';
   } else if (frame.isSpare()) {
     return '/';
   } else {
     return deNullify(frame.getSecondScore());
   }
}

function deNullify(score) {
   return score ? score : " ";
}

$(document).ready(function(){
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
