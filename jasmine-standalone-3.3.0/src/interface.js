$( document ).ready(function() {
  var game = new Game;

  $("#Roll").toggle(1000).toggle(1000);


  function update() {
    $("#currentFrames").html(game.start());
  }
  update();

  $("#Roll").on('click', function() {
    $("#Roll").html("Roll 1")
    $(game.roll);
  });

});
