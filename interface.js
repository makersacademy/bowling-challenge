$(document).ready(function() {
  var game = new Game();

  $('#bowl1').click(function() {
      game.generateRandRoll1();
      $('#roll').text(game._randRoll1);
      game.roll(game._randRoll1);
      frameCount();
      updateFrame1();
      updateFrame2();
  });

  $('#bowl2').click(function(){
    game.generateRandRoll2();
    $('#roll').text(game._randRoll2);
    game.roll(game._randRoll2);
    frameCount();
    updateFrame1();
    updateFrame2();
  })

function frameCount() {
  $('#frame-count').text(game._framesInPlay.length + 1);
}

function updateFrame1() {
  if (game._framesInPlay.length === 3 ){
    $('#f1-total').text(game.getFrameScore(0));
  } else if (game._framesInPlay[0] !== undefined ){
    $('#f1-r1').text(game._framesInPlay[0].getFirstRoll());
    $('#f1-r2').text(game._framesInPlay[0].getSecondRoll());
  } else {
    $('#f1-r1').text(game._currentFrame.getFirstRoll());
    $('#f1-r2').text(game._currentFrame.getSecondRoll());
  };
}

function updateFrame2() {
  if (game._framesInPlay[1] !== undefined ){
    $('#f2-r1').text(game._framesInPlay[1].getFirstRoll());
    $('#f2-r2').text(game._framesInPlay[1].getSecondRoll());
  } else if ( game._framesInPlay.length === 1 ) {
    $('#f2-r1').text(game._currentFrame.getFirstRoll());
    $('#f2-r2').text(game._currentFrame.getSecondRoll());
  };
}



function displayWeather(city) {
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
  var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
  var units = '&units=metric';
  $.get(url + token + units, function(data) {
    $('#current-temperature').text(data.main.temp);
  })
}

displayWeather('London');

$('#current-city').change(function(event) {
  event.preventDefault();
  var city = $('#current-city').val();
  displayWeather(city);
})

})
