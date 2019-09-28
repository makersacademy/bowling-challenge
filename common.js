bowlingGame = new BowlingGame("James");
bowlingManager = new BowlingManager();

$(document).ready(function(){
  var tableHeaders = "";
  var tableData = "";
  for(i = 1;i<=9;i++){
    tableHeaders += "<th>"+i+"</th>";
    tableData +=  "<td><table class='plane'>" +
                    "<tr><td id='f"+i+"r1' class='plane'></td><td id='f"+i+"r2' class='plane2'></td></tr>" +
                    "<tr><td id='f"+i+"' class='plane3' colspan='2'></td></tr>" +
                    "</table></td>";
  }
  tableHeaders += "<th>10</th><th>Total</th>";
  tableData += "<td><table class='plane'>" +
  "<tr><td id='f10r1' class='plane'></td><td id='f10r2' class='plane2'></td><td id='f10r3' class='plane2'></td></tr>" +
  "<tr><td id='f10' class='plane3' colspan='3'></td></tr>" +
  "</table></td>";

  tableData +=  "<td id=total></td>";

  $("#tableBuild").html("<tr>" + tableHeaders + "</tr>" + "<tr>" + tableData + "</tr>" );

  $("#score0").click(function(){bowlingGame.play(0);updateScreen();});
  $("#score1").click(function(){bowlingGame.play(1);updateScreen();});
  $("#score2").click(function(){bowlingGame.play(2);updateScreen();});
  $("#score3").click(function(){bowlingGame.play(3);updateScreen();});
  $("#score4").click(function(){bowlingGame.play(4);updateScreen();});
  $("#score5").click(function(){bowlingGame.play(5);updateScreen();});
  $("#score6").click(function(){bowlingGame.play(6);updateScreen();});
  $("#score7").click(function(){bowlingGame.play(7);updateScreen();});
  $("#score8").click(function(){bowlingGame.play(8);updateScreen();});
  $("#score9").click(function(){bowlingGame.play(9);updateScreen();});
  $("#score10").click(function(){bowlingGame.play(10);updateScreen();});

  //$("#reset").click(function(){bowlingGame.reset();updateScreen();});
  $("#reset").click(function(){bowlingGame.reset();clearScreen();});

  function updateScreen(){
    var frameScores = bowlingGame.frameScores;
    
    for(i = 1;i<=bowlingGame.frameScores.length;i++){
      $("#f"+i+"r1").html(frameScores[i-1].rollOne);
      $("#f"+i+"r2").html(frameScores[i-1].rollTwo);
      $("#f"+i).html(bowlingManager.frameScore(frameScores[i-1],frameScores[i],frameScores[i+1]));
    }

    if(bowlingGame.frameScores.length === 10){
      $("#f10r3").html(frameScores[9].rollThree);
    };
    $("#total").html(bowlingManager.matchScore(bowlingGame.frameScores));
    
  };

  function clearScreen(){
    
    for(i = 1;i<=10;i++){
      $("#f"+i+"r1").html("");
      $("#f"+i+"r2").html("");
      $("#f"+i).html("");
    }
    $("#f10r3").html("");
    $("#total").html(0);
  };
}) 

