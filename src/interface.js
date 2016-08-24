var game = new Game();

function update(){
  $("#framenumber").text(game.getFrameNumber());
  $("#currentroll").text(game.frame.getCurrentRoll());
}

$(document).ready(function(){

  $("#start").click(function(){
    $("#status").text("Game started!")
    game.begin();
    update();
  })

  $("#1").click(function(){
    game.start();
    $("#1a").text(game.score.getGameTotal());
    update();
  })

  $("#2").click(function(){
    game.start();
    $("#2a").text(game.score.getGameTotal());
    update();
  })

  $("#3").click(function(){
    game.start();
    $("#3a").text(game.score.getGameTotal());
    update();
  })

  $("#4").click(function(){
    game.start();
    $("#4a").text(game.score.getGameTotal());
    update();
  })

  $("#5").click(function(){
    game.start();
    $("#5a").text(game.score.getGameTotal());
    update();
  })

  $("#6").click(function(){
    game.start();
    $("#6a").text(game.score.getGameTotal());
    update();
  })

  $("#7").click(function(){
    game.start();
    $("#7a").text(game.score.getGameTotal());
    update();
  })

  $("#8").click(function(){
    game.start();
    $("#8a").text(game.score.getGameTotal());
    update();
  })

  $("#9").click(function(){
    game.start();
    $("#9a").text(game.score.getGameTotal());
    update();
  })

  $("#10").click(function(){
    game.start();
    $("#10a").text(game.score.getGameTotal());
    update();
  })

  $("#get_total").click(function(){
    $("#status").text("Game ended!")
    $("#total").text(game.score.getGameTotal());
  })

});
