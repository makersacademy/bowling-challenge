$(document).ready( function() {

  var game = new Game();
  var pins = 0;

    $("select.pins").change(function() {
      pins = $(this).children("option:selected").val();
    });

    $('#submit').click( function() {
      $('#f1r1').text(pins);
  });

});
