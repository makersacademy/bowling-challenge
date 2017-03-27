$( document ).ready(function() {
  var frame = new Frame();
  var x, frameNumber = 1;
  var i = 0;
  $ ("#next").hide();

  $.fn.rollNumber = function(){
    return x;
  }

  var reset = function(){

    frame.PINS = 10;
    frame.total = [];
    x = 1;

    $ ("#next").fadeOut(600);
    $ ("#roll").delay(500).fadeIn(500);

    $ ("#next-frame-alert").hide();
    $ ("#current-roll").show();

    $ ("#which-roll").text(x);

    $ ("#pins-standing").text(frame.PINS);

    $ ("#frame-total").text(0);

    $ ("#hits").text(0);

    $ ("#grand-total").text(game.grandTotal());
  };

  reset();


$ ("#roll").click(function(){
    x++

    $ ("#roll-count").text(game.rollCount += 1);

    $ ("#current-score").text(frame.roll());

    $ ("#pins-standing").text(frame.pinsRemaining());

    $ ("#frame-total").text(frame.calculate(hit));

    $ ("#which-roll").text(x);

    $ ("#hits").text(frame.total);


    if (x == 3) {
      $.fn.endFrame();
    }

  });

    $.fn.endFrame = function(){
      $ ("#current-roll").hide();
      $ ("#next-frame-alert").show();
      $ ("#roll").hide();
      $ ("#next").show();
      $ ("#grand-total").text(game.grandTotal());
    };

    $ ("#next").click(function(){
      $ ("#frame-number").text(frameNumber += 1)
      frame.applyPoints();
      i++;
      console.log("This is the frame end counter: " + (i))
      reset();
      if (i == 2){i = 0}
    })
});
