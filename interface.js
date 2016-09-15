$(document).ready(function() {
  var game= new Game();

  $('#frame-bowls').click(function() {
    var bowl1 = parseInt($('#bowl1').val());
    var bowl2 = parseInt($('#bowl2').val());
    var bowl3 = parseInt($('#bowl3').val());
    game.frameBowls(bowl1, bowl2, bowl3);
    updateSheet();
    clearBowls();
  });

  function updateSheet() {
    $('#frame-number').text(game._frame);
    $('#total-score').text(game.score());
  };

  function clearBowls() {
    $('#bowl1').val('0');
    $('#bowl2').val('0');
    $('#bowl3').val('0');
  };

});
