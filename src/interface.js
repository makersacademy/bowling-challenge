$ (document).ready(function(){
var bowling = new Bowling ();

$('#roll').click(function(){
 bowling.pinsKnockedOver();
 $('#pins').html(bowling.pinsKnockedOver());
});
$('#pins').html(bowling.pinsKnockedOver());

$('#reset').click(function(){
 bowling.reset();
});




});
