
$ (document).ready(function() {
    var game = new Game();

   


    $('#displayCurrentFrame').on('click', function() {
        game.roll();
        currentFrame();
      });

    $('#roll').on('click', function() {
      game.roll()
      game.strikeOrSpare()
      game.add()
      
      game.bonus()

      game.changeFrame()

      currentFrame()
      noOfRolls()
      pinsDropped()

      isStrike()
      isSpare()
      frameScore()

      

    });

    
    $('#Frame').on('click', function(){
      game.changeFrame()
      currentFrame()
    });
    

    $('#Reset').on('click', function(){
      game.reset()
      noOfRolls()
      isSpare()
      isStrike()
      frameScore()
      pinsDropped()


    });

    $('#totalScore').on('click', function(){
      game.score()
      totalScore()
    });

    


    // $('#bowl').on('click', function(){
    //   Roll()
    // });

    // $('#frameScore').on('click', function(){
    //   // game.roll()
    //   game.add()
    //   frameScore()
    // });

    // $('#isAStrike').on('click', function(){
    //   game.strikeOrSpare()
    //   isStrike()
    // });
    
    // $('#isASpare').on('click', function(){
    //   game.strikeOrSpare()
    //   isSpare()
    // });

    // $('#pinsD').on('click', function(){
    //   game.roll()
    //   pinsDropped()
    // });





    function currentFrame() {
        $('#currentFrame').text(game._frame);
      };

    function noOfRolls() {
        $('#noOfRolls').text(game._noOfRolls);
      };

    function Roll() {
        $('#rollBowl').text(game.roll())
      };

      function add() {
        $('#addScore').text(game.add())
      }

    function frameScore() {
        $('#fScore').text(game._frameScore)
      };
    
    function isStrike() {
      $('#strike').text(game._isStrike)
    };

    function isSpare() {
      $('#spare').text(game._isSpare)
    };

    function pinsDropped() {
      $('#pinsDropped').text(game._pinsKnockedDown)
    };

    function Reset() {
      $('#resetAll').text(game._reset)
    }

    function totalScore() {
      $('#total').text(game._totalScore)
    }

});