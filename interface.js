$(document).ready(function() {
  var score = new Score;
  var game = new Game;
  var currentFrame;
  game.start();

  $('#current-frame').change(function() {
  var index = $('select#current-frame').val();
  console.log(index)
  currentFrame = game._allFrames[index];
  console.log(currentFrame)
  $('#frame').text(parseInt(index) + 1);
});


  // $("select#current-frame").val()







})
