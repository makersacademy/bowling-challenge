$(document).ready(function() {
  var game = new Game();

  function updateTotalScore() {
    $("#totalscore").html('Total Score: ' + game._showtotalscore());
  }

  function updateCount() {
    $('#count1').html('Round: ' + game._showcount());
  }

  function endgame(){
    if(game.endGame() === true){
      $('#end').html('The game has ended!')
    };
  };


  $('#submitpins').click(function(){
    var pins = parseInt($('#pins').val())
    game.playRound1(pins);
    updateTotalScore();
    updateCount();
    if(pins === 10){
      $('#pins').val('');
    }
    endgame()
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
endgame()

});
