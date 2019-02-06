var bowling = new Bowling();

$(document).ready(function(){

	$('#button1').on('click', function(){
		$('#score1').text(bowling.roll(1));
	});


});
