$(document).ready(function() {
  var game = new Game();

  function updateTotalScore() {
    $("#totalscore").html('Total Score: ' + game._showtotalscore());
  }

  function updateCount() {
    $("#count").html('Round: ' + game.showcount());
  }


  $('#submitpins').click(function(){
    var pins = parseInt($('#pins').val())
    game.playRound1(pins);
    updateTotalScore();
    updateCount();
    if(pins === 10){
      $('#pins').val('');
    }
  });

  $('#submitpins2').click(function(){
    var pins2 = parseInt($('#pins2').val())
    game.playRound2(pins2);
    updateTotalScore();
    updateCount();
    $('#pins').val('');
    $('#pins2').val('');
  });



updateCount()
updateTotalScore()

});
