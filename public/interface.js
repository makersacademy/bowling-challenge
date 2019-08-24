$(document).ready(function() {
  var game = new Game();

  $('#zero').click(function(){
    game.shot(0)
    game.score()
    rollTheBall()
    populateScoreCardThrows();
    populateScoreCardFrames()
  });

  $('#one').click(function(){
    game.shot(1)
    game.score()
    populateScoreCardThrows();
    populateScoreCardFrames()
   });

  $('#two').click(function(){
    game.shot(2)
    game.score()
    populateScoreCardThrows();
    populateScoreCardFrames()
  });

  $('#three').click(function(){
     game.shot(3);
     game.score()

     populateScoreCardThrows();
     populateScoreCardFrames()

   });

  $('#four').click(function(){
    game.shot(4);
    game.score()

    populateScoreCardThrows();
    populateScoreCardFrames()

  });

  $('#five').click(function(){
     game.shot(5);
     game.score()

     populateScoreCardThrows();
     populateScoreCardFrames()

   });

  $('#six').click(function(){
    game.shot(6);
    game.score()

    populateScoreCardThrows();
    populateScoreCardFrames()

  });

  $('#seven').click(function(){
    game.shot(7);
    game.score()

    populateScoreCardThrows();
    populateScoreCardFrames()

  });

  $('#eight').click(function(){
    game.shot(8);
    game.score()

    populateScoreCardThrows();
    populateScoreCardFrames()

  });

  $('#nine').click(function(){
    game.shot(9);
    game.score()

    populateScoreCardThrows();
    populateScoreCardFrames()

  });

  $('#ten').click(function(){
    game.shot(10);
    game.score()

    populateScoreCardThrows();
    populateScoreCardFrames()
    perfectGame()


  });

  $('#bowling_button').click(function(){
    game.playAgain()
    populateScoreCardThrows();
    populateScoreCardFrames()
    perfectGame()

  });

  function rollTheBall(){
    $("bowling_button").animate({left: '250px', borderWidth: "10px"});
  console.log('pressed')
  }


  function populateScoreCardThrows(){
    $('#edit-frame1-1').attr('value', game.throwScore(1))
    $('#edit-frame1-2').attr('value', game.throwScore(2))
    $('#edit-frame2-1').attr('value', game.throwScore(3))
    $('#edit-frame2-2').attr('value', game.throwScore(4))
    $('#edit-frame3-1').attr('value', game.throwScore(5))
    $('#edit-frame3-2').attr('value', game.throwScore(6))
    $('#edit-frame4-1').attr('value', game.throwScore(7))
    $('#edit-frame4-2').attr('value', game.throwScore(8))
    $('#edit-frame5-1').attr('value', game.throwScore(9))
    $('#edit-frame5-2').attr('value', game.throwScore(10))
    $('#edit-frame6-1').attr('value', game.throwScore(11))
    $('#edit-frame6-2').attr('value', game.throwScore(12))
    $('#edit-frame7-1').attr('value', game.throwScore(13))
    $('#edit-frame7-2').attr('value', game.throwScore(14))
    $('#edit-frame8-1').attr('value', game.throwScore(15))
    $('#edit-frame8-2').attr('value', game.throwScore(16))
    $('#edit-frame9-1').attr('value', game.throwScore(17))
    $('#edit-frame9-2').attr('value', game.throwScore(18))
    $('#edit-frame10-1').attr('value', game.throwScore(19))
    $('#edit-frame10-2').attr('value', game.throwScore(20))
    $('#edit-frame10-3').attr('value', game.throwScore(21))
  }

  function populateScoreCardFrames(){
    $('#edit-frame1-res').attr('value', game.getFrameScore(1))
    $('#edit-frame2-res').attr('value', game.getFrameScore(2))
    $('#edit-frame3-res').attr('value', game.getFrameScore(3))
    $('#edit-frame4-res').attr('value', game.getFrameScore(4))
    $('#edit-frame5-res').attr('value', game.getFrameScore(5))
    $('#edit-frame6-res').attr('value', game.getFrameScore(6))
    $('#edit-frame7-res').attr('value', game.getFrameScore(7))
    $('#edit-frame8-res').attr('value', game.getFrameScore(8))
    $('#edit-frame9-res').attr('value', game.getFrameScore(9))
    $('#edit-frame10-res').attr('value', game.getFrameScore(10))
    $('#edit-game-result').attr('value', game.score())

  }

   function ongoingTotal(){
     $('#total').text(game.score())
     game.score()
   }

   function perfectGame(){
     if (game.score() == 300){
       $('#perfect-game').css('display', "block")
     } else{
       $('#perfect-game').css('display', "none")
     }
   }


 });
