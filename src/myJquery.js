$(document).ready(function(){
  var bowlingRules = new BowlingRules()
  var scoreArray
  var score = 0
  var role = 1
 
  $(".button").click(function(){
    scoreArray = bowlingRules.takeTurn(role, parseInt($(this).text()), score);
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

