$('document').ready(function(){
  
  var player = new Player;
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
      rackupFrame();  
    }else{
      var roll = getRoll();
      takeShot(roll);
    };
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

});