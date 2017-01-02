
var frame = $('#frame1')

var form = document.querySelector("form");

  $(document).ready(function(){
    window.game = new Game();


    form.addEventListener("submit", function(event){
      var game= window.game;

      game.bowl(form.pins.value);

      var frame = game.getCurrentFrame();
      var frameIndex = game.getFrameIndex();
      var bowlIndex = (frameIndex-1)*2 + frame.attempts;

      var bowl = $('#bowl' + bowlIndex);
      var $bowl = $('tr[data-role="bowls"] [data-bowl="' + bowlIndex + '"]');
      var $frame = $('tr[data-role="frames"] [data-frame="' + frameIndex+ '"]');

      console.log("saving value " + bowl);
      event.preventDefault();

      $bowl.text(form.pins.value);
      $frame.text(game.getFrameScore());

      var previousFrame = game.getPreviousFrame();
      if(undefined!=previousFrame) {
        var previousFrameIndex = frameIndex-1;

        var $previousFrame = $('tr[data-role="frames"] [data-frame="' + previousFrameIndex+ '"]');
        $previousFrame.text(game.getPreviousScore(previousFrame, frame));
      }



    });

});
