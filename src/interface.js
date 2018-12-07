$(document).ready( function() {

  var game = new Game();
  var pins;

    $("select.pins").change( function() {
      pins = $(this).children("option:selected").val();
    });

    $('#submit').click( function() {
      var roll = game.roll;
      var frame = game.currentFrame;
      $('#f' + frame +'r'+ roll).text(pins);
      game.calculateFramePoints(pins);
      console.log('Pins:' + pins);
      console.log('frame no before update:' + game.currentFrame);
      console.log('roll before update:' + game.roll);

      $('#f' + frame).text(game.frameScores[game.currentFrame]);
      console.log('current frame score from array:' + game.frameScores[game.currentFrame]);

      $('#totalscore').text(game.total());
      game.updateFrame();
      console.log('frame no after update:' + game.currentFrame);
      console.log('roll after update:' + game.roll);
      console.log('frame points:' + game.getFramePoints());
      console.log('array:' + game.frameScores);
  });

});
