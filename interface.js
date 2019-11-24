$(document).ready(function() {
    var game = new Game();
    currentFrame();



    $('#Rolls').on('click', function() {
      game.roll()
      noOfRolls()
    }


    $('#displayCurrentFrame').on('click', function() {
        game.roll();

        currentFrame();
      });

    $('#roll').on('click', function() {
      game.roll()
      game.roll()
    }



    

    function currentFrame() {
        $('#currentFrame').text(game._currentFrame);
      };

    function noOfRolls() {
        $('#noOfRolls').text(game._noOfRolls);
      };

      function Roll() {
        $('#rollBowl').text(game.roll())
      };

});