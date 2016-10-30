$( document ).ready(function () {
  var bowling = new Bowling();

  var updateScore = function() {
    $("#total").text(bowling.calculateTotalScore())
    for(i=1; i <= bowling._turnLog.length; i++){
      console.log(bowling._turnLog[0])
      if(bowling._turnLog[0].isTurnOver() === true){
        $("#tb-total-"+i).text(bowling._turnLog[i-1].totalScore())
      }
    }
  }

  var updateTurn = function() {
    for(i=1; i <= bowling._turnLog.length; i++){
      $("#tb-turn-"+i).text(bowling._turnLog[i-1].displayValue())
    }
  }

  $("#bowl-input").click(function (){
    var pins = parseInt($("#bowl-pins").val());
    bowling.recordThrow(pins);
    console.log(pins);
    updateScore();
    updateTurn();
  });
});
