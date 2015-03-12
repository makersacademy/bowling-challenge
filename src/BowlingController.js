$('document').ready(function(){
  
  var player
  var scoreboard
  var frame; 
  var rollsArray


  newGame();
  rackupFrame();
  

  function newGame(){
    player = new Player
    scoreboard = new ScoreBoard
    unpopulateTable();
    unpopulateRollArray();
  }

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

  function whichRoll(){

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
    rollsArray = []  
    for (var i = 0; i < scoreboard.gameFrames.length; i++) {
      rollsArray.push(scoreboard.gameFrames[i].rollOneScore)
      rollsArray.push(scoreboard.gameFrames[i].rollTwoScore) 
    }; 
    populateRollArray(); 
  };

  function populateRollArray(){
    $('.roll').each(function(i){
      $(this).text(rollsArray[i]);
    }); 
  };

  function unpopulateRollArray(){
    $('.roll').each(function(i){
      $(this).text("-");
    });     
  };

  function populateTable(){
    $('.frame').each(function(index){
      if(typeof scoreboard.frameScores[index]!='undefined') return $(this).text(scoreboard.frameScores[index]);
      return $(this).text("-");
    });  
  };

  function unpopulateTable(){
    $('.frame').each(function(index){
      return $(this).text("-");
    }); 
  };

  function totalScore(){
    $('#total-score').text(scoreboard.currentScore);
  };

});