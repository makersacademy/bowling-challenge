var bowling = new Bowling();

$(document).ready(function(){
	$('#button1').click(function(){
		bowling.push(1);
		bowling.score();
	});
});
