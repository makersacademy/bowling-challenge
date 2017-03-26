$( document ).ready(function() {
  var frame = new Frame();
  var x, frameNumber = 1;
  $ ("#next").hide();

  $.fn.helper = function(){
    return x;
  }

  var reset = function(){

    frame.PINS = 10;
    frame.total = [];
    x = 1;

    $ ("#next").fadeOut(500);
    $ ("#roll").delay(500).fadeIn(500);

    $ ("#next-frame-alert").hide();
    $ ("#current-roll").show();

    $ ("#which-roll").text(x);

    $ ("#grand-total").text(game.grandTotal());

  };

  reset();

$ ("#roll").click(function(){

    x++

    $ ("#current-score").text(frame.roll());

    $ ("#pins-standing").text(frame.pinsRemaining());

    $ ("#frame-total").text(frame.frameTotal(hit));

    $ ("#which-roll").text(x);

    $ ("#hits").text(frame.total);


    if (x == 3) {
      $ ("#current-roll").hide();
      $ ("#next-frame-alert").show();
      $ ("#roll").hide();
      $ ("#next").show();
    }

  });

    $ ("#next").click(function(){
      $ ("#frame-number").text(frameNumber += 1)
      reset();
    });

});
