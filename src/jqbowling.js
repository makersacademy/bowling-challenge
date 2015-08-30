$( document ).ready(function() {
  
  var scoreBoard = new BowlingScorer();

  $("#namebutton").click(function() {
    var name = $("#playername").val();
    $("#name").text(name);
    $("#nameselect").hide();
    $("#inputscores").removeClass("hidden");
  });

  var score;
  $("#submitscore").click(function() {
    score = $("#score").val();
    var shot1 = $("#frame"+scoreBoard.frameNo+"shot1").text();
    var scored = scoreBoard.bowl(parseInt(score))
    if(scoreBoard.frameNo-1>=11) {
      if(scoreBoard.doubleStrike&&$("#frame10shot2").text()==="") {
        $("#frame10shot2").text("X");
      } else if(scoreBoard.strike&&$("#frame10shot2").text()==="") {
        $("#frame10shot2").text("X");
      } else {
        if(scoreBoard.spare) { scored = "/" }
        if(scored===10) { scored = "X" }
        $("#frame10shot3").text(scored);
      }
    } else if(scoreBoard.frameNo-1===12&&$("#frame10shot3").text()==="") {
      $("#frame10shot3").text(scored);
    } else if(shot1 === "") {
      if(scoreBoard.frameNo===11&&$("#frame10shot1").text()==="X") {
        $("#frame10shot2").text(scored)
      } else if(scoreBoard.strike&&scoreBoard.frameNo>=11) { 
        scored = "X";
        $("#frame"+(scoreBoard.frameNo-1)+"shot1").text(scored);
      } else if(scored===10&&scoreBoard.frameNo<11) { 
        scored = "X";
        $("#frame"+(scoreBoard.frameNo-1)+"shot1").text(scored);
        $("#frame"+(scoreBoard.frameNo-1)+"shot2").text("-");
      } else if(scoreBoard.frameNo===11&&$("#frame10shot1").text()==="") {
        $("#frame"+(scoreBoard.frameNo-1)+"shot1").text(scored)
      } else if(scoreBoard.frameNo===10&&$("#frame9shot2").text!="") {
        $("#frame10shot1").text(scored)
      } else {
        $("#frame"+(scoreBoard.frameNo)+"shot1").text(scored);
      }
    } else {
      if(scoreBoard.spare) { scored = "/" }
      $("#frame"+(scoreBoard.frameNo-1)+"shot2").text(scored);
    }
    $("#total").text(scoreBoard.total);
  
    var i;
    for(i=0; i < (scoreBoard.runningTotals.length); i++) {
      var previousTotal = $("#frame"+i+"total").text();
      if(previousTotal === "") { previousTotal = 0 }
      var total = parseInt(previousTotal) + scoreBoard.runningTotals[i];
      $("#frame"+(i+1)+"total").text(total);
    }
  });
});