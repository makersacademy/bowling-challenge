player = new Player;
var frames = 1;

$(document).ready( function () {
  $('#button-group1 input').click(function () {
    var pins1 = $("form input[type=radio]:checked").val();
    $("input:radio").removeAttr("checked");
    player.firstBowl(pins1);
    $('#hits').html(pins1);
  });
    $('#button-group2 input').click(function () {
    var pins2 = $("form input[type=radio]:checked").val();
    player.secondBowl(pins2);
    $('#hits').html(pins2);
    $('#score1').html(player.score.toString());
    frames = player.score.length + 1;
    $('#frames').html('Frame ' + frames);
  });

});

