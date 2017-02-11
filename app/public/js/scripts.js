$(document).ready(function() {
  console.log('ready!');
  var game = new Game();

  $("#accordion").accordion();

  $(".button-start").click(function(){
      $(".button-start").fadeOut("slow");
  })

  $(".button-roll").on('click', function(){
      game.roll();
  })

  $(".button-roll-again").click(function(){
      game.roll();
  })

  $(".button-get-result").on('click', function(){
      game.getScore();
  })

  $(".button-reset").on('click', function(){
      game.reset();
      $(".button-start").click(function(){
          $(".button-start").fadeIn("slow");
      })
  })
})
