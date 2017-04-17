$( document ).ready(function() {

  $('#tableName').hide();

  $('#newGame').on('click', function() {
    game = new BowlingGame();
    $("#newGame").fadeOut(700);
    $('#tableName').show();
    // table = new tableCreate();
  });

});
