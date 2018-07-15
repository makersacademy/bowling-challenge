// JQuery
$(document).ready(function() {
  var score = new Score();
  var game = new Game();

  updateScore();
  updateFrame();

  // $('#button-score').on('click', function() {
  //   game.getScore();
  //   updateScore();
  // });

  $('#bowl-pins').submit(function(event) {
    event.preventDefault();
    var pin = $('#pins').val();
    game.roll(pin);
    updateScore();
    // $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    //   $('#current-temperature').text(data.main.temp);
    // })
  });

  $('#roll-button').on('click', function() {
    game.roll(1);
    updateScore();
    updateFrame();
  });



  function updateScore() {
    $('#current-score').text(game.getScore());
  };

  function updateFrame() {
    $('#frame').text(game.getFrames());
  };


});
