$(document).ready(function() {
  var game = new Game();

  $("#newGame").on('click', function() {
    $("#newGame").html(game.newGame());
    // $("#temperature").html(thermostat.temperature);
    // $("#energyUsage").html(thermostat.energyUsage());
  })

};
