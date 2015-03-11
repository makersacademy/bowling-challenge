$('document').ready(function(){
  
  var player = new Player;
  var scoreboard = new ScoreBoard
  var frame; 

  rackupFrame();

  function rackupFrame(){
    player.newFrame();
    frame = new Frame;
    displayPins();
    $('#take-roll').text("Take a roll!");
  };  

  function displayPins(){
    $('#pins-remaining').text(frame.pinsRemaining);
  };

  function getRoll(){
    return player.roll();
  };

  $('#take-roll').click(function(e){
    e.preventDefault();
    if(frame.rollTwoDone === true){
      scoreboard.addFrame(frame);
      scoreboard.processScores();
      scoreboard.totalUpGame();
      totalScore();
      rackupFrame();  
    }else{
      var roll = getRoll();
      takeShot(roll);
    };
    populateRoll();
    populateTable();
  });

  function takeShot(roll){
    if(frame.rollOneDone === false){
      frame.getRollOne(roll);
      displayPins();
    }else{
      roll = getRoll();
      frame.getRollTwo(roll);
      displayPins();
      $('#take-roll').text("Next frame!");
    }
  };

  function populateRoll(){
    var rollsArray = []  
    for (var i = 0; i < scoreboard.gameFrames.length; i++) {
      rollsArray.push(scoreboard.gameFrames[i].rollOneScore)
      rollsArray.push(scoreboard.gameFrames[i].rollTwoScore) 
    }; 
    $('.roll').each(function(i){
      $(this).text(rollsArray[i]);
    });  
  };

  function populateTable(){
    $('.frame').each(function(index){
      if(typeof scoreboard.frameScores[index]!='undefined') return $(this).text(scoreboard.frameScores[index]);
      return $(this).text("-");
    });  
  };

  function totalScore(){
    $('#total-score').text(scoreboard.currentScore);
  };

});