$(document).ready(function() {
  var game = new Game();

  ongoingTotal();

  $('#one').click(function(){
     game.shot(1);
   });


   function ongoingTotal(){
     $('#total').text(game.score())
   }
 });
