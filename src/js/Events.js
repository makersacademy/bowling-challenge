$( document ).ready(function() {
  var game = new Game();

  $('table').on('change','select', function() {
    try {
      game.roll(parseInt(this.value));
    }
    catch(err) {
      alert(err);
    }
    if ($(this).attr('id') === 'roll-1.1') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#cumulative-1").text(game._score._scoreboard[0]);
    }

    if ($(this).attr('id') === 'roll-1.2') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#cumulative-1").text(game._score._scoreboard[0]);
    }

    if ($(this).attr('id') === 'roll-2.1') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#cumulative-1").text(game._score._scoreboard[0]);

      $("#cumulative-2").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1]);
    }

    if ($(this).attr('id') === 'roll-2.2') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#cumulative-1").text(game._score._scoreboard[0]);

      $("#cumulative-2").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1]);
    }

    if ($(this).attr('id') === 'roll-3.1') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#cumulative-1").text(game._score._scoreboard[0]);

      $("#cumulative-2").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1]);

      $("#cumulative-3").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2]);
    }

    if ($(this).attr('id') === 'roll-3.2') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#cumulative-1").text(game._score._scoreboard[0]);

      $("#cumulative-2").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1]);

      $("#cumulative-3").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2]);
    }

    if ($(this).attr('id') === 'roll-4.1') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#cumulative-2").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1]);

      $("#cumulative-3").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2]);

      $("#cumulative-4").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3]);
    }

    if ($(this).attr('id') === 'roll-4.2') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#cumulative-2").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1]);

      $("#cumulative-3").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2]);

      $("#cumulative-4").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3]);
    }

    if ($(this).attr('id') === 'roll-5.1') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#cumulative-3").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2]);

      $("#cumulative-4").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3]);

      $("#cumulative-5").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4]);
    }

    if ($(this).attr('id') === 'roll-5.2') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#cumulative-3").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2]);

      $("#cumulative-4").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3]);

      $("#cumulative-5").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4]);
    }

    if ($(this).attr('id') === 'roll-6.1') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#cumulative-4").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3]);

      $("#cumulative-5").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4]);

      $("#cumulative-6").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5]);
    }

    if ($(this).attr('id') === 'roll-6.2') {
      $(this).hide();
      $(this).parent().html(this.value);
      $("#cumulative-4").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3]);

      $("#cumulative-5").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4]);

      $("#cumulative-6").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5]);
    }

    if ($(this).attr('id') === 'roll-7.1') {
      $(this).hide();
      $(this).parent().html(this.value);

      $("#cumulative-5").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4]);

      $("#cumulative-6").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5]);

      $("#cumulative-7").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6]);
    }

    if ($(this).attr('id') === 'roll-7.2') {
      $(this).hide();
      $(this).parent().html(this.value);

      $("#cumulative-5").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4]);

      $("#cumulative-6").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5]);

      $("#cumulative-7").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6]);
    }

    if ($(this).attr('id') === 'roll-8.1') {
      $(this).hide();
      $(this).parent().html(this.value);

      $("#cumulative-6").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5]);

      $("#cumulative-7").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6]);

      $("#cumulative-8").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6] +
                              game._score._scoreboard[7]);
    }

    if ($(this).attr('id') === 'roll-8.2') {
      $(this).hide();
      $(this).parent().html(this.value);

      $("#cumulative-6").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5]);

      $("#cumulative-7").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6]);

      $("#cumulative-8").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6] +
                              game._score._scoreboard[7]);
    }

    if ($(this).attr('id') === 'roll-9.1') {
      $(this).hide();
      $(this).parent().html(this.value);

      $("#cumulative-7").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6]);

      $("#cumulative-8").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6] +
                              game._score._scoreboard[7])

      $("#cumulative-9").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6] +
                              game._score._scoreboard[7] +
                              game._score._scoreboard[8]);
    }

    if ($(this).attr('id') === 'roll-9.2') {
      $(this).hide();
      $(this).parent().html(this.value);

      $("#cumulative-7").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6]);

      $("#cumulative-8").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6] +
                              game._score._scoreboard[7]);

      $("#cumulative-9").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6] +
                              game._score._scoreboard[7] +
                              game._score._scoreboard[8]);
    }

    if ($(this).attr('id') === 'roll-10.1') {
      $(this).hide();
      $(this).parent().html(this.value);

      $("#cumulative-8").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6] +
                              game._score._scoreboard[7])

      $("#cumulative-9").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6] +
                              game._score._scoreboard[7] +
                              game._score._scoreboard[8]);

      $("#cumulative-10").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6] +
                              game._score._scoreboard[7] +
                              game._score._scoreboard[8] +
                              game._score._scoreboard[9]);
    }

    if ($(this).attr('id') === 'roll-10.2') {
      $(this).hide();
      $(this).parent().html(this.value);

      $("#cumulative-8").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6] +
                              game._score._scoreboard[7]);

      $("#cumulative-9").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6] +
                              game._score._scoreboard[7] +
                              game._score._scoreboard[8]);

      $("#cumulative-10").text(game._score._scoreboard[0] +
                              game._score._scoreboard[1] +
                              game._score._scoreboard[2] +
                              game._score._scoreboard[3] +
                              game._score._scoreboard[4] +
                              game._score._scoreboard[5] +
                              game._score._scoreboard[6] +
                              game._score._scoreboard[7] +
                              game._score._scoreboard[8] +
                              game._score._scoreboard[9]);
    }

    $("#round-1").text(game._score._scoreboard[0]);
    $("#round-2").text(game._score._scoreboard[1]);
    $("#round-3").text(game._score._scoreboard[2]);
    $("#round-4").text(game._score._scoreboard[3]);
    $("#round-5").text(game._score._scoreboard[4]);
    $("#round-6").text(game._score._scoreboard[5]);
    $("#round-7").text(game._score._scoreboard[6]);
    $("#round-8").text(game._score._scoreboard[7]);
    $("#round-9").text(game._score._scoreboard[8]);
    $("#round-10").text(game._score._scoreboard[9]);
  });

});
