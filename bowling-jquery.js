$( document ).ready(function(){
  var bowling = new Bowling();

  $('#roll').click(function(){
    bowling.roll();
    $('totalScore').text(bowling.totalScore);
    $('gameFrames').text(bowling.gameFrames);
    $('latestRoll').text(bowling.latestRoll);
    latestRollUpdate();
  })

  function latestRollUpdate() {
    bowling.latestRollUpdate();
  }
})
