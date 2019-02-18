$(document).ready(function() {
 var game = new Game();

 $('.btn btn-primary').each(function(elem) {
   $(this).click(function(e) {
     game.roll($(this).val());
   });
 });

});
