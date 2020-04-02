$( document ).ready(function() {

  // will probably make a game object that stores these values
  let game;
  let scoreboard;
  let score;

  $( '.scoreboard').hide();
  $( '.btn-startGame' ).hide();
  $( '.playing').hide();

  $( '.btn-newGame' ).on('click', function() {
    game = new Game;
    // scoreboard = new ScoreBoard;
    // scoreboard.newBoard();
    $( '.scoreboard-table' ).empty();
    $( '.scoreboard-table' ).html("<tr><th>Player Names</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th>10</th></tr>")
    addPlayerToScoreboard();
    $( '.scoreboard').show();
    $( '.btn-startGame' ).show();
    $( '.playing').hide();
  });

  $( '.scoreboard-table' ).on('click', '.addPlayer', function() {
      addPlayerToScoreboard();
  });

  $( '.btn-startGame' ).on('click', function() {
    $( '.btn-startGame' ).hide();
    $( '.playing').show();
    $( '.playerNameForm' ).each(function(i) {
      game.updatePlayersList($(this).val());
      $(this).parent().parent().addClass('player' + i );
      $(this).parent().html($(this).val());
    });
    game.updateCurrentPlayer();
    $( '.msg-playersTurn' ).html("It's " + game.currentPlayer + "'s turn!")
    $( '.msg-rollNum' ).html("Roll " + game.roll);
    updatePinButtons();
  });

  $( '.pinButtons' ).on('click', '.Pins', function() {
    updateScoreboard(parseInt($(this).val()));
    if (game.isOver()) {
      $( '.msg-playersTurn' ).hide();
      $( '.msg-rollNum' ).hide();
      $( '.pinButtons' ).hide();
      $( '.msg-gameOver' ).html("Game Over!")
    }
    game.turn();
    game.updateCurrentPlayer();
    $( '.msg-playersTurn' ).html("It's " + game.currentPlayer + "'s turn!")
    updatePinButtons();
    $( '.msg-rollNum' ).html(messageRollNumber());
  });

  function addPlayerToScoreboard() {
    $( '.scoreboard-table')
      .append($('<tr>')
        .append($('<td>')
          .append("<input type='text' class='playerNameForm' placeholder='Enter name'>")
        )
        .append($('<td>').append("<div class='frame1' ><div></div><div class='Roll1'></div><div class='Roll2'></div><div class='Total'></div></div>"))
        .append($('<td>').append("<div class='frame2' ><div></div><div class='Roll1'></div><div class='Roll2'></div><div class='Total'></div></div>"))
        .append($('<td>').append("<div class='frame3' ><div></div><div class='Roll1'></div><div class='Roll2'></div><div class='Total'></div></div>"))
        .append($('<td>').append("<div class='frame4' ><div></div><div class='Roll1'></div><div class='Roll2'></div><div class='Total'></div></div>"))
        .append($('<td>').append("<div class='frame5' ><div></div><div class='Roll1'></div><div class='Roll2'></div><div class='Total'></div></div>"))
        .append($('<td>').append("<div class='frame6' ><div></div><div class='Roll1'></div><div class='Roll2'></div><div class='Total'></div></div>"))
        .append($('<td>').append("<div class='frame7' ><div></div><div class='Roll1'></div><div class='Roll2'></div><div class='Total'></div></div>"))
        .append($('<td>').append("<div class='frame8' ><div></div><div class='Roll1'></div><div class='Roll2'></div><div class='Total'></div></div>"))
        .append($('<td>').append("<div class='frame9' ><div></div><div class='Roll1'></div><div class='Roll2'></div><div class='Total'></div></div>"))
        .append($('<td>').append("<div class='frame10' ><div class='Roll1'></div><div class='Roll2'></div><div class='Roll3'></div><div class='Total'></div></div>"))
        .append($('<td>').append("<button class='addPlayer'>+</button><button>-</button>"))
    );
  };

  function updatePinButtons() {
    pinsLeft = 10 - game.players[game.playerIdx].scoreboard.frames[game.frame -1].roll_1;
    $( '.pinButtons' ).empty();
    for (i = 0; i <= pinsLeft; i++) {
      $( '.pinButtons' ).append("<button class='Pins' value=" + i + " >" + ((i == 0) ? 'Gutter' : i) + "</button>")
    };
  }

  function updateScoreboard(pins) {
    game.players[game.playerIdx].scoreboard.frames[game.frame-1].roll(game.roll, pins);
    game.players[game.playerIdx].scoreboard.update();
    if (game.frame < 10) {
      updateFrames1to9Scoreboard();
    } else {
      updateFrame10Scoreboard();
    };
    for (i = 1; i <= Math.min(game.frame,10) ; i++) {
      $( '.player' + game.playerIdx )
        .find( '.frame' + i )
          .find('.Total')
            .html(game.players[game.playerIdx].scoreboard.score[i-1]);
    };
  };

  function updateFrames1to9Scoreboard(pins) {
    if (game.roll == 1)
    {
      if (game.players[game.playerIdx].scoreboard.frames[game.frame-1].strike) {
        score = 'X'
        // if (game.frame < 10) {
        $( '.player' + game.playerIdx ).find('.frame' + game.frame).find('.Roll2').html('-');
        game.turn();
        // if (game.frame == 10 ) {
        //   // do players next 2 rolls
        // };
      } else { score = game.players[game.playerIdx].scoreboard.frames[game.frame-1].roll_1 };
      $( '.player' + game.playerIdx ).find( '.frame' + game.frame ).find('.Roll1').html(score);
    } else {
      (game.players[game.playerIdx].scoreboard.frames[game.frame-1].spare) ? score = '/' : score = game.players[game.playerIdx].scoreboard.frames[game.frame-1].roll_2
      $( '.player' + game.playerIdx ).find( '.frame' + game.frame ).find('.Roll2').html(score);
    };
  };

  function updateFrame10Scoreboard() {
    //roll 3
    if (game.frame == 12 && game.roll == 1) {
      if (game.players[game.playerIdx].scoreboard.frames[game.frame-1].strike) {
        score = 'X';
      }  else { score = game.players[game.playerIdx].scoreboard.frames[game.frame-1].roll_1 };
      $( '.player' + game.playerIdx ).find( '.frame10' ).find('.Roll3').html(score);
      game.roll = 2;
      game.specialTurn = false;
      game.players[game.playerIdx].finished = true;
    };
    if (game.frame == 11 && game.roll == 2) {
      score = game.players[game.playerIdx].scoreboard.frames[game.frame-1].roll_2;
      $( '.player' + game.playerIdx ).find( '.frame10' ).find('.Roll3').html(score);
      game.specialTurn = false;
      game.players[game.playerIdx].finished = true;
    };
    if (game.frame == 11 && game.roll == 1) {
      if (game.players[game.playerIdx].scoreboard.frames[game.frame-1].strike) {
        score ='X';
      } else {
        score = game.players[game.playerIdx].scoreboard.frames[game.frame-1].roll_1
      };
      if (game.players[game.playerIdx].scoreboard.frames[9].strike) {
        game.specialTurn = true;
        $( '.player' + game.playerIdx ).find( '.frame10' ).find('.Roll2').html(score);
        if (game.players[game.playerIdx].scoreboard.frames[game.frame-1].strike) {
          game.frame = 12;
          game.roll = 1;
        } else {
          game.frame = 11;
          game.roll = 2;
        }
      } else {
        game.specialTurn = false;
        game.players[game.playerIdx].finished = true;
        $( '.player' + game.playerIdx ).find( '.frame10' ).find('.Roll3').html(score);
      };
      // if (game.players[game.playerIdx].scoreboard.frames[game.frame-1].strike) {
      //   score = 'X';
      //   game.specialTurn = true;
      //   game.frame = 12;
      //   game.roll = 1;
      //   $( '.player' + game.playerIdx ).find( '.frame10' ).find('.Roll2').html(score);
      // }  else {
      //   score = game.players[game.playerIdx].scoreboard.frames[game.frame-1].roll_1
      // };
      // if (game.players[game.playerIdx].scoreboard.frames[9].strike) {
      //   $( '.player' + game.playerIdx ).find( '.frame10' ).find('.Roll2').html(score);
      //   game.roll = 2;
      // } else {
      //   $( '.player' + game.playerIdx ).find( '.frame10' ).find('.Roll3').html(score);
      //   game.roll = 2;
      //   game.specialTurn = false;
      //   game.players[game.playerIdx].finished = true;
      // };
    };
    //roll 1
    if (game.frame == 10 && game.roll == 1) {
      if (game.players[game.playerIdx].scoreboard.frames[game.frame-1].strike) {
        score = 'X';
        game.specialTurn = true;
        game.frame = 11;
        game.roll = 1;
      }  else { score = game.players[game.playerIdx].scoreboard.frames[game.frame-1].roll_1 };
      $( '.player' + game.playerIdx ).find( '.frame10' ).find('.Roll1').html(score);
    };
    //roll 2
    if (game.frame == 10 && game.roll == 2) {
      if (game.players[game.playerIdx].scoreboard.frames[game.frame-1].spare) {
        score = '/';
        game.specialTurn = true;
        game.frame = 11;
        game.roll = 1;
      }  else {
        score = game.players[game.playerIdx].scoreboard.frames[game.frame-1].roll_2;
        game.specialTurn = false;
        game.players[game.playerIdx].finished = true;
      };
      $( '.player' + game.playerIdx ).find( '.frame10' ).find('.Roll2').html(score);
    };

    // if (game.frame == 10 && !game.players[game.playerIdx].scoreboard.frames[game.frame-1].spare) {
    //   if (game.players.length - 1 == game.playerIdx) {game.inPlay = false};
    // };
    // (game.players[game.playerIdx].scoreboard.frames[game.frame-1].roll_1 == 10) ? score = 'X' : score = game.players[game.playerIdx].scoreboard.frames[game.frame-1].roll_1;
    // if (game.frame == 11) {
    //   if (game.players[game.playerIdx].scoreboard.frames[9].spare) {
    //     $( '.player' + game.playerIdx ).find( '.frame10' ).find('.Roll3').html(score);
    //     if (game.players.length - 1 == game.playerIdx) {game.inPlay = false};
    //   };
    //   if (game.players[game.playerIdx].scoreboard.frames[9].strike) {
    //     $( '.player' + game.playerIdx ).find( '.frame10' ).find('.Roll2').html(score);
    //     game.turn();
    //   };
    // };
    // if (game.frame == 12) {
    //   $( '.player' + game.playerIdx ).find( '.frame10' ).find('.Roll3').html(score);
    //   if (game.players.length - 1 == game.playerIdx) {game.inPlay = false};
    // };
  };

  function messageRollNumber() {
    if (game.frame <= 10) {
     return "Roll " + game.roll
   };
    if (game.frame == 11 && game.players[game.playerIdx].scoreboard.frames[9].spare) {
      return "Roll 3"
    };
    if (game.frame == 11 && game.players[game.playerIdx].scoreboard.frames[9].strike && game.roll == 1) {
      return "Roll 2"
    };
    if (game.frame == 11 && game.players[game.playerIdx].scoreboard.frames[9].strike && game.roll == 2) {
      return "Roll 3"
    };
    if (game.frame == 12) {
      return "Roll 3"
    };
  }
});
