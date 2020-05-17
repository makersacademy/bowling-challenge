$(document).ready(function(){

  var scoreboard = new Scoreboard();

  // interface.js
  $("form").submit(function (event) {
    event.preventDefault();
    var roll1 = $('#roll1').val();
    var roll2 = $('#roll2').val();
    scoreboard.input(roll1,roll2);
    $( "span" ).text(scoreboard.scorecardArray()).show();
    return;
  });


});