var game = new Game();

$(document).ready(function(){

  $("#start").click(function(){
    game.begin();
  })

  $("#1").click(function(){
    game.start();
    $("#1a").text(game.score.getGameTotal());
  })

  $("#2").click(function(){
    game.start();
    $("#2a").text(game.score.getGameTotal());
  })

  $("#3").click(function(){
    game.start();
    $("#3a").text(game.score.getGameTotal());
  })

  $("#4").click(function(){
    game.start();
    $("#4a").text(game.score.getGameTotal());
  })

  $("#5").click(function(){
    game.start();
    $("#5a").text(game.score.getGameTotal());
  })

  $("#6").click(function(){
    game.start();
    $("#6a").text(game.score.getGameTotal());
  })

  $("#7").click(function(){
    game.start();
    $("#7a").text(game.score.getGameTotal());
  })

  $("#8").click(function(){
    game.start();
    $("#8a").text(game.score.getGameTotal());
  })

  $("#9").click(function(){
    game.start();
    $("#9a").text(game.score.getGameTotal());
  })

  $("#10").click(function(){
    game.start();
    $("#10a").text(game.score.getGameTotal());
  })

  $("#get_total").click(function(){
    $("#total").text(game.score.getGameTotal());
  })

});
