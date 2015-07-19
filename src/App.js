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
    if (game.isComplete()) {
      $("#primary").html('The game is complete!');
    } 
    else if (game.currentFrame().isInProgress()) {
      $("#primary").html(generateScoreEntry());
    } 
    else {
      $("#primary").html(generateNextFrame());
    };
  }

  function generateScoreEntry() { 
    return ' \
      Enter Score: <input id="inputscore" type="text"> \
      <button id="submitscore" type="button">Enter</button>';
  };

  function generateNextFrame() { 
    return ' \
    <p>The frame is complete!</p> \
    <button id="nextframe" type="button">Next Frame</button>';
  };

  function generateTable() { 
    var content = '';
    game.frameRecord.forEach(function(frame){
      var firstRoll = game.currentFrame().scoreRecord[0].toString();
    });
  };


  $("#nextframe").click(function() {
    game.calculateBonuses();
    selector ++;
    game.newFrame(frameArray[selector]);
    showField();
  });

  $("#submitscore").click(function() {
    var input = $('#inputscore').val();
    game.currentFrame().roll(parseInt(input));  
    showField();
    generateTable();
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


