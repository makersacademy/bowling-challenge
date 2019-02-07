var bowling = new Bowling();

$(document).ready(function(){

	var x = 1;
	var y = 1;

	$('#button1').on('click', function(){
		$('#score' + x).text(bowling.roll(1));
		x++;
	});

	$('#button2').on('click', function(){
		$('#score' + x).text(bowling.roll(2));
		x++;
	});

	$('#button3').on('click', function(){
		$('#score' + x).text(bowling.roll(3));
		x++;
	});

	$('#button4').on('click', function(){
		$('#score' + x).text(bowling.roll(4));
		x++;
	});

	$('#button5').on('click', function(){
		$('#score' + x).text(bowling.roll(5));
		x++;
	});

	$('#button6').on('click', function(){
		$('#score' + x).text(bowling.roll(6));
		x++;
	});

	$('#button7').on('click', function(){
		$('#score' + x).text(bowling.roll(7));
		x++;
	});

	$('#button8').on('click', function(){
		$('#score' + x).text(bowling.roll(8));
		x++;
	});

	$('#button9').on('click', function(){
		$('#score' + x).text(bowling.roll(9));
		x++;
	});

	$('#button10').on('click', function(){
		$('#score' + x).text(bowling.roll(10));
		x++;
	});

});
