var game = new BowlingScorer();

  $('#score0').on('click', function() {
      game.roll(0);
      showAll();
  })

  $('#score1').on('click', function() {
    game.roll(1);
    if (game._scoreCard.length % 2 != 0) {
        $('#score10').hide();
    } else {
        showAll();
    }
  })

  $('#score2').on('click', function() {
    game.roll(2);
    if (game._scoreCard.length % 2 != 0) {
        $('#score9').hide();
        $('#score10').hide();
    } else {
        showAll();
    }
  })

  $('#score3').on('click', function() {
    game.roll(3);
    if (game._scoreCard.length % 2 != 0) {
        $('#score8').hide();
        $('#score9').hide();
        $('#score10').hide();
    } else {
        showAll();
    }
  })

  $('#score4').on('click', function() {
    game.roll(4);
    if (game._scoreCard.length % 2 != 0) {
        $('#score7').hide();
        $('#score8').hide();
        $('#score9').hide();
        $('#score10').hide();
    } else {
        showAll();
    }
  })

  $('#score5').on('click', function() {
    game.roll(5);
    if (game._scoreCard.length % 2 != 0) {
        $('#score6').hide();
        $('#score7').hide();
        $('#score8').hide();
        $('#score9').hide();
        $('#score10').hide();
    } else {
        showAll();
    }
  })

  $('#score6').on('click', function() {
    game.roll(6);
    if (game._scoreCard.length % 2 != 0) {
        $('#score5').hide();
        $('#score6').hide();
        $('#score7').hide();
        $('#score8').hide();
        $('#score9').hide();
        $('#score10').hide();
    } else {
        showAll();
    }
  })

  $('#score7').on('click', function() {
    game.roll(7);
    if (game._scoreCard.length % 2 != 0) {
        $('#score4').hide();
        $('#score5').hide();
        $('#score6').hide();
        $('#score7').hide();
        $('#score8').hide();
        $('#score9').hide();
        $('#score10').hide();
    } else {
        showAll();
    }
  })

  $('#score8').on('click', function() {
    game.roll(8);
    if (game._scoreCard.length % 2 != 0) {
        $('#score3').hide();
        $('#score4').hide();
        $('#score5').hide();
        $('#score6').hide();
        $('#score7').hide();
        $('#score8').hide();
        $('#score9').hide();
        $('#score10').hide();
    } else {
        showAll();
    }
  })

  $('#score9').on('click', function() {
    game.roll(9);
    if (game._scoreCard.length % 2 != 0) {
        $('#score2').hide();
        $('#score3').hide();
        $('#score4').hide();
        $('#score5').hide();
        $('#score6').hide();
        $('#score7').hide();
        $('#score8').hide();
        $('#score9').hide();
        $('#score10').hide();
    } else {
        showAll();
    }
  })



function disableAll() {
  $("#score0").attr("disabled", true);
  $("#score1").attr("disabled", true);
  $("#score2").attr("disabled", true);
  $("#score3").attr("disabled", true);
  $("#score4").attr("disabled", true);
  $("#score5").attr("disabled", true);
  $("#score6").attr("disabled", true);
  $("#score7").attr("disabled", true);
  $("#score8").attr("disabled", true);
  $("#score9").attr("disabled", true);
  $("#score10").attr("disabled", true);
}

function showAll() {
    $('#score0').show();
    $('#score1').show();
    $('#score2').show();
    $('#score3').show();
    $('#score4').show();
    $('#score5').show();
    $('#score6').show();
    $('#score7').show();
    $('#score8').show();
    $('#score9').show();
    $('#score10').show();
}
