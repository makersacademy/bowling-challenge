$(document).ready(function(){
  var game = new Game();
  var turn = 1

  function SumTotal(){
    $('#total').html(game.getCurrentScore());
  }

  function SumPreviousFrame(){
    if (game.currentTurn === 1) {
      return game.getCurrentScore()
    }
  }

  function TotalFrameTen(){
    if (game.currentFrame === 10 && game.currentTurn != 1) {
      $("#frame-"+(game.currentFrame)).html(game.getCurrentScore())
    }
  }

  $('#score-button').on('click', function(){
    var score = parseInt($('#score').val())
    $("#"+game.currentFrame+game.currentTurn).html(score);
    game.addPins(score);
    TotalFrameTen()
    $("#frame-"+(game.currentFrame - 1)).html(SumPreviousFrame())
    SumTotal();
    console.log(game)
    console.log(game.isEndOfGame)
  });



  SumTotal()
});
