$(document).ready(function() {

	let game = new Game;
	let lastGo = 0;

	$('input').on('keydown keyup', function(e){

		// stop e working

		if(e.keyCode == 69){
			e.preventDefault();
		}
	});

	$("input").on('change', function(){

		//if no value given, change to zero

		if (this.value.length == 0){
			this.value = 0;
		}

		// stop user entering more than max

		if (this.value > parseInt(this.max)) {
       		$(this).val(this.max);
    	}

		if(game.frames[this.dataset.frame] == undefined){
			// create new frame
			game.frames.push(new Frame(parseInt(this.value)));
		}else{
			//add throw to existing frame object
			game.frames[this.dataset.frame].throws[this.dataset.go] = parseInt(this.value);
		}

		//add data to previous frame objects

		if(this.dataset.frame > 0){
			game.frames[this.dataset.frame - 1].next = game.frames[this.dataset.frame].throws;
		}

		if(this.dataset.frame > 1){
			game.frames[this.dataset.frame - 2].oneAfter = game.frames[this.dataset.frame].throws;
		}

		//score

		let message;
		let go = this.dataset.go;
		let totalScore = 0;

		game.frames.forEach(function(frame, index) {

			//calculate frame totals and input into html

			let response;
			if(index <= 7){
				response = frame.calculate();
			}else if(index == 8){
				response = frame.calculatePenultimateFrame();
			}else{
				response = frame.calculateLastFrame(go);
			}
			$('#' + index + "total").text(response[0]);
			message = response[1];
			totalScore += response[0];
		});

		// update total score

		$('#totalScore').text(totalScore);

		//update UI if strike, spare, correction, or gutterball

		let messages = ['Nice!', 'Great!', 'Good Work!', 'Amazing!', 'Awesome!', 'Wicked!', 'Sick!'];
		let randomIndex = Math.floor(Math.random() * messages.length); 
		let boringMessage = messages[randomIndex];

		if(parseInt(this.id) > lastGo){
			lastGo = parseInt(this.id);
		}

		if(parseInt(this.id) < lastGo){
			message = 'Correction!'
		}

		if((message!='GAME OVER!!!!!') && (this.value == 0)){
			message = 'GUTTERBALL!'
		}

		if(totalScore == 300){
			message = 'PERFECT!!!!!'
		}

		if(message != null){
			$('#message').text(message);
		}else{
			$('#message').text(boringMessage);
		}

		//enabling/disabling of inputs

		if(message != 'GAME OVER!!!!!'){
			if((this.dataset.go == 0) && (this.value == 10) &&(this.dataset.frame != 9)){
				disable(parseInt(this.id) + 1);
				enable(parseInt(this.id) + 2);
				}else{
				enable(parseInt(this.id) + 1);
				if(this.dataset.frame != 9){
					limit_max_next(parseInt(this.id) + 1, this.value);	
				}else{
					if((this.dataset.go == 0)&&(this.value < 10)){
						limit_max_next(parseInt(this.id) + 1, this.value);
					}else if((this.dataset.go == 1)&&(this.value < 10)){
						$("#21").prop('max', (10 - this.value));
					}
				}
			}
		}
	});
});

// function to enable input

function enable(id){
	$("#" + id).prop('disabled', false);
	$("#" + id).css("background-color", "white");
	$("#" + id).focus();
}

function disable(id){
	$("#" + id).prop('disabled', true);
	$("#" + id).css("background-color", "#819edb");
	$("#" + id).val("");
}

// function to limit next max

function limit_max_next(id, input){
	if(id % 2 == 0){
		$("#" + id).prop('max', (10 - input));
	}
}