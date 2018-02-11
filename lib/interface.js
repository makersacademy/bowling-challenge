$(document).ready(function () {

  game = new Game();
  game.addFrame(new Frame());

  function updateTotalScore(){
    $("#current-score").text(game.score());
  };

  function writeRolls(){
    for (n = 0; n < game.currentFrameNo(); n++) {
      var frame = game.getFrames()[n]
      $("#frame" + (n+1) + "roll1").text(getFirstRoll(frame))
      $("#frame" + (n+1) + "roll2").text(getSecondRoll(frame))
    }
  };

  function getFirstRoll(frame){
    if (frame.isStrike()) {return "X"}
    return frame.firstRoll()
  }

  function getSecondRoll(frame){
    if (frame.isSpare()) {return "/"}
    return frame.secondRoll()

  }
  
  function writeFrames(){
    for (n = 0; n < game.currentFrameNo(); n++) {
      var frame = game.getFrames()[n]
      $("#frameScore" + (n+1)).text(frame.score() + game.bonusScore(frame,n))
    }
  };

  function addRoll(pins){
    game.addRoll(pins)
    updateTotalScore()
    writeRolls()
    writeFrames()
  }

  $('#hit1').on('click', function() {
    addRoll(1);
  });

  $('#hit2').on('click', function() {
    addRoll(2);
  });

  $('#hit3').on('click', function() {
    addRoll(3);
  });

  $('#hit4').on('click', function() {
    addRoll(4);
  });

  $('#hit5').on('click', function() {
    addRoll(5);
  });

  $('#hit6').on('click', function() {
    addRoll(6);
  });

  $('#hit7').on('click', function() {
    addRoll(7);
  });

  $('#hit8').on('click', function() {
    addRoll(8);
  });

  $('#hit9').on('click', function() {
    addRoll(9);
  });

  $('#hit10').on('click', function() {
    addRoll(10);
  });

});