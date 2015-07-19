bowling = new Bowling();

$("#submitButton").click(function() {
  try {
    if (!$("#textField").val()) throw "nothing entered";
    if ($("#textField").val() > 10) throw "greater than 10"
    if ($("#textField").val() < 0) throw "smaller than 0";
    if (isNaN($("#textField").val())) throw "NaN";
  }
  catch(error) {
    $("#errorMessenger").html = "Error: " + error
  }
  bowling.games[0].framez[0].rolls[0].knockedDown($("#textField").val());
  $("#f1r1").html(bowling.games[0].framez[0].rolls[0].rollScore)
  $("#textField").val('');
})

