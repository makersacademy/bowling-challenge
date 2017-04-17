var scores = new Scores();
$( document ).ready(function(){
  var game = new Game();
  var frame = new Frame();

  $('#right').hide();

  $('#new_game').click(function(){
    $('#right').hide();
    game.newGame(frame)
    $('.score1').empty();
    $('.score2').empty();
    $('.score3').empty();
    $('.total').html('')
    $('.scorecard p').html('')
  })

  $('#save').click(function(event){
    event.preventDefault();
    game.get_score(frame)
    scores.save_score(($("#name").val()),game.score)
    $('#scores').append("<br>" + scores.scores.slice(-1)[0][0] + "  ---->  " + scores.scores.slice(-1)[0][1])
  })

  $('#bowl').click(function(){
    game.play(frame)
    $('#right').show();
    $('#right').text("You scored: " + frame.points)
    if (frame.frameScores.length <= 1 && frame.currentFrame.length === 0){
      $('#frame1').find('.score1').text(frame.frameScores[0][0])
      $('#frame1').find('.score2').text(frame.frameScores[0][1]);
      game.get_score(frame)
      $('#frame1').find('.total').append(game.score)
    }
    if (frame.frameScores.length === 2 && frame.currentFrame.length === 0){
      $('#frame2').find('.score1').text(frame.frameScores[1][0])
      $('#frame2').find('.score2').text(frame.frameScores[1][1]);
      game.get_score(frame)
      $('#frame2').find('.total').append(game.score)
    }
    if (frame.frameScores.length === 3 && frame.currentFrame.length === 0){
      $('#frame3').find('.score1').text(frame.frameScores[2][0])
      $('#frame3').find('.score2').text(frame.frameScores[2][1]);
      game.get_score(frame)
      $('#frame3').find('.total').append(game.score)
    }
    if (frame.frameScores.length === 4 && frame.currentFrame.length === 0){
      $('#frame4').find('.score1').text(frame.frameScores[3][0])
      $('#frame4').find('.score2').text(frame.frameScores[3][1]);
      game.get_score(frame)
      $('#frame4').find('.total').append(game.score)
    }
    if (frame.frameScores.length === 5 && frame.currentFrame.length === 0){
      $('#frame5').find('.score1').text(frame.frameScores[4][0])
      $('#frame5').find('.score2').text(frame.frameScores[4][1]);
      game.get_score(frame)
      $('#frame5').find('.total').append(game.score)
    }
    if (frame.frameScores.length === 6 && frame.currentFrame.length === 0){
      $('#frame6').find('.score1').text(frame.frameScores[5][0])
      $('#frame6').find('.score2').text(frame.frameScores[5][1]);
      game.get_score(frame)
      $('#frame6').find('.total').append(game.score)
    }
    if (frame.frameScores.length === 7 && frame.currentFrame.length === 0){
      $('#frame7').find('.score1').text(frame.frameScores[6][0])
      $('#frame7').find('.score2').text(frame.frameScores[6][1]);
      game.get_score(frame)
      $('#frame7').find('.total').append(game.score)
    }
    if (frame.frameScores.length === 8 && frame.currentFrame.length === 0){
      $('#frame8').find('.score1').text(frame.frameScores[7][0])
      $('#frame8').find('.score2').text(frame.frameScores[7][1]);
      game.get_score(frame)
      $('#frame8').find('.total').append(game.score)
    }
    if (frame.frameScores.length === 9 && frame.currentFrame.length === 0){
      $('#frame9').find('.score1').text(frame.frameScores[8][0])
      $('#frame9').find('.score2').text(frame.frameScores[8][1]);
      game.get_score(frame)
      $('#frame9').find('.total').append(game.score)
    }
    if(frame.game_over){
      $('#frame10').find('.score1').text(frame.frameScores[9][0])
      $('#frame10').find('.score2').text(frame.frameScores[9][1])
      $('#frame10').find('.score3').text(frame.frameScores[9][2])
      game.get_score(frame)
      $('#scorecard').append('<p id ="final" class="total">'+game.score+'</p>')
      $('#right').text("Game Over!")
    }

  });

});
