$(document).ready( function() {
  var game = new Game();
  var pins;

    $("select.pins").change( function() {
      pins = $(this).children("option:selected").val();
    });

    $('#submit').click( function() {
      var roll = game.roll;
      var frame = game.currentFrame;
      var previousFrame = game.currentFrame - 1;
      pins = pins || 0;
      $('#f' + frame +'r'+ roll).text(pins);
      game.calculateFramePoints(pins);

      $('#f' + frame).text(game.frameScores[game.currentFrame]);

      game.updateFrames();

      $('#f' + previousFrame).text(game.frameScores[previousFrame]);
      $('#totalscore').text(game.total());

      removeDropDownList();
    });

    function removeDropDownList() {
      if (game.bonus[game.currentFrame - 1] === null) {
        if (game.currentFrame > 10) {
          $('#pin-selection').text('You finished the game');
        }
      }
      else {
        if (game.currentFrame > 11) {
          $('#pin-selection').text('You finished the game');
        }
      }
    };

});
