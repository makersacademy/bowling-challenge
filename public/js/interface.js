var bowling = new Bowling();

$(document).ready(function () {
  /// Todo parte del objeto 'window' en JS

  /// xk todo parte de window en JS, osea q tiene scope global

  var score = $('#score');
  score.text(bowling.score);

  var frame = $('#frame');
  frame.text(bowling.frame);


  $('#roll').change(function() {
    var roll = $('#roll').val();

    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-score').text(parseInt(data.main.temp));
  })
  });
});