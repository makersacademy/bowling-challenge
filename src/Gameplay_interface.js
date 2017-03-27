$(document).ready(function() {

  var game = new Game();
  // assign default song value to variable
  var audio = 'docs/DVCHD_1372/DVCHD_1372-1-1.mp3';

  // assign audio source on page load
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'http://acerecords.co.uk/' + audio);
  // updates audio variable on button click
  $(".tune").click(function() {
    var audio = this.value
    audioElement.setAttribute('src', 'http://acerecords.co.uk/' + audio);
  })
  // prevents audio repetition
  audioElement.addEventListener('ended', function() {
    // this.play();
  }, false);

  // game play
  $('#bowl-btn').click(function() {
      (isGameOver()) ? alert("Game Over") : animateBowl();
  });

function isGameOver() {
  return (game.frames.length >= 10);
}

function animateBowl() {
  game.bowl();
  // removeStatus();
  moveBall();
  audioElement.play();
  updateScorecard();
  if (game.frameInPlay === false) {
    sumFrame();
  };
}

function sumFrame() {
  frame = game.frames[game.frames.length - 1];
  total = (frame[0] + frame[1]);
  html = '<td colspan="2" style="border:1px solid black">' + total + '</td>';
  $('#frames').append(html);
};

  // animates bowling ball per play
  function moveBall() {
    $('.loader').animate({left: '800px'}, "slow");
    $('.shadow').css('display', 'none');
    $('.loader').animate({left: '-800px'},"slow");
  }

  // slides in scorecard
  $('#scores-btn').click(function() {
    $('#scorecard-inner').animate({left: '-15px'})
  });

  // slides out scorecard
  $('#scores-back-btn').click(function() {
    $('#scorecard-inner').animate({left: '-100%'})
  });

  // slides in jukebox
  $('#music-btn').click(function() {
    $('#music-inner').animate({right: '-15px'})
  });

  // slides out jukebox
  $('#music-back-btn').click(function() {
    $('#music-inner').animate({right: '-100%'})
  });

  function updateScorecard() {

    if (game.currentResult === 10) {
      $('.number').text('STRIKE!').css({'animation': 'flying .75s 1'});
      html = '<td>' + game.currentResult + '</td><td> X </td>';
    } else {
      html = '<td>' + game.currentResult + '</td>';
    }
    $('#body').append(html);
  };

  $('#sumScore').click(function() {
    game.sumFrames();
    $('.showScoreTotal').text(game.calculateScore());
  });

});
