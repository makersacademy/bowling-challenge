scorecard = new Scorecard();

function updateBoard(){
  for(var i = 0; i < scorecard.screenDisplay().length; i++){
    var target_element = "r"+(i+1).toString()
    var target_insert = scorecard.screenDisplay()[i].toString()
    $(document.getElementById(target_element).innerHTML = target_insert);
  }
  for(var i = 0; i < scorecard.evaluate().length; i++){
    var target_element = "s"+(i+1).toString()
    var target_insert = scorecard.evaluate()[i].toString()
    $(document.getElementById(target_element).innerHTML = target_insert);
  }
}

$( document ).ready(function() {
  $("#1").click(function( event ) {
    scorecard.record.roll(1)
    updateBoard()
  });
  $("#2").click(function( event ) {
    scorecard.record.roll(2)
    updateBoard()
  });
  $("#3").click(function( event ) {
    scorecard.record.roll(3)
    updateBoard()
  });
  $("#4").click(function( event ) {
    scorecard.record.roll(4)
    updateBoard()
  });
  $("#5").click(function( event ) {
    scorecard.record.roll(5)
    updateBoard()
  });
  $("#6").click(function( event ) {
    scorecard.record.roll(6)
    updateBoard()
  });
  $("#7").click(function( event ) {
    scorecard.record.roll(7)
    updateBoard()
  });
  $("#8").click(function( event ) {
    scorecard.record.roll(8)
    updateBoard()
  });
  $("#9").click(function( event ) {
    scorecard.record.roll(9)
    updateBoard()
  });
  $("#10").click(function( event ) {
    scorecard.record.roll(10)
    updateBoard()
  });
});
