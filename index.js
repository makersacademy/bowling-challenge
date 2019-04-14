$(document).ready(function() {
  game = new Game();
  $('#insult').text(game.insult);
  $('#newgame').hide();
  $('#buttons').show();


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
    if (game.isOver()) {
      $('#buttons').hide();
      $('#newgame').show();
    };
  };

  $(".button").click(function(){
    game.roll($(this).index());
    update();
  });

  $(".playagain").click(function(){
    location.reload();
  });
});
