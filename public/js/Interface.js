
$( document ).ready(function () {
  var game = new Game();


  function update() {
    $(".frame").text(game.currentFrame);
    $(".roll").text(game.currentRoll);
    $(".score").text(game.scoreTotal);
    $(".hits").text(game.lastRollScore);
    if (game.gameOver) {
      endGame();
    } else if (game.scoreMode === "spare") {
      message("SPARE!");
      $(":hidden").show("slow");
    } else if (game.pins < 10) {
      for (var i = 1; i <= (10 - game.pins); i++) {
        $('#'+i.toString()).hide("slow");
      }
    } else if (game.lastRollScore === 10) {
      message("STRIKE!");
      $(":hidden").show("slow");
    } else {
      $(":hidden").show("slow");
    }
  };

  function message(message) {
    $("#message").text(message);
    for (var i = 1; i <= 3; i++) {
      messageFlash();
    }
  };

  function messageFlash() {
    $("#message").fadeIn('slow', function() {
    $(this).css({"visibility":"visible"});
    });
    $("#strike").fadeIn('slow', function() {
    $(this).css({"visibility":"visible"});
    });
    $("#message").fadeOut('slow', function() {
    $(this).css({"visibility":"hidden"});
    });
    $("#strike").fadeOut('slow', function() {
    $(this).css({"visibility":"hidden"});
    });
  };

  function endGame() {
    $("#ball").hide();
    $(".end").css({"visibility":"visible"});
  }



  function play() {
    game.roll();
    update();
    $(".intro").hide();
    $("#ball").css({'top':'+=280px', 'width':'+=70px'});
  };

  update();

  $('#ball').click(function() {
    $(".intro").hide();
    $("#ball").animate({
        top: "-=280px",
        width: "-=70px",
      }, "slow", function(){play()});
    });

});
