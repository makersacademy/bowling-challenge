$(document).ready(function (){

  var game = new Game();

  // if (game.rollCount === 1)
    {$('#frame1_roll1').text(game.rollCount);}

  $( '#bowlingBall' ).click(function() {
    game.rollBall(5);
  });

});



// $('header').text("Bowling game is ready");

//   roll_score.visible = false;
  // var show = false;
// show = true;
// roll_score.visible = true;
//   // $('.roll_score').attr('class', 'visible_form');
// // showFunction();
// showFunction = function() {
// if (show === true) {$('.roll_score').show();}
// else {$('.roll_score').hide();}
// };
