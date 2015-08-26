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
    if(shot1 === "") {
      $("#frame"+(scoreBoard.frameNo)+"shot1").text(score);
    } else {
      $("#frame"+(scoreBoard.frameNo)+"shot2").text(score);
    }
    console.log(scoreBoard.bowl(parseInt(score)));
    console.log(scoreBoard.frameNo),
    $("#total").text(scoreBoard.total);
  });

});