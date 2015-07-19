$(document).ready(function() {
  
  var frame1 = new Frame();
  var frame2 = new Frame();
  var frame3 = new Frame();
  var frame4 = new Frame();
  var frame5 = new Frame();
  var frame6 = new Frame();
  var frame7 = new Frame();
  var frame8 = new Frame();
  var frame9 = new Frame();
  var frame10 = new TenthFrame();

  var frameArray = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10];

  var selector = 0;

  var game = new Game(frameArray[selector]);

  showField();

  function showField() { 
    if (game.currentFrame().isInProgress()) {
      $("#primary").html(generateScoreEntry());
    } else {
      $("#primary").html(generateNextFrame());
    };
  }

  function generateScoreEntry() { 
    return ' \
    <form> \
      Enter Score: <input name="score" type="text"> \
      <input type="submit" value="Submit"> \
    </form>';
  };

  function generateNextFrame() { 
    return ' \
    <p>The frame is complete!</p> \
    <button id="nextframe" type="button">Next Frame</button>';
  };


  $("#nextframe").click(function() {
    selector ++;
    game.newFrame(frameArray[selector]);
    showField();
  });

  // $("#down").click(function(){
  //   thermostat.decrease();
  //   showTemperature();
  // });

  // $("#powersave").click(function() {
  //   thermostat.powerSaveToggle();
  //   showTemperature();
  // });
  
  // $("#reset").click(function() {
  //   thermostat.resetTemperature();
  //   showTemperature();
  // });

});


