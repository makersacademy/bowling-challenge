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
    unpopulateRollTable();
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

  function isRollOneDone(){
    return frame.rollOneDone;
  };

  function isRollTwoDone(){
    return frame.rollTwoDone;
  };

  $('#take-roll').click(function(e){
    e.preventDefault();
    if(!isRollOneDone()) return rollOne();
    if(!isRollTwoDone()) return rollTwo();
  });

  function rollOne(){
    roll = getRoll();
    frame.getRollOne(roll);
    postRollDo();
  };

  function rollTwo(){
    roll = getRoll();
    frame.getRollTwo(roll);
    postRollDo();
  };
    
  function postRollDo(){
    displayPins();
    onClickDo(); 
  }

  function onClickDo(){
    populateRollArray();
    populateTable();
    if(isRollOneDone() && isRollTwoDone()) closeFrame(); 
  }

  function closeFrame(){
    doScoreBoardCloseFrame();
    totalScore();
    rackupFrame();   
  }

  function doScoreBoardCloseFrame(){
    scoreboard.addFrame(frame);
    scoreboard.processScores();
    scoreboard.totalUpGame();  
  };

  function populateRollArray(){
    rollsArray = []  
    for (var i = 0; i < scoreboard.gameFrames.length; i++) {
      rollsArray.push(scoreboard.gameFrames[i].rollOneScore)
      rollsArray.push(scoreboard.gameFrames[i].rollTwoScore) 
    }; 
    populateRollTable(); 
  };

  function populateRollTable(){
    $('.roll').each(function(i){
      $(this).text(rollsArray[i]);
    }); 
  };

  function unpopulateRollTable(){
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