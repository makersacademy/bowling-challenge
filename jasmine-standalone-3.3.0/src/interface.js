$( document ).ready(function() {
  var game = new Game;

  $("#Frame1").toggle(1000).toggle(1000);
  $("#Frame2").toggle(1000).toggle(1000);
  $("#Frame3").toggle(1000).toggle(1000);
  $("#Frame4").toggle(1000).toggle(1000);
  $("#Frame5").toggle(1000).toggle(1000);
  $("#Frame6").toggle(1000).toggle(1000);
  $("#Frame7").toggle(1000).toggle(1000);
  $("#Frame8").toggle(1000).toggle(1000);
  $("#Frame9").toggle(1000).toggle(1000);
  $("#Frame10").toggle(1000).toggle(1000);


  function update() {
    $("#currentFrames").html(game.start());
  }
  update();

  $("#Frame1").on('click', function() {
    $("#Frame1").html("--->")
    $(game.roll);
  });
  $("#Frame2").on('click', function() {
    $("#Frame2").html("--->")
    $(game.roll);
  });
  $("#Frame3").on('click', function() {
    $("#Frame3").html("--->")
    $(game.roll);
  });
  $("#Frame4").on('click', function() {
    $("#Frame4").html("--->")
    $(game.roll);
  });
  $("#Frame5").on('click', function() {
    $("#Frame5").html("--->")
    $(game.roll);
  });
  $("#Frame6").on('click', function() {
    $("#Frame6").html("--->")
    $(game.roll);
  });
  $("#Frame7").on('click', function() {
    $("#Frame7").html("--->")
    $(game.roll);
  });
  $("#Frame8").on('click', function() {
    $("#Frame8").html("--->")
    $(game.roll);
  });
  $("#Frame9").on('click', function() {
    $("#Frame9").html("--->")
    $(game.roll);
  });
  $("#Frame10").on('click', function() {
    $("#Frame10").html("--->")
    $(game.roll);
  });

});
