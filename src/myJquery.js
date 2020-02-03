$(document).ready(function(){
  var bowlingRules = new BowlingRules()
  var scoreArray
  var score = 0
  var role = 1
  turnTaken = false
 
  $("#0").click(function(){
    scoreArray = bowlingRules.takeTurn(role, 0, score);
    displayScreen (scoreArray)
  });
  $("#1").click(function(){
    scoreArray = bowlingRules.takeTurn(role, 1, score);
    displayScreen (scoreArray)
  });
  $("#2").click(function(){
    scoreArray = bowlingRules.takeTurn(role, 2, score);
    displayScreen (scoreArray)
  });
  $("#3").click(function(){
    scoreArray = bowlingRules.takeTurn(role, 3, score);
    displayScreen (scoreArray)
  });
  $("#4").click(function(){
    scoreArray = bowlingRules.takeTurn(role, 4, score);
    displayScreen (scoreArray)
  });
  $("#5").click(function(){
    scoreArray = bowlingRules.takeTurn(role, 5, score);
    displayScreen (scoreArray)
  });
  $("#6").click(function(){
    scoreArray = bowlingRules.takeTurn(role, 6, score);
    displayScreen (scoreArray)
  });
  $("#7").click(function(){
    scoreArray = bowlingRules.takeTurn(role, 7, score);
    displayScreen (scoreArray)
  });
  $("#8").click(function(){
    scoreArray = bowlingRules.takeTurn(role, 8, score);
    displayScreen (scoreArray)
  });  
  $("#9").click(function(){
    scoreArray = bowlingRules.takeTurn(role, 9, score);
    displayScreen (scoreArray)
  });  
  $("#10").click(function(){
    scoreArray = bowlingRules.takeTurn(role, 10, score);
    displayScreen (scoreArray)
  });
  function displayScreen (scoreArray) { 
    console.log(scoreArray)
    for(let i = 1; i < 11; i++){
      if (i === 1){
        $("#create-table").replaceWith('<tr id="create-table"></tr>') 
      }
      if (typeof scoreArray[i] !== 'undefined'){
        $("#create-table").append(
          '<tr><th rowspan="2">' + String(i) + ':</th><td>' + scoreArray[i].displayPins1stRole + '</td>\
          <th rowspan="2">' + scoreArray[i].displayScore + '</th></tr>\
          <tr><td>' + scoreArray[i].displayPins2ndRole + '</td> </tr>');
        var nextRole = scoreArray[i].nextTurn
        score = scoreArray[i].score
      }  
    
    }
  return role = nextRole
  }
});

