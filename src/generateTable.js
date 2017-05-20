$(document).ready(function() {

  var addTableOutline = function() {
    $('.bowling-scorecard').prepend('<table><thead></thead><tbody></tbody></table');
    $('thead').append('<tr id="column-headings"></tr>');
    $('tbody').append('<tr id="score-boxes"></tr>');
    $('tbody').append('<tr id="frame-scores"></tr>');
  };

  var addTableHeaders = function() {
    // Add area for name
    $('#column-headings').append('<th colspan="8">Name</td>');
    // Add frames 1-9
    for (var j=1; j<=9; j++) {
      $('#column-headings').append('<th colspan="2">' + j + '</td>');
    }
    // Add tenth frame
    $('#column-headings').append('<th colspan="3">10</td>');
    // Add space for final score
    $('#column-headings').append('<th colspan="4">Score</td>');
  };

  var addScoreBoxesRow = function() {
    // Add area for name
    $('#score-boxes').append('<td colspan="8"></td>');
    // Add boxes for frames 1-10
    for (var k=1; k<=21; k++) {
      $('#score-boxes').append('<td colspan="1"></td>');
      $('#score-boxes td:nth-last-child(1)').attr('id', 'box-' + k);
    }
    // Add space for final score
    $('#score-boxes').append('<td colspan="4"></td>');
  };
    
  var addFrameScoresRow = function() {
    // Add area for name
    $('#frame-scores').append('<td colspan="8"></td>');
    // Add frames 1-9
    for (var j=1; j<=9; j++) {
      $('#frame-scores').append('<td colspan="2" id="score-' + j + '"></td>');
    }
    // Add tenth frame
    $('#frame-scores').append('<td colspan="3" id="score-10"></td>');
    // Add space for final score
    $('#frame-scores').append('<td colspan="4"></td>');
  };
  
  addTableOutline();
  addTableHeaders();
  addScoreBoxesRow();
  addFrameScoresRow();

  $('#frame-scores td:nth-child(1)').attr('id', 'player-name-box');
  $('#column-headings th:nth-last-child(1)').attr('id', 'player-score-box');
  $('#frame-scores').attr('height', '49px');

  $('#new-game').hide();
  $('.score-buttons').hide();
});

