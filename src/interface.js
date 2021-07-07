$( document ).ready(function() {
  var game = new Game();

  function update(){
    $('#total').text(game.score());
  }

  $('#ball-values').click(function( event ) {
    game.roll();
    update();
  });


});




