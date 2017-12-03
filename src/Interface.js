$(document).ready(function(){
  var game = new Game();
  var turn = 1

  function SumTotal(){
    $('#total').html(game.getCurrentScore());
  }


  $('#score').on('change',function(){
    var score = parseInt($('#score').val())
    game.addPins(score);
    SumTotal();
    console.log(game)
  });

  SumTotal()
});
