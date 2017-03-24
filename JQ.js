$( document ).ready(function() {
  var frame = new Frame();
  var x = 1;

    $ ("#remaining-pins").text(frame.pinsStanding());

    $ ("#which-roll").text(x);

    $ ("#current-score").text(0);

    $ ("#next-frame-prompt").hide();

    $ ("#frame-score").text();


    $ ("#roll").click(function(){

        $ ("#current-score").text(frame.roll());

        $ ("#remaining-pins").text(frame.score());

        // console.log("frame.roll: "+frame.roll;

        // console.log("frame.scoreTotal: "+frame.scoreTotal());

        console.log("ARRAY REDUCED: "+ frame.scoreTotal());

        $ ("#which-roll").text(x + 1);

        if (x == 2) {
          $ ("#current-roll").hide();
          $ ("#next-frame-prompt").show();
        }
        else {
          x++
        }
    });
});
