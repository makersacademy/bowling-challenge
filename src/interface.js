$(document).ready(function() {

  var game = new Game();


  $(".submitName").click(function() {
    var namePlayer = $(".nameSubmitted").val();
    $("#namePlayerForm").text(namePlayer + " is in the game!");
    if (namePlayer.length > 0) $(".formPlayerInput").hide();
  });


  $("#go1").click(function() {
    game.roll(parseInt($("#I1").val()));
    var newValue = game._runningScore;
    $("#input-I1").text(newValue);
    if (parseInt($("#I1").val()) ==10) {
          $('#go2').hide();
          alert("congrats!")
    }
  });

  $("#go2").click(function() {
    game.roll(parseInt($("#I2").val()));
    var newValue2 = game._runningScore;
    $("#input-I2").text(newValue2);
  });


  $("#go3").click(function() {
    game.roll(parseInt($("#II1").val()));
    var newValue3 = game._runningScore;
    $("#input-II1").text(newValue3);
    if (parseInt($("#I1").val()) ==10) {
          $('#go4').hide();
          alert("congrats!")
    }
  });

  $("#go4").click(function() {
    game.roll(parseInt($("#II2").val()));
    var newValue4 = game._runningScore;
    $("#input-II2").text(newValue4);
  });


  $("#go5").click(function() {
    game.roll(parseInt($("#III1").val()));
    var newValue5 = game._runningScore;
    $("#input-III1").text(newValue5);
    if (parseInt($("#I1").val()) ==10) {
          $('#go6').hide();
          alert("congrats!")
    }
  });

  $("#go6").click(function() {
    game.roll(parseInt($("#III2").val()));
    var newValue6 = game._runningScore;
    $("#input-III2").text(newValue6);
  });

  $("#go7").click(function() {
    game.roll(parseInt($("#IV1").val()));
    var newValue7 = game._runningScore;
    $("#input-IV1").text(newValue7);
    if (parseInt($("#I1").val()) ==10) {
          $('#go8').hide();
          alert("congrats!")
    }
  });

  $("#go8").click(function() {
    game.roll(parseInt($("#IV2").val()));
    var newValue8 = game._runningScore;
    $("#input-IV2").text(newValue8);
  });

  $("#go9").click(function() {
    game.roll(parseInt($("#V1").val()));
    var newValue9 = game._runningScore;
    $("#input-V1").text(newValue9);
    if (parseInt($("#I1").val()) ==10) {
          $('#go10').hide();
          alert("congrats!")
    }
  });

  $("#go10").click(function() {
    game.roll(parseInt($("#V2").val()));
    var newValue10 = game._runningScore;
    $("#input-V2").text(newValue10);
  });



  $("#go11").click(function() {
    game.roll(parseInt($("#VI1").val()));
    var newValue11 = game._runningScore;
    $("#input-VI1").text(newValue11);
    if (parseInt($("#I1").val()) ==10) {
          $('#go12').hide();
          alert("congrats!")
    }
  });

  $("#go12").click(function() {
    game.roll(parseInt($("#VI2").val()));
    var newValue12 = game._runningScore;
    $("#input-VI2").text(newValue12);
  });


  $("#go13").click(function() {
    game.roll(parseInt($("#VII1").val()));
    var newValue13 = game._runningScore;
    $("#input-VII1").text(newValue13);
    if (parseInt($("#I1").val()) ==10) {
          $('#go14').hide();
          alert("congrats!")
    }
  });

  $("#go14").click(function() {
    game.roll(parseInt($("#VII2").val()));
    var newValue14 = game._runningScore;
    $("#input-VII2").text(newValue14);
  });


  $("#go15").click(function() {
    game.roll(parseInt($("#VIII1").val()));
    var newValue15 = game._runningScore;
    $("#input-VIII1").text(newValue15);
    if (parseInt($("#I1").val()) ==10) {
          $('#go16').hide();
          alert("congrats!")
    }
  });

  $("#go16").click(function() {
    game.roll(parseInt($("#VIII2").val()));
    var newValue16 = game._runningScore;
    $("#input-VIII2").text(newValue16);
  });

  $("#go17").click(function() {
    game.roll(parseInt($("#IX1").val()));
    var newValue17 = game._runningScore;
    $("#input-IX1").text(newValue17);
    if (parseInt($("#I1").val()) ==10) {
          $('#go18').hide();
          alert("congrats!")
    }
  });

  $("#go18").click(function() {
    game.roll(parseInt($("#IX2").val()));
    var newValue18 = game._runningScore;
    $("#input-IX2").text(newValue18);
  });

  $("#go19").click(function() {
    game.roll(parseInt($("#X1").val()));
    var newValue19 = game._runningScore;
    $("#input-X1").text(newValue19);
  });


  $("#go20").click(function() {
    game.roll(parseInt($("#X2").val()));
    var newValue20 = game._runningScore;
    $("#input-X2").text(newValue20);
  });



  $("#go21").click(function() {
    game.roll(parseInt($("#X3").val()));
    var newValue20 = game.getScore();
    $("#input-X3").text(newValue20);
    alert(newValue20 + " is your final Score!!");
  });


});
