$(document).ready( function() {
  const game = new Game();
  let rollNumber = 0;
  let roll1;

  $('button').on('click', function(e) {
    roll = parseInt(e.target.innerHTML, 10);
    rollNumber += 1;

    //   to disable button  $("#btn").attr("disabled", true);
    if ((rollNumber%2)==0) {
      const frame = new Frame(roll1, roll);
      try {
        game.play(frame);
        updateTable();
      } catch (err) {
        alert(err.message);
      }
      if (game.round < 10) {
        rollNumber = 0;
      } else if (game.round == 10) {
        roll2 = roll;
      }
    } else if (rollNumber==3) {
      roll3 = roll;
    } else {
      roll1 = roll;
    }
  });

  function updateTable() {
    const round = game.round;
    let roll3 = 0;
    if (round == 10) {
      roll3 = game.frames[9].roll3;
    }
    $('#frame-table')
        .append($('<tr>')
            .append($('<td>')
                .text(game.round))
            .append($('<td>')
                .text(game.frames[round-1].roll1))
            .append($('<td>')
                .text(game.frames[round-1].roll2))
            .append($('<td>')
                .text(roll3),
            ),
        );
    // append($('.frame').append($('.frame-num').text(game.round)).append($('.roll1').text(game.frames[round-1].roll1)).append($('.roll2').text(game.frames[round-1].roll2)).append($('.roll3').text(roll3)));
    $('#score').text(game.score);
  }
});


