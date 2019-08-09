$( document ).ready(function() {
  var game = new Game

  const speed = 400

  $( "#zero" ).click(function() {
  game.throw(0);
  updateScore();
});

  $( "#one" ).click(function() {
  game.throw(1);
  updateScore();
  if (game.throwNumber === 2) {
    $("#ten").hide(speed)
  }
});

  $( "#two" ).click(function() {
  game.throw(2);
  updateScore();
  if (game.throwNumber === 2) {
    $("#ten").hide(speed)
    $("#nine").hide(speed)
  }
  });

  $( "#three" ).click(function() {
  game.throw(3);
  updateScore();
  if (game.throwNumber === 2) {
    $("#ten").hide(speed)
    $("#nine").hide(speed)
    $("#eight").hide(speed)
  }
  });

  $( "#four" ).click(function() {
  game.throw(4);
  updateScore();
  if (game.throwNumber === 2) {
    $("#ten").hide(speed)
    $("#nine").hide(speed)
    $("#eight").hide(speed)
    $("#seven").hide(speed)
  }
  });

  $( "#five" ).click(function() {
  game.throw(5);
  updateScore();
  if (game.throwNumber === 2) {
    $("#ten").hide(speed)
    $("#nine").hide(speed)
    $("#eight").hide(speed)
    $("#seven").hide(speed)
    $("#six").hide(speed)
  }
  });

  $( "#six" ).click(function() {
  game.throw(6);
  updateScore();
  if (game.throwNumber === 2) {
    $("#ten").hide(speed)
    $("#nine").hide(speed)
    $("#eight").hide(speed)
    $("#seven").hide(speed)
    $("#six").hide(speed)
    $("#five").hide(speed)
  }
  });

  $( "#seven" ).click(function() {
  game.throw(7);
  updateScore();
  if (game.throwNumber === 2) {
    $("#ten").hide(speed)
    $("#nine").hide(speed)
    $("#eight").hide(speed)
    $("#seven").hide(speed)
    $("#six").hide(speed)
    $("#five").hide(speed)
    $("#four").hide(speed)
  }
  });

  $( "#eight" ).click(function() {
  game.throw(8);
  updateScore();
  if (game.throwNumber === 2) {
    $("#ten").hide(speed)
    $("#nine").hide(speed)
    $("#eight").hide(speed)
    $("#seven").hide(speed)
    $("#six").hide(speed)
    $("#five").hide(speed)
    $("#four").hide(speed)
    $("#three").hide(speed)
  }
  });

  $( "#nine" ).click(function() {
  game.throw(9);
  updateScore();
  if (game.throwNumber === 2) {
    $("#ten").hide(speed)
    $("#nine").hide(speed)
    $("#eight").hide(speed)
    $("#seven").hide(speed)
    $("#six").hide(speed)
    $("#five").hide(speed)
    $("#four").hide(speed)
    $("#three").hide(speed)
    $("#two").hide(speed)
  }
  });

  $( "#ten" ).click(function() {
    game.throw(10);
    updateScore();
  });

  $( "#reset" ).click(function() {
    reset();
  });

  // $("button").click(function() {
  //   updateScore();
  // });

  function showAllButtons() {
    $("button").show(speed)
  };

  function updateScore() {
    $("#frameNumber").text(game.frameNumber);
    $("#throwNumber").text(game.throwNumber);
    $("#score").text(game.displayTotal);
    if (game.throwNumber === 1 || game.throwNumber === 3) {
      showAllButtons()
    }
    fillInScorecard()
    var str = $( "#throwNumber" ).text();
    if (str === "END OF GAME") {
      afterEndGame()
      $("#scoreButtons").hide(speed);
      };
  };

  function updateScoreStart() {
    $("#frameNumber").text(game.frameNumber);
    $("#throwNumber").text(game.throwNumber);
    $("#score").text(game.displayTotal);
    $("#finalScore").text("")
  };

  function fillInScorecard() {
    for (i = 0; i < game.displayFrameTotals.length; i++) {
      $("#marker" + i).text(game.displayFrameTotals[i])
    }

    if (game.frameNumber === 1 && game.throwNumber === 2 || game.frameNumber === 2 && game.throwNumber === 1) {
      $("#frame0").append(game.displayThrows[game.displayThrows.length -1] + " ")
    }

    if (game.frameNumber === 2 && game.throwNumber === 2 || game.frameNumber === 3 && game.throwNumber === 1) {
      $("#frame1").append(game.displayThrows[game.displayThrows.length -1] + " ")
    }

    if (game.frameNumber === 3 && game.throwNumber === 2 || game.frameNumber === 4 && game.throwNumber === 1) {
      $("#frame2").append(game.displayThrows[game.displayThrows.length -1] + " ")
    }

    if (game.frameNumber === 4 && game.throwNumber === 2 || game.frameNumber === 5 && game.throwNumber === 1) {
      $("#frame3").append(game.displayThrows[game.displayThrows.length -1] + " ")
    }

    if (game.frameNumber === 5 && game.throwNumber === 2 || game.frameNumber === 6 && game.throwNumber === 1) {
      $("#frame4").append(game.displayThrows[game.displayThrows.length -1] + " ")
    }

    if (game.frameNumber === 6 && game.throwNumber === 2 || game.frameNumber === 7 && game.throwNumber === 1) {
      $("#frame5").append(game.displayThrows[game.displayThrows.length -1] + " ")
    }

    if (game.frameNumber === 7 && game.throwNumber === 2 || game.frameNumber === 8 && game.throwNumber === 1) {
      $("#frame6").append(game.displayThrows[game.displayThrows.length -1] + " ")
    }


    if (game.frameNumber === 8 && game.throwNumber === 2 || game.frameNumber === 9 && game.throwNumber === 1) {
      $("#frame7").append(game.displayThrows[game.displayThrows.length -1] + " ")
    }

    if (game.frameNumber === 9 && game.throwNumber === 2 || game.frameNumber === 10 && game.throwNumber === 1) {
      $("#frame8").append(game.displayThrows[game.displayThrows.length -1] + " ")
    }

    if (game.frameNumber === 10 && game.throwNumber === 2 || game.frameNumber === 10 && game.throwNumber === 3 || game.throwNumber === "END OF GAME") {
      $("#frame9").append(game.displayThrows[game.displayThrows.length -1] + " ")
    }
  }

  function reset() {
    $("#scoreButtons").show(speed);
    game.resetGame();
    updateScoreStart();
    $("#scorecardTable tr td").html("");
  }

  function afterEndGame() {
    $(".reset").after(
      $("#finalScore").text("Game Over! Final Score:" + game.displayTotal)
    );
  }
});
