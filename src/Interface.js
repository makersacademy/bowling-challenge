$( document ).ready(function () {
  var game = new BowlingGame();
  var frame


  // $("#new-frame").hide();
  $("#roll-1").hide();
  $("#submit-r1").hide();
  $("#roll-2").hide();
  $("#submit-r2").hide();

  // $("#start-game").click(function () {
  //   $(this).hide();
  //   $("#new-frame").show();
  // });

  updateScore();

  $("#new-frame").click(function () {
    frame = new Frame();
    $(this).hide();
    $("#roll-1").show();
    $("#submit-r1").show();
  });

  $("#submit-r1").click(function (e) {
    e.preventDefault();
    var roll_1 = $("#roll-1").val();
    frame.recordRolls(roll_1)
    $("#roll-1").hide();
    $(this).hide();
    $("#roll-2").show();
    $("#submit-r2").show();
    updateScore();
  });

  $("#submit-r2").click(function () {
    var roll_2 = $("#roll-2").val();
    frame.recordRolls(roll_2)
    game.addFrame(frame);
    updateScore();
    // $(this).hide();
    // $("#roll-2").show();
  });



  function updateScore(){
    $("#score").text(game.score);
  }





});
