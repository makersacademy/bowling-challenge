$(document).ready(function() {

  var game = new Game();
  game.create(Frame);
    
    $('#1').on('click', function() {
      game.frames[0].receiveShot(1);
      updateScoreBoard();
    });

    $('#2').on('click', function() {
      game.frames[1].receiveShot(1);
      updateScoreBoard();
    });

    $('#3').on('click', function() {
      game.frames[2].receiveShot(1);
      updateScoreBoard();
    });

    $('#4').on('click', function() {
      game.frames[3].receiveShot(1);
      updateScoreBoard();
    });

    $('#5').on('click', function() {
      game.frames[4].receiveShot(1);
      updateScoreBoard();
    });

    $('#6').on('click', function() {
      game.frames[5].receiveShot(1);
      updateScoreBoard();
    });

    $('#7').on('click', function() {
      game.frames[6].receiveShot(1);
      updateScoreBoard();
    });

    $('#8').on('click', function() {
      game.frames[7].receiveShot(1);
      updateScoreBoard();
    });

    $('#9').on('click', function() {
      game.frames[8].receiveShot(1);
      updateScoreBoard();
    });

    $('#10').on('click', function() {
      game.frames[9].receiveShot(1);
      updateScoreBoard();
    });

    function updateScoreBoard() {
      for (var i = 0; i < 10; i++) {
        var frame = game.frames[i]
        $('#frame' + (i+1) + 'shot1').text(frame.firstroll);
        if(!frame.isStrike()) $('#frame' + (i+1) + 'shot2').text(frame.secondroll);
        $('#frame' + (i+1) ).text(frame.score);
      };
    };



  });