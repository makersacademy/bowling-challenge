$(document).ready(function() {

  var game = new Game();
  $('#score').text(game.score());

  $('button').click(function(){
    var id = $(this).data('id')
    game.roll(id);
    $('#score').text(game.score());
});


});
