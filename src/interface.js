$(document).ready(function() {
  var game = new Game();

  $('#total_score').text(game.calculateScore());

  $('#zero').on('click', function() {
    submitSkittles('#zero');
  });

  $('#one').on('click', function() {
    submitSkittles('#one');
  });

  $('#two').on('click', function() {
    submitSkittles('#two');
  });

  $('#three').on('click', function() {
    submitSkittles('#three');
  });

  $('#four').on('click', function() {
    submitSkittles('#four');
  });

  $('#five').on('click', function() {
    submitSkittles('#five');
  });

  $('#six').on('click', function() {
    submitSkittles('#six');
  });

  $('#seven').on('click', function() {
    submitSkittles('#seven');
  });

  $('#eight').on('click', function() {
    submitSkittles('#eight');
  });

  $('#nine').on('click', function() {
    submitSkittles('#nine');
  });

  $('#ten').on('click', function() {
    submitSkittles('#ten');
  });

  function submitSkittles(number) {
    var score = +($(number).text());
    game.bowl(score);
    updateScore();
    addTurnToView(score);
    addTotalScoreToView();
  }

  function updateScore() {
    $('#total_score').text(game.calculateScore());
  }

  function addTotalScoreToView() {
    if (game.isOver()) {
      $('#frame_10').text(game.calculateScore());
    }
    else if (game.frameNumber>1 && game.frameNumber <= 10) {
        $('#frame_' + (game.frameNumber-1)).text(game.calculateScore());
      }
  }

  function addTurnToView(score) {
    var firstBowl, secondBowl
    game.defineLastFrames();
    if (game.frameNumber === 10 && game.currentFrame.turnNumber === 2) {
      $( "ol li .turn_2" ).eq( (10) ).text(game.currentFrame.turn[1]);
    }
    else if (game.lastFrame.isStrike && game.currentFrame.shot ===0) {
      firstBowl = $( "ol li .turn_1" ).eq( (game.frameNumber-2) );
      firstBowl.text(game.lastFrame.turn[0]);
    }
    else if (game.currentFrame.turn.length === 1) {
      firstBowl = $( "ol li .turn_1" ).eq( (game.frameNumber-1) );
      firstBowl.text(game.currentFrame.turn[0]);
    } else {
      secondBowl = $( "ol li .turn_2" ).eq( game.frameNumber-2 );
      secondBowl.text(game.lastFrame.turn[1]);
    }

  }

  // if (game.frameNumber>1 && game.frameNumber < 11) {
  //   for (i = 1; i<game.frameNumber; i++) {
  //     $('#frame_' + i).text(game.scoreOfFrame(i));
  //   }
  //   if (game.isOver()) {
  //     $('#frame_10').text(game.scoreOfFrame(10));
  //   }
  // }














});
