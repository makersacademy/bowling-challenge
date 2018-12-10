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
      console.log('frame no before update:' + game.currentFrame);
      console.log('roll before update:' + game.roll);

      $('#f' + frame).text(game.frameScores[game.currentFrame]);

      game.updateFrames();
      // console.log('frame no after update:' + game.currentFrame);
      // console.log('roll after update:' + game.roll);
      // console.log('frame points:' + game.getFramePoints());
      // console.log('array:' + game.frameScores);
      //
      // console.log('previousFrame:' + previousFrame);
      // console.log('previousFrame score:' + game.frameScores[previousFrame]);
      $('#f' + previousFrame).text(game.frameScores[previousFrame]);
      $('#totalscore').text(game.total());

      // console.log('bonus array' + game.bonus);
      // console.log('bonus previousFrame ' + game.bonus[game.currentFrame - 1] );
      // console.log('frame: ' + game.currentFrame);
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
