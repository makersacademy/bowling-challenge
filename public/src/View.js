$(document).ready(function(){
  var game = new Game;
  
  $('#i1').click(function (event) { 
    event.preventDefault();
    var score1 = $('.f1i1').val();
    var score2 = $('.f1i2').val();
    game.input(score1, score2);
    updateTotalScore();
  });

  $('#i2').click(function (event) { 
    event.preventDefault();
    var score1 = $('.f2i1').val();
    var score2 = $('.f2i2').val();
    game.input(score1, score2);
    updateTotalScore();
  });

  $('#i3').click(function (event) { 
    event.preventDefault();
    var score1 = $('.f3i1').val();
    var score2 = $('.f3i2').val();
    game.input(score1, score2);
    updateTotalScore();
  });

  $('#i4').click(function (event) { 
    event.preventDefault();
    var score1 = $('.f4i1').val();
    var score2 = $('.f4i2').val();
    game.input(score1, score2);
    updateTotalScore();
  });

  $('#i5').click(function (event) { 
    event.preventDefault();
    var score1 = $('.f5i1').val();
    var score2 = $('.f5i2').val();
    game.input(score1, score2);
    updateTotalScore();
  });

  $('#i6').click(function (event) { 
    event.preventDefault();
    var score1 = $('.f6i1').val();
    var score2 = $('.f6i2').val();
    game.input(score1, score2);
    updateTotalScore();
  });

  $('#i7').click(function (event) { 
    event.preventDefault();
    var score1 = $('.f7i1').val();
    var score2 = $('.f7i2').val();
    game.input(score1, score2);
    updateTotalScore();
  });

  $('#i8').click(function (event) { 
    event.preventDefault();
    var score1 = $('.f8i1').val();
    var score2 = $('.f8i2').val();
    game.input(score1, score2);
    updateTotalScore();
  });

  $('#i9').click(function (event) { 
    event.preventDefault();
    var score1 = $('.f9i1').val();
    var score2 = $('.f9i2').val();
    game.input(score1, score2);
    updateTotalScore();
  });

  $('#i10').click(function (event) { 
    event.preventDefault();
    var score1 = $('.f10i1').val();
    var score2 = $('.f10i2').val();
    var score3 = $('.f10i3').val();
    game.input(score1, score2, score3);
    updateTotalScore();
    congratulations();
    uhOh();
  });

  $('#reset').click(function (event) {
    location.reload();
  });
  
  function congratulations() {
    if (game.isPerfectGame()) {
      $('#announcement').text('You got a perfect game yay!')
    }
  }

  function uhOh() {
    if (game.isGutterGame()) {
      $('#announcement').text('Sorry that was a gutter game...')
    }
  }

  function updateTotalScore() {
    $('.totalscore').text(game.getCurrentScore());
  };
});