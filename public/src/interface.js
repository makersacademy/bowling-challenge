$( document ).ready(function() {
  var game = new Game

  const speed = 300

  $( "#zero" ).click(function() {
  game.throw(0);
  updateScore();
});

  $( "#one" ).click(function() {
  game.throw(1);
  updateScore();
  if (game.throwNumber === 2) {
    $("#ten").hide(200)
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
  game.resetGame();
  updateScore();
  showAllButtons();
  });

  $("button").click(function() {
    updateScore();
  });

  function showAllButtons() {
    $("button").show(speed)
  };

  function updateScore() {
    $('#frameNumber').text(game.frameNumber);
    $('#throwNumber').text(game.throwNumber);
    $('#score').text(game.showTotal);
    $('#throws').text(game.throws);
    $('#scorecard').text(game.frameRunningTotals)
    if (game.throwNumber === 1 || game.throwNumber === 3) {
      showAllButtons()
    }
  };
});
