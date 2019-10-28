$(document).ready(function(){
  var game = new Game();

  $('#score').text("Game score: "+game.score());
  $('#frame').text("Frame: "+game._frameNumber);
  $('#last_bowl').text("Last bowl: 0");

    $('#button0').click(function(){
      game.add(0);
      updateScore()
    })

    $('#button1').click(function(){
      game.add(1);
      hide(1)
      updateScore()
    })

    $('#button2').click(function(){
      game.add(2);
      hide(2)
      updateScore()
    })

    $('#button3').click(function(){
      game.add(3);
      hide(3)
      updateScore()
    })

    $('#button4').click(function(){
      game.add(4);
      hide(4)
      updateScore()
    })

    $('#button5').click(function(){
      game.add(5);
      hide(5)
      updateScore()
    })

    $('#button6').click(function(){
      game.add(6);
      hide(6)
      updateScore()
    })

    $('#button7').click(function(){
      game.add(7);
      hide(7)
      updateScore()
    })

    $('#button8').click(function(){
      game.add(8);
      hide(8)
      updateScore()
    })

    $('#button9').click(function(){
      game.add(9);
      hide(9)
      updateScore()
    })

    $('#button10').click(function(){
      game.add(10);
      updateScore()
    })

    $('#new_button').click(function(){
      location.reload(true);
    })

    function hide(number){
      var j = 10 - number
      for (var i = 10; i > j; i--) {
        $('#button'+i).hide();
      };
    }

    function unhide(){
      for (var i = 1; i < 11; i++) {
        $('#button'+i).show();
      };
    }

    function updateScore(){ 
      $('#score').text("Game score: "+game.score());
      $('#frame').text("Frame: "+game._frameNumber);
      $('#last_bowl').text("Last bowl: "+game._bowls[game._bowls.length-1]);

      if (game._frameNumber > 0){
        for (var i = 0; i < game._frameNumber-1; i++) {
          var frame = game._frames[i]
          if (frame.frameComplete === true) {
          $('#bowl'+(i+1)).text(frame.frameBowls)
          $('#bowlScore'+(i+1)).text(game._frames[i].frameScore)
          } else {
          $('#bowl'+(i+1)).text(frame.frameBowls)
          }
        }
      }

      if (game._frameMove === 0){
        unhide()
        }
        else if (game._frameMove === 3 && game._frameNumber === 10){
        unhide()
      }

      if (game._gameOver === true){
        hide(10)
        $('#button0').hide();
        $('#frame').hide();
        $('#new_button').show();
      }
    }

});