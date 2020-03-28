$(document).ready(function(){
	var scorecard = new Scorecard();

	const roll1 = 1;
	const roll2 = 2;
	const strike = "X";
	const spare = "/";
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
			clearFrame();}

	});

	function checkFrame(){
		return scorecard.frames().length
	}

	function checkRoll(){
		return frame._pinfalls.second_roll === null ? roll1 : roll2
	}
	function isSpare(total){ return total === 10 ? true : false }
	function isStrike(rollNo, score){
		return rollNo === roll1 && score === 10 ? true : false
	}

	function updateTotal(frameNo, total){
		if(isSpare(total)){ $(`#frame${frameNo} .roll${roll2}`).text(spare); }
		$(`#frame${frameNo} .total`).text(total);
	}
	function updateView(score, rollNo, frameNo){
		if(isStrike(rollNo, score)){
			$(`#frame${frameNo} .roll${roll2}`).text(strike);} 
		else 
			{$(`#frame${frameNo} .roll${rollNo}`).text(score);}
	}

	function isEndofFrame(roll) {return roll === 2 ? true : false; }
	function clearFrame() { frame = undefined; }
});


