game = new Scorecard();

$(document).ready(function() {

  $('#zer').click(function() { game.throw(0); });

  $('#one').click(function() { game.throw(1); });

  $('#two').click(function() { game.throw(2); });

  $('#thr').click(function() { game.throw(3); });

  $('#fou').click(function() { game.throw(4); });

  $('#fiv').click(function() { game.throw(5); });

  $('#six').click(function() { game.throw(6); });

  $('#sev').click(function() { game.throw(7); });

  $('#eig').click(function() { game.throw(8); });

  $('#nin').click(function() { game.throw(9); });

  $('#ten').click(function() { game.throw(10); });

  $(document).on('click', function() {
    $('.frame-1-ball-1').text(game._display[0]);
    $('.frame-1-ball-2').text(game._display[1]);
    $('.frame-2-ball-1').text(game._display[2]);
    $('.frame-2-ball-2').text(game._display[3]);
    $('.frame-3-ball-1').text(game._display[4]);
    $('.frame-3-ball-2').text(game._display[5]);
    $('.frame-4-ball-1').text(game._display[6]);
    $('.frame-4-ball-2').text(game._display[7]);
    $('.frame-5-ball-1').text(game._display[8]);
    $('.frame-5-ball-2').text(game._display[9]);
    $('.frame-6-ball-1').text(game._display[10]);
    $('.frame-6-ball-2').text(game._display[11]);
    $('.frame-7-ball-1').text(game._display[12]);
    $('.frame-7-ball-2').text(game._display[13]);
    $('.frame-8-ball-1').text(game._display[14]);
    $('.frame-8-ball-2').text(game._display[15]);
    $('.frame-9-ball-1').text(game._display[16]);
    $('.frame-9-ball-2').text(game._display[17]);
    $('.frame-0-ball-1').text(game._display[18]);
    $('.frame-0-ball-2').text(game._display[19]);
    $('.frame-0-ball-3').text(game._display[20]);
    $('.frame-1-total').text(game._frames[0]);
    $('.frame-2-total').text(game._frames[1]);
    $('.frame-3-total').text(game._frames[2]);
    $('.frame-4-total').text(game._frames[3]);
    $('.frame-5-total').text(game._frames[4]);
    $('.frame-6-total').text(game._frames[5]);
    $('.frame-7-total').text(game._frames[6]);
    $('.frame-8-total').text(game._frames[7]);
    $('.frame-9-total').text(game._frames[8]);
    $('.frame-0-total').text(game._frames[9]);

    if (game._frames[9] != undefined) { $(".score-buttons").hide(); }
    else if (game.even(game._scores.length)) { $(".score-buttons").show(); }
    else { $(".score-buttons").slice((11 - game._scores[game._scores.length - 1]),11).hide(); }
  });
});
