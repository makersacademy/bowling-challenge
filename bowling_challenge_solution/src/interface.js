$(document).ready(function() {
  let total = 0;  
  let firstRoll;
  let secondRoll;
  let game = new bowlingGame;
  

  function showTotal(num) {
    $("#totalScore").text(num);
  }

  $("#inputFrameOne").click(function (e) {
    firstRoll = parseInt($("#frameOneFirstRoll").val());
    secondRoll = parseInt($("#frameOneSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames[0]);
    $("#frameOneFirstRoll").attr('disabled', true);
    $("#frameOneSecondRoll").attr('disabled', true);
    $("#inputFrameOne").attr('disabled', true);
    
    total = firstRoll + secondRoll;
    $("#frameOneScore").text(total);
  });

  $("#inputFrameTwo").click(function (e) {
    firstRoll = parseInt($("#frameTwoFirstRoll").val());
    secondRoll = parseInt($("#frameTwoSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameTwoFirstRoll").attr('disabled', true);
    $("#frameTwoSecondRoll").attr('disabled', true);
    $("#inputFrameTwo").attr('disabled', true);
    if (game.frames[0].rolls[0] === 10) {
      total += firstRoll + secondRoll;
      $("#frameOneScore").text(total);
    } else if (game.frames[0].rollTotal === 10) {
      total += firstRoll;
      $("#frameOneScore").text(total);
    }
    scoreSoFar = game.calculateScoreSoFar(total, [firstRoll, secondRoll])
    total = scoreSoFar;
    $("#frameTwoScore").text(total);
  });
  
  $("#inputFrameThree").click(function (e) {
    firstRoll = parseInt($("#frameThreeFirstRoll").val());
    secondRoll = parseInt($("#frameThreeSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameThreeFirstRoll").attr('disabled', true);
    $("#frameThreeSecondRoll").attr('disabled', true);
    $("#inputFrameThree").attr('disabled', true);
    if (game.frames[0].rolls[0] === 10 && game.frames[1].rolls[0] === 10) {
      total += firstRoll;
      $("#frameOneScore").text(total - 10);
    }
    if (game.frames[1].rolls[0] === 10) {
      total += firstRoll + secondRoll;
      $("#frameTwoScore").text(total);
    } else if (game.frames[1].rollTotal === 10) {
      total += firstRoll;
      $("#frameTwoScore").text(total);
    }
    scoreSoFar = game.calculateScoreSoFar(total, [firstRoll, secondRoll]);
    total = scoreSoFar;
    $("#frameThreeScore").text(total);    
  });
  
  $("#inputFrameFour").click(function (e) {
    firstRoll = parseInt($("#frameFourFirstRoll").val());
    secondRoll = parseInt($("#frameFourSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameFourFirstRoll").attr('disabled', true);
    $("#frameFourSecondRoll").attr('disabled', true);
    $("#inputFrameFour").attr('disabled', true);
    if (game.frames[1].rolls[0] === 10 && game.frames[2].rolls[0] === 10) {
      total += firstRoll;
      $("#frameTwoScore").text(total - 10); 
    }
    if (game.frames[2].rolls[0] === 10) {
      total += firstRoll + secondRoll;
      $("#frameThreeScore").text(total); 
    } else if (game.frames[2].rollTotal === 10) {
      total += firstRoll;
      $("#frameThreeScore").text(total); 
    }
    scoreSoFar = game.calculateScoreSoFar(total, [firstRoll, secondRoll])
    total = scoreSoFar;
    $("#frameFourScore").text(total);
  });
  
  $("#inputFrameFive").click(function (e) {
    firstRoll = parseInt($("#frameFiveFirstRoll").val());
    secondRoll = parseInt($("#frameFiveSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameFiveFirstRoll").attr('disabled', true);
    $("#frameFiveSecondRoll").attr('disabled', true);
    $("#inputFrameFive").attr('disabled', true);
    if (game.frames[2].rolls[0] === 10 && game.frames[3].rolls[0] === 10) {
      total += firstRoll;
      $("#frameThreeScore").text(total - 10);
    }
    if (game.frames[3].rolls[0] === 10) {
      total += firstRoll + secondRoll;
      $("#frameFourScore").text(total);
    } else if (game.frames[3].rollTotal === 10) {
      total += firstRoll;
      $("#frameFourScore").text(total);
    }
    scoreSoFar = game.calculateScoreSoFar(total, [firstRoll, secondRoll])
    total = scoreSoFar;
    $("#frameFiveScore").text(total);
  });

  $("#inputFrameSix").click(function (e) {
    firstRoll = parseInt($("#frameSixFirstRoll").val());
    secondRoll = parseInt($("#frameSixSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameSixFirstRoll").attr('disabled', true);
    $("#frameSixSecondRoll").attr('disabled', true);
    $("#inputFrameSix").attr('disabled', true);
    if (game.frames[3].rolls[0] === 10 && game.frames[4].rolls[0] === 10) {
      total += firstRoll;
      $("#frameFourScore").text(total - 10);
    }
    if (game.frames[4].rolls[0] === 10) {
      total += firstRoll + secondRoll;
      $("#frameFiveScore").text(total);
    } else if (game.frames[4].rollTotal === 10) {
      total += firstRoll;
      $("#frameFiveScore").text(total);
    }
    scoreSoFar = game.calculateScoreSoFar(total, [firstRoll, secondRoll])
    total = scoreSoFar;
    $("#frameSixScore").text(total);
  });

  $("#inputFrameSeven").click(function (e) {
    firstRoll = parseInt($("#frameSevenFirstRoll").val());
    secondRoll = parseInt($("#frameSevenSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameSevenFirstRoll").attr('disabled', true);
    $("#frameSevenSecondRoll").attr('disabled', true);
    $("#inputFrameSeven").attr('disabled', true);
    if (game.frames[4].rolls[0] === 10 && game.frames[5].rolls[0] === 10) {
      total += firstRoll;
      $("#frameFiveScore").text(total - 10);
    }
    if (game.frames[5].rolls[0] === 10) {
      total += firstRoll + secondRoll;
      $("#frameSixScore").text(total);
    } else if (game.frames[5].rollTotal === 10) {
      total += firstRoll;
      $("#frameSixScore").text(total);
    }
    scoreSoFar = game.calculateScoreSoFar(total, [firstRoll, secondRoll])
    total = scoreSoFar;
    $("#frameSevenScore").text(total);
  });

  $("#inputFrameEight").click(function (e) {
    firstRoll = parseInt($("#frameEightFirstRoll").val());
    secondRoll = parseInt($("#frameEightSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameEightFirstRoll").attr('disabled', true);
    $("#frameEightSecondRoll").attr('disabled', true);
    $("#inputFrameEight").attr('disabled', true);
    if (game.frames[5].rolls[0] === 10 && game.frames[6].rolls[0] === 10) {
      total += firstRoll;
      $("#frameSixScore").text(total - 10);
    }
    if (game.frames[6].rolls[0] === 10) {
      total += firstRoll + secondRoll
      $("#frameSevenScore").text(total);
    } else if (game.frames[6].rollTotal === 10) {
      total += firstRoll
      $("#frameSevenScore").text(total);
    }
    scoreSoFar = game.calculateScoreSoFar(total, [firstRoll, secondRoll])
    total = scoreSoFar
    $("#frameEightScore").text(total);
  });

  $("#inputFrameNine").click(function (e) {
    firstRoll = parseInt($("#frameNineFirstRoll").val());
    secondRoll = parseInt($("#frameNineSecondRoll").val());
    game.addFrame([firstRoll, secondRoll]);
    console.log(game.frames);
    $("#frameNineFirstRoll").attr('disabled', true)
    $("#frameNineSecondRoll").attr('disabled', true)
    $("#inputFrameNine").attr('disabled', true)
    if (game.frames[6].rolls[0] === 10 && game.frames[7].rolls[0] === 10) {
      total += firstRoll
      $("#frameSevenScore").text(total - 10);
    }
    if (game.frames[7].rolls[0] === 10) {
      total += firstRoll + secondRoll
      $("#frameEightScore").text(total);
    } else if (game.frames[7].rollTotal === 10) {
      total += firstRoll
      $("#frameEightScore").text(total);
    }
    scoreSoFar = game.calculateScoreSoFar(total, [firstRoll, secondRoll])
    total = scoreSoFar
    $("#frameNineScore").text(total);
  });

  $("#inputFrameTen").click(function (e) {
    firstRoll = parseInt($("#frameTenFirstRoll").val());
    secondRoll = parseInt($("#frameTenSecondRoll").val());
    thirdRoll = parseInt($("#frameTenThirdRoll").val());
    game.addLastFrame([firstRoll, secondRoll, thirdRoll]);
    console.log(game.frames);
    $("#frameTenFirstRoll").attr('disabled', true);
    $("#frameTenSecondRoll").attr('disabled', true);
    $("#frameTenThirdRoll").attr('disabled', true);
    $("#inputFrameTen").attr('disabled', true);
    if (game.frames[7].rolls[0] === 10 && game.frames[8].rolls[0] === 10) {
      total += firstRoll
      $("#frameEightScore").text(total - 10);
    }
    if (game.frames[8].rolls[0] === 10) {
      total += firstRoll + secondRoll
      $("#frameNineScore").text(total);
    } else if (game.frames[8].rollTotal === 10) {
      total += firstRoll
      $("#frameNineScore").text(total);
    }
    lastFrame = game.frames[9].lastFrameTotal()
    total += lastFrame
    $("#frameTenScore").text(total);
  });

  $("#calculateScoreTest").click(function (e) {
    if(game.frames.length < 10) {
      showTotal("You have not put in enough frames to calculate the total.")
    } else {
      showTotal(total);
      game = new bowlingGame
    }
  });
})

