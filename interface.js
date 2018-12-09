$(document).ready(function() {
  var game = new Game();
  var frame = new Frame();
  totalScore();

  $('#total').on('click', function(){
    frame.roll();
    totalScore();
  });
