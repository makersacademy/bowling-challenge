$(document).ready(function() {
  let total;  
  let firstRoll;
  let secondRoll;
  let game = new bowlingGame;
  // $("form").submit(function () {
  //   alert("button is clicked");
  // });
  $(document).on('click', ':button', function (e) {

    var btn = $(e.target);
    btn.attr("disabled", "disabled"); // disable button

  });

  function showTotal(num) {
    $("#totalScore").text(num);
  }

  $("#inputFrameOne").click(function (e) {
    firstRoll = parseInt($("#frameOneFirstRoll").val());
    secondRoll = parseInt($("#frameOneSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames[0]);
    $("#frameOneFirstRoll").attr('disabled', true)
    $("#frameOneSecondRoll").attr('disabled', true)
    $("#inputFrameOne").attr('disabled', true)
  });

  $("#inputFrameTwo").click(function (e) {
    firstRoll = parseInt($("#frameTwoFirstRoll").val());
    secondRoll = parseInt($("#frameTwoSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameTwoFirstRoll").attr('disabled', true)
    $("#frameTwoSecondRoll").attr('disabled', true)
    $("#inputFrameTwo").attr('disabled', true)
  });
  
  $("#inputFrameThree").click(function (e) {
    firstRoll = parseInt($("#frameThreeFirstRoll").val());
    secondRoll = parseInt($("#frameThreeSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameThreeFirstRoll").attr('disabled', true)
    $("#frameThreeSecondRoll").attr('disabled', true)
    $("#inputFrameThree").attr('disabled', true)
  });
  
  $("#inputFrameFour").click(function (e) {
    firstRoll = parseInt($("#frameFourFirstRoll").val());
    secondRoll = parseInt($("#frameFourSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameFourFirstRoll").attr('disabled', true)
    $("#frameFourSecondRoll").attr('disabled', true)
    $("#inputFrameFour").attr('disabled', true)
  });
  
  $("#inputFrameFive").click(function (e) {
    firstRoll = parseInt($("#frameFiveFirstRoll").val());
    secondRoll = parseInt($("#frameFiveSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameFiveFirstRoll").attr('disabled', true)
    $("#frameFiveSecondRoll").attr('disabled', true)
    $("#inputFrameFive").attr('disabled', true)
  });

  $("#inputFrameSix").click(function (e) {
    firstRoll = parseInt($("#frameSixFirstRoll").val());
    secondRoll = parseInt($("#frameSixSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameSixFirstRoll").attr('disabled', true)
    $("#frameSixSecondRoll").attr('disabled', true)
    $("#inputFrameSix").attr('disabled', true)
  });

  $("#inputFrameSeven").click(function (e) {
    firstRoll = parseInt($("#frameSevenFirstRoll").val());
    secondRoll = parseInt($("#frameSevenSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameSevenFirstRoll").attr('disabled', true)
    $("#frameSevenSecondRoll").attr('disabled', true)
    $("#inputFrameSeven").attr('disabled', true)
  });

  $("#inputFrameEight").click(function (e) {
    firstRoll = parseInt($("#frameEightFirstRoll").val());
    secondRoll = parseInt($("#frameEightSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameEightFirstRoll").attr('disabled', true)
    $("#frameEightSecondRoll").attr('disabled', true)
    $("#inputFrameEight").attr('disabled', true)
  });

  $("#inputFrameNine").click(function (e) {
    firstRoll = parseInt($("#frameNineFirstRoll").val());
    secondRoll = parseInt($("#frameNineSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameNineFirstRoll").attr('disabled', true)
    $("#frameNineSecondRoll").attr('disabled', true)
    $("#inputFrameNine").attr('disabled', true)
  });

  $("#inputFrameTen").click(function (e) {
    firstRoll = parseInt($("#frameTenFirstRoll").val());
    secondRoll = parseInt($("#frameTenSecondRoll").val());
    thirdRoll = parseInt($("#frameTenThirdRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameTenFirstRoll").attr('disabled', true)
    $("#frameTenSecondRoll").attr('disabled', true)
    $("#frameTenThirdRoll").attr('disabled', true)
    $("#inputFrameTen").attr('disabled', true)
  });
  $("#calculateScoreTest").click(function (e) {
    // for(let i = 0; i < 7; i++) {game.addFrame([1, 1])};
    // game.addLastFrame([10, 10]);
    if(game.frames.length < 10) {
      showTotal("You have not put in enough frames to calculate the total.")
    } else {
      total = game.gameTotal();
      showTotal(total);
      game = new bowlingGame
    }
  });
})