$(document).ready(function(){
	var scorecard = new Scorecard();

	const roll1 = 1;
	const roll2 = 2;
	var frame;

	$userInput = $("#pinfalls .container");
	$userInput.click(function(e){
		var score, frameNo, rollNo; 
		score = parseInt(e.target.innerText); 
		if(!frame) {
			frame = new Frame(score);
			scorecard.add(frame);
		} else {
			frame.add(score);
		}

		frameNo = checkFrame();
		rollNo = checkRoll();
		updateView(score, rollNo, frameNo);

		if (isEndofFrame(rollNo)) {
			var total = scorecard.total(); 
			updateTotal(frameNo, total);
			clearFrame(); 
		}

	});

	function checkFrame(){
		return scorecard.frames().length
	}

	function checkRoll(){
		return frame._pinfalls.second_roll === null ? 1 : 2
	}

	function updateView(score, rollNo, frameNo){
		$(`#frame${frameNo} .roll${rollNo}`).text(score);
	}

	function updateTotal(frameNo, total){
		$(`#frame${frameNo} .total`).text(total);
	}

	function isEndofFrame(roll) {return roll === 2 ? true : false; }
	function clearFrame() { frame = undefined; }
});


