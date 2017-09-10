var game = new Game();

$(document).ready(function(){

	var changeScore = function(){
		for (var i = 0; i <= 10; i++) {
			$(".score-" + i).text(game.score());
		};
		for (var i = 0; i <= 20; i++) {

			$(".turn-" + i).text(game.turns[i - 1]);
			$('.total').text(game.score());
		};
	};

	$('#0').on("click", function(){
		game.roll(0);
		changeScore();
	})

	$('#1').on("click", function(){
		game.roll(1);
		changeScore();
	})

	$('#2').on("click", function(){
		game.roll(2);
		changeScore();
	})

	$('#3').on("click", function(){
		game.roll(3);
		changeScore();
	})

	$('#4').on("click", function(){
		game.roll(4);
		changeScore();
	})

	$('#5').on("click", function(){
		game.roll(5);
		changeScore();
	})

	$('#6').on("click", function(){
		game.roll(6);
		changeScore();
	})

	$('#7').on("click", function(){
		game.roll(7);
		changeScore();
	})

	$('#8').on("click", function(){
		game.roll(8);
		changeScore();
	})

	$('#9').on("click", function(){
		game.roll(9);
		changeScore();
	})

	$('#10').on("click", function(){
		game.roll(10);
		changeScore();
	});
});

	// $('#temperature-down').on('click', function() {
	// 	thermostat.down();
	// 	updateTemperature();
	// })

	// $('#temperature-reset').on('click', function(){
	// 	thermostat.reset();
	// 	updateTemperature();
	// })

	// function updateTemperature(){
	// 	$('#temperature').text(thermostat.temperature);
	// 	if(thermostat.usage() === 'Low-usage!') {
	// 		$('#temperature').css('color', 'lightgreen')
	// 	} else if(thermostat.usage() === 'Medium-usage!') {
	// 		$('#temperature').css('color', 'powderblue')
	// 	} else {
	// 		$('#temperature').css('color','indianred')
	// 	}
	// }



 // for (var i = 1; i <= 10; i ++){
 //      $('#f' + i + 'score').text(bowling.cumulativeScore(i));
 //    };
 //    for (var i = 1; i <= 21; i ++){
 //      $('.box' + i).text(bowling.scoresArray[i - 1]);
 //    };



