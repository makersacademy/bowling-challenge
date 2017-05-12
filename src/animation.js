$(document).ready(function() {


  var game = new Game();

  $(".game").hide();

  $("button.new-game").click( function() {
      $(".game").show();
      $(".strike").hide();
      $(".spare").hide();
      $("button.new-game").hide();
  })

  function update() {
  $("#score").text(game.score);
  $("#frame").text(game.frame);
  $("#pins").text(game.pins);
  $("#last-roll").text(game.lastRoll);
  }

  update();
  $("button.roll").click(function(){
      $(".strike").hide();
      $(".spare").hide();

    game.roll();
    if(game.isStrike){
        $(".strike").show();
    } else if(game.isSpare) {
        $(".spare").show();
    }
    update();
  });


});
