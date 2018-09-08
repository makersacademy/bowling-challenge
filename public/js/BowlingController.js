$( document ).ready(function() {

  alert( "Welcome: new game" );
  updateDisplay();
  var bowlingModel = new BowlingModel();
  console.log(bowlingModel);

  $( "input[type=button]" ).click(function( event ) {
    var knockedPinsString = $("input:text").val();
    var knockedPinsInt, respose;
    knockedPinsInt = parseInt(knockedPinsString, 10);
    response = bowlingModel.increment(knockedPinsInt);
    console.log(response);
    updateDisplay();
  });

  function updateDisplay() {
    $("#current_score").text("Current score = " )
  };

});
