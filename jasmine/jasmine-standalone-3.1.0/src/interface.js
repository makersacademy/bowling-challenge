// JQuery
$(document).ready(function() {
  var game = new Game();
  var calc = new CalculateScore();
  updateScore();

  // api request for city $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=63d1ac51575b09b11d1f8408f4f4ccd3&units=metric', function(data) {
  //   $('#current-temperature').text(data.main.temp);
  // });



  // $('#tcurrent-score').on('click', function() {
  //   thermostat.up();
  //   updateScore();
  // });

  $('#button-score').on('click', function() {
    game.getScore();
    updateScore();
  });


  $('#roll-button').on('click', function() {
    game.roll(5);
    // updateScore();
  });
  // have put updateTemperature into its own function (method( because
  // it is repeatedly invoked (called) in each of the above functions
  function updateScore() {
    $('#current-score').text(game.getScore());
  };

});
