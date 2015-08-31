$(document).ready(function() {
  var bowling = new Bowling();


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