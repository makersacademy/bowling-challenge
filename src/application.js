player = new Player;

$(document).ready( function () {
  $('#submit').click(function () {
    player.firstBowl($('#bowl1').val());
    // var bowl1 = $('#bowl1').val();
    player.secondBowl($('#bowl2').val());
    // var bowl2 = $('#bowl2').val();
    $('#score1').html(player.score);
  });
});