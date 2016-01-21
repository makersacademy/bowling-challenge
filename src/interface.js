$(document).ready(function() {

  var game = new Game();
  setInterface();
  refreshInfo();
  controlButtonsHandler();

  function setInterface() {
    for (var i = 0; i <= game.defaults.pins; i++) {
      $('#controls').append(
        '<button id="roll'+ i +'" class="btn btn-default" data-value="'+ i +
        '">'+ i +'</button>');
    }
    $('#controls').append('<button class="btn btn-default">?</button>');
    $('#table-body').html('');
    for (var i = 1; i < game.gameFrames; i++) {
      var color = i % 2 === 0 ? 'white' : 'grey';
      $('#table-body').append('<tr class="'+color+'"><td>'+ i +'</td><td>'+ 1 +
      '</td><td id="frame'+ i +'-roll1"></td><td></td></tr>');
      $('#table-body').append('<tr class="'+color+'"><td>'+ i +'</td><td>'+ 2 +
      '</td><td id="frame'+ i +'-roll2"></td><td id="frame'+ i +

      '-framescore"></td></tr>');
    }
    $('#table-body').append('<tr><td>'+ game.gameFrames +'</td><td>'+ 1 +
    '</td><td id="frame'+ game.gameFrames +'-roll1"></td><td></td></tr>');
    $('#table-body').append('<tr><td>'+ game.gameFrames +'</td><td>'+ 2 +
    '</td><td id="frame'+ game.gameFrames +'-roll2"></td><td></td></tr>');
    $('#table-body').append('<tr><td>'+ game.gameFrames +'</td><td>'+ 3 +
    '</td><td id="frame'+ game.gameFrames +'-roll3"></td><td id="frame'+
    game.gameFrames +'-framescore"></td></tr>');
  }

  function refreshInfo() {
    $('#currentframe').text('Current frame: ' + game.currentFrameNumber());
    $('#totalscore').text('Total score: ' + game.score());
  }

  function refreshTable() {
    for (var i = 1; i <= game.currentFrameNumber(); i++) {
      var frame = game.frames[i-1];
      if (frame.rollPlayed() > 0) {
        $('#frame'+ i +'-roll1').text(frame.rollScores[0]);
        $('#frame'+ i +'-framescore').text(frame.totalScore());
      }
      if (frame.rollPlayed() > 1) {
        $('#frame'+ i +'-roll2').text(frame.rollScores[1]);
      }
      if (frame.rollPlayed() > 2) {
        $('#frame'+ i +'-roll3').text(frame.rollScores[2]);
      }
    }
  }

  function refreshButtons() {
    for (var i = 1; i <= game.defaults.pins; i++) {
      if (i > game.lane.pinsUp) { $('#roll' + i).attr('disabled', true); }
      else { $('#roll' + i).attr('disabled', false); }
    }
  }

  function gameOver() {
    if(game.isOver()) {
      $('#currentframe').text('Game Over');
      $('#controls').html('');
      $('.jumbotron').append(
        '<button id="play-again" class="btn btn-default">Play Again</button>'
      );
      playAgainHandler();
    }
  }

  function controlButtonsHandler() {
    $('#controls button').click(function() {
      game.roll($(this).data('value'));
      refreshInfo();
      refreshTable();
      refreshButtons();
      gameOver();
    });
  }

  function playAgainHandler() {
    $('#play-again').click(function() {
      game = new Game();
      setInterface();
      refreshInfo();
      controlButtonsHandler();
      $(this).remove();
    });
  }

 });
