$( document ).ready(function() {
  var frame = new Frame();
  var x = 1;

    $ ("#remaining-pins").text(frame.pinsStanding());

      $ ("#which-roll").text(x);


    // if (x == 2){
    //   $("#next-frame-prompt").text(frame.framePrompt());
    // }


    $ ("#roll").click(function(){

      x == 2 ? frame.nextFrame() : x++

      $ ("#current-score").text(frame.roll());

      $ ("#remaining-pins").text(frame.score());

       $ ("#which-roll").text(x);

    });

});
