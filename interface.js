$(document).ready(function(){
  var game = new Game();
  $('#frameCount').text(game.frameCount);
  updateFrameCount();

  $(function () {
        $('#rackUp').click(function () {
          game.rackUp();
            if ($(this.rack).val() == false) {
                $('.ROLL_1').prop('disabled', true);
            } else {
                $('.ROLL_1').prop('disabled', false);
            }
        });
    });

  $('#roll_1').click(function(){
    game.roll_1();
    $('#firstScore').text(game.firstScore);
    updateFrameCount();
  });

  $('#pinSweep').click(function(){
    game.pinSweep();
    updateFrameCount();
  });

  $('#roll_2').click(function(){
    game.roll_2();
    $('#secondScore').text(game.secondScore);
    updateFrameCount();
  });

  function updateFrameCount(){
    $('#frameCount').text(game.frameCount);
  };

  $('#currentScore').click(function(){
    game.currentScore();
    $('#score').text(game.score);
  });

  });
