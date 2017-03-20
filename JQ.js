$( document ).ready(function() {
  var frame = new Frame();
  var x = 1, m;

    $ ("#remaining-pins").text(frame.pinsStanding());

    $ ("#which-roll").text(x);

    $ ("#current-score").text(0);


    $ ("#roll").click(function(){

      $ ("#current-score").text(frame.roll());

      $ ("#remaining-pins").text(frame.score());

      $ ("#which-roll").text(x + 1);

      x == 2 ? frame.nextFrame() : x++

    });

});
