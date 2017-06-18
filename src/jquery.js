$(document).ready(function() {
  var game = new Game();

  $('#bowl0').on('click', function() {
    game.bowl(0);
    $('#frame1-bowl1').text('0');
  });

});
