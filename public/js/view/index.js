$(document).ready(function() {
  game = new Game();
  $('#insult').text(game.insult);

  function update() {
    for (var i = 1; i <= 9; i++) {
      $('#frame' + i).text(game.rollHistory[i].join(', '));
    };
    $('#frame10').text(game.rollHistory[10].concat(game.rollHistory[11]).join(', '));
    for (var i = 1; i <= 10; i++) {
      $('#marker' + i).text(game.score()[i] + game.accumulate()[i]);
    };
    $('#insult').text(game.insult);
    $("#insult").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  };

  $(".button").click(function(){
    game.roll($(this).index());
    update();
    // alert (game.rollHistory[1]);
  });
});
