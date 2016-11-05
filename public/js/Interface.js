$( document ).ready(function () {
  var bowling = new Bowling();

  var updateTurn = function() {
    for(i=1; i <= bowling._turnLog.length; i++){
      $("#tb-turn-"+i).text(bowling._turnLog[i-1].displayValue())
    }
    $("#tb-total-"+bowling._turnLog.length).text(bowling.calculateTotalScore())
  }

  function resetPins () {
    $("#bowl-pins").val('')
  }

  $("#bowl-input").click(function (){
    var pins = parseInt($("#bowl-pins").val());
    if (isNaN(pins) || pins > 10) {
      alert('Only numbers 0-10 can be entered')
      return
    }
    bowling.recordThrow(pins);
    console.log(pins);
    updateTurn();
    resetPins()
  });

  $("#bowl-random").click(function (){
    var pins = Math.floor((Math.random()*10) +1)
    $("#bowl-pins").val(pins)
    bowling.recordThrow(pins);
    updateTurn();
    resetPins()
  });
});
