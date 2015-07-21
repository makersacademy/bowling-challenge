bowling = new Bowling();

$("#submitButton").click(function() {
  try {git
    if ($("#textField").val() === null) throw  "nothing entered";
    if ($("#textField").val() > 10) throw "greater than 10"
    if ($("#textField").val() < 0) throw "smaller than 0";
    if (isNaN($("#textField").val())) throw "NaN";
  }
  catch(error) {
    $("#errorMessenger").html = "Error: " + error
  }

  bowling.games[0].currentFrame.currentRoll.knockedDown(parseInt($("#textField").val()));
  bowling.games[0].currentFrame.tallyRolls();
  bowling.games[0].currentFrame.rollController();
  bowling.games[0].frameController();
  bowling.games[0].bonusController();
  bowling.games[0].framez[0].tallyAll();


  $("#f1r1").html(bowling.games[0].framez[0].rolls[0].rollScore)
  $("#f1r2").html(bowling.games[0].framez[0].rolls[1].rollScore)
  $("#f2r1").html(bowling.games[0].framez[1].rolls[0].rollScore)
  $("#f2r2").html(bowling.games[0].framez[1].rolls[1].rollScore)
  $("#f3r1").html(bowling.games[0].framez[2].rolls[0].rollScore)
  $("#f3r2").html(bowling.games[0].framez[2].rolls[1].rollScore)
  $("#f4r1").html(bowling.games[0].framez[3].rolls[0].rollScore)
  $("#f4r2").html(bowling.games[0].framez[3].rolls[1].rollScore)
  $("#f5r1").html(bowling.games[0].framez[4].rolls[0].rollScore)
  $("#f5r2").html(bowling.games[0].framez[4].rolls[1].rollScore)
  $("#f6r1").html(bowling.games[0].framez[5].rolls[0].rollScore)
  $("#f6r2").html(bowling.games[0].framez[5].rolls[1].rollScore)
  $("#f7r1").html(bowling.games[0].framez[6].rolls[0].rollScore)
  $("#f7r2").html(bowling.games[0].framez[6].rolls[1].rollScore)
  $("#f8r1").html(bowling.games[0].framez[7].rolls[0].rollScore)
  $("#f8r2").html(bowling.games[0].framez[7].rolls[1].rollScore)
  $("#f9r1").html(bowling.games[0].framez[8].rolls[0].rollScore)
  $("#f9r2").html(bowling.games[0].framez[8].rolls[1].rollScore)
  $("#f10r1").html(bowling.games[0].framez[9].rolls[0].rollScore)
  $("#f10r2").html(bowling.games[0].framez[9].rolls[1].rollScore)

  $("#f1").html(bowling.games[0].framez[0].frameScore)
  $("#f2").html(bowling.games[0].framez[1].frameScore)
  $("#f3").html(bowling.games[0].framez[2].frameScore)
  $("#f4").html(bowling.games[0].framez[3].frameScore)
  $("#f5").html(bowling.games[0].framez[4].frameScore)
  $("#f6").html(bowling.games[0].framez[5].frameScore)
  $("#f7").html(bowling.games[0].framez[6].frameScore)
  $("#f8").html(bowling.games[0].framez[7].frameScore)
  $("#f9").html(bowling.games[0].framez[8].frameScore)
  $("#f10").html(bowling.games[0].framez[9].frameScore)


})

