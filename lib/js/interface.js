$(document).ready(function(){
  var game = new Game();
  var knockedPins;

  $('#enter-name').submit(function(event) {
    event.preventDefault();
    var name = $('#name-entry').val();
    $('#player-name').text(name);
  });

  $('#roll').click(function(event) {
    knockedPins = Math.floor(Math.random() * 11);
    $('#1a').text(knockedPins);
  });

});
