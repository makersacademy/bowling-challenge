$(document).ready(function(){
  var game = new Game();
  $('#frameCount').text(game.frameCount);


  $('#rackUp').click(function(){
    game.rackUp();
    if ($(this.setUpPins).val() == this.PINS) {
                $('.roll1').prop('disabled', true);
            } else {
                $('.roll1').prop('disabled', false);
            }
        });
  });

});
