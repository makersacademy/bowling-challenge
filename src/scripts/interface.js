$(document).ready(function() {

  var game = new Game;

  showScores();
  
  function showScores() { 
    $("#f1-r1").html(game.totalScores[0][0]);
    $("#f1-r2").html(game.totalScores[0][1]);
    $("#f1-total").html(game.totalScores[0][2]);
    $("#f2-r1").html(game.totalScores[1][0]);
    $("#f2-r2").html(game.totalScores[1][1]);
    $("#f2-total").html(game.cummulativeScore[1]);
    $("#f3-r1").html(game.totalScores[2][0]);
    $("#f3-r2").html(game.totalScores[2][1]);
    $("#f3-total").html(game.cummulativeScore[2]);
    $("#f4-r1").html(game.totalScores[3][0]);
    $("#f4-r2").html(game.totalScores[3][1]);
    $("#f4-total").html(game.cummulativeScore[3]);
    $("#f5-r1").html(game.totalScores[4][0]);
    $("#f5-r2").html(game.totalScores[4][1]);
    $("#f5-total").html(game.cummulativeScore[4]);
    $("#f6-r1").html(game.totalScores[5][0]);
    $("#f6-r2").html(game.totalScores[5][1]);
    $("#f6-total").html(game.cummulativeScore[5]);
    $("#f7-r1").html(game.totalScores[6][0]);
    $("#f7-r2").html(game.totalScores[6][1]);
    $("#f7-total").html(game.cummulativeScore[6]);
    $("#f8-r1").html(game.totalScores[7][0]);
    $("#f8-r2").html(game.totalScores[7][1]);
    $("#f8-total").html(game.cummulativeScore[7]);
    $("#f9-r1").html(game.totalScores[8][0]);
    $("#f9-r2").html(game.totalScores[8][1]);
    $("#f9-total").html(game.cummulativeScore[8]);
    $("#f10-r1").html(game.totalScores[9][0]);
    $("#f10-r2").html(game.totalScores[9][1]);
    $("#f11-r1").html(game.totalScores[10][0]);
    $("#f10-total").html(game.cummulativeScore[9]);
    $(".buttons").html(buttonBuilder());
  }

  function buttonBuilder() {
    var buttonList = '';
    for(var i = 0; i < game.pinsStanding + 1; i++) {
      buttonList += "<button id='btn_" + i + "'>" + i + "</button>";
    }
    return buttonList;
  }
  
  //button event handlers
  $(document.body).on('click', '#btn_0',function() {
     game.recordBowl(0);
     showScores();
  }); 
  $(document.body).on('click', '#btn_1',function() {
     game.recordBowl(1);
     showScores();
  }); 
  $(document.body).on('click', '#btn_2',function() {
    game.recordBowl(2);
    showScores();
  }); 
  $(document.body).on('click', '#btn_3',function() {
    game.recordBowl(3);
    showScores();
  });
  $(document.body).on('click', '#btn_4',function() {
    game.recordBowl(4);
    showScores();
  }); 
  $(document.body).on('click', '#btn_5',function() {
    game.recordBowl(5);
    showScores();
  }); 
  $(document.body).on('click', '#btn_6',function() {
    game.recordBowl(6);
    showScores();
  }); 
  $(document.body).on('click', '#btn_7',function() {
    game.recordBowl(7);
    showScores();
  }); 
  $(document.body).on('click', '#btn_8',function() {
    game.recordBowl(8);
    showScores();
  }); 
  $(document.body).on('click', '#btn_9',function() {
    game.recordBowl(9);
    showScores();
  }); 
  $(document.body).on('click', '#btn_10',function() {
    game.recordBowl(10);
    showScores();
    stopPrevious();
    $('.lane').animate({left: '80%'}, 'slow', function() {
      $('.notification').slideDown(800).delay(800).slideUp(1, function() {
      	$('.lane').animate({left: '0'}, 1);
      })
    });
  });

  function stopPrevious() {
    $('.lane').clearQueue();
    $('.lane').stop();
    $('.notification').clearQueue();
    $('.notification').stop();
  }
});