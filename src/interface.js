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
      updateScore()
      hide(1)
    })

    $('#button2').click(function(){
      game.add(2);
      updateScore()
      hide(2)
    })

    $('#button3').click(function(){
      game.add(3);
      updateScore()
      hide(3)
    })

    $('#button4').click(function(){
      game.add(4);
      updateScore()
      hide(4)
    })

    $('#button5').click(function(){
      game.add(5);
      updateScore()
      hide(5)
    })

    $('#button6').click(function(){
      game.add(6);
      updateScore()
      hide(6)
    })

    $('#button7').click(function(){
      game.add(7);
      updateScore()
      hide(7)
    })

    $('#button8').click(function(){
      game.add(8);
      updateScore()
      hide(8)
    })

    $('#button9').click(function(){
      game.add(9);
      updateScore()
      hide(9)
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
      for (var i = 1; i <= 10; i++) {
        $('#button'+i).show();
      };
    }

    function updateScore(){ 
      $('#score').text("Game score: "+game.score());
      $('#frame').text("Frame: "+game.getFrameNumber());
      $('#last_bowl').text("Last bowl: "+game._bowls[game._bowls.length-1]);
      if (game._frameNumber > 1){
        for (var i = 0; i < game._frameNumber-1; i++) {
          var frame = game._frames[i]
          if (frame.frameComplete == true) {
          $('#bowl'+(i+1)).text("Frame: "+frame.frameBowls+" Framescore: "+game._frames[i].frameScore+" Bonus: "+game._frames[i].frameBonus);
          } else {
          $('#bowl'+(i+1)).text("Frame: "+frame.frameBowls+" Framescore: ");
          }
        }
      }
      if (game._frameMove === 0){
      unhide()
      }

      if (game.isGameOver() === true){
        hide(10)
        $('#button0').hide();
        $('#new_button').show();
      }
    }

});