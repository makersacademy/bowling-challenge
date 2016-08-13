$(document).ready(function(){
  var game = new Game();

  $('#enter-name').submit(function(event) {
    event.preventDefault();
    var name = $('#name-entry').val();
    $('#player-name').text(name);
  });

  

});
