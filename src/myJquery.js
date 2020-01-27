$(document).ready(function(){
  var bowlingRules = new BowlingRules()
  var scoreArray
  var role = 1
  turnTaken = false
 
  $("#0").click(function(){
    var scoreArray = bowlingRules.takeTurn(role, 0);
    turnTaken = true
  });
  $("#1").click(function(){
    var scoreArray = bowlingRules.takeTurn(role, 1);
    var turnTaken = true
  });
  $("#2").click(function(){
    var scoreArray = bowlingRules.takeTurn(role, 2);
    turnTaken = true
  });
  $("#3").click(function(){
    var scoreArray = bowlingRules.takeTurn(role, 3);
    var turnTaken = true
  });
  $("#4").click(function(){
    var scoreArray = bowlingRules.takeTurn(role, 4);
    var turnTaken = true
  });
  $("#5").click(function(){
    var scoreArray = bowlingRules.takeTurn(role, 5);
    var turnTaken = true
  });
  $("#6").click(function(){
    var scoreArray = bowlingRules.takeTurn(role, 6);
    turnTaken = true
  });
  $("#7").click(function(){
    var scoreArray = bowlingRules.takeTurn(role, 7);
    turnTaken = true
  });
  $("#8").click(function(){
    var scoreArray = bowlingRules.takeTurn(role, 8);
    turnTaken = true
  });  
  $("#9").click(function(){
    var scoreArray = bowlingRules.takeTurn(role, 9);
    turnTaken = true
  });  
  $("#10").click(function(){
    var scoreArray = bowlingRules.takeTurn(role, 10);
    turnTaken = true
  });

  if(turnTaken = true){
    turnTaken = false
    for(let i = 1; i < 12; i++){
      roleid = "#role" + String(role)
      roleid2 = "#role" + String(role +1)
      scoreid = "#score" + String(role)
      console.log(scoreArray)
      if (scoreArray[i] !== 'undefined'){
        console.log(scoreArray)
        $(roleid).text = scoreArray.turnHash.displayPins1stRole
        $(roleid).text = scoreArray.turnHash.displayPins2ndRole
        $(roleid).text = scoreArray.turnHash.displayScore
        nextRole = scoreArray.turnHash.nextTurn
      }
    role = nextRole
    }
  }
});

