$('document').ready(function() {

  $(document).on("click", "#submit-name", function() {
    if ($('#player-name').val() !== "") {
      var player_name = $('#player-name').val();
      $('#player-name-box').append(player_name);
      $('#name-input-form').hide();
      $('.score-buttons').show();
      $('#new-game').show();
    }
  });
    
  var Frame = FrameFile.Frame;
  var Game = OnePlayerGameFile.Game;
  var game = new Game();
  $(document).on("click", ".score-buttons button", function() {

  });
});
