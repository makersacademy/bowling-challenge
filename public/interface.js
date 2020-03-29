$(document).ready(function(){
	var scorecard = new Scorecard();

	const roll1 = 1;
	const roll2 = 2;
	const lastFrameIndex = 9;
	const strike = "X";
	const spare = "/";
	var frame;

	$userInput = $("#pinfalls .container");
	$userInput.click(function(e){
		var score, frameNo, rollNo; 
		score = parseInt(e.target.innerText); 
		frameNo = checkFrame(score);
		rollNo = checkRoll();

		updateRoll(score, rollNo, frameNo);
		updateBonus(frameNo, score);
		updateTotal(frameNo);

		if(isEndofFrame(rollNo, score)){ clearFrame(rollNo, score);}
	});

	function checkFrame(score){
		if(!frame) {
			frame = new Frame(score);
			scorecard.add(frame);
		} else {
			frame.add(score);
		}
		return scorecard.frames().length
	}

	function checkRoll(){
		return frame._pinfalls.second_roll === null ? roll1 : roll2
	}

	function updateBonus(frameNo, score){
		let bonusFrames = scorecard._frames
				.filter((frame, index)=> !frame.completed() && index !== frameNo - 1)
				.map(frame => frame.frame);

		bonusFrames.forEach(frame => frame.addBonus(score));
	}

	function updateTotal(frameNo){
		for(var i = frameNo; i > 0; i--){
			try {
				let total = scorecard.total(i);
				$(`#frame${i} .total`).text(total);}
			catch { 
				$(`#frame${i} .total`).text('');}
		}
	};

	function updateRoll(score, rollNo, frameNo){
		if(frame._isStrike()){ 
			$(`#frame${frameNo} .roll${roll2}`).text(strike);
			return;
		} 
		if(rollNo == roll2 && frame._isSpare()){ 
			$(`#frame${frameNo} .roll${rollNo}`).text(spare);
			return;
		}
		else {
		  $(`#frame${frameNo} .roll${rollNo}`).text(score);
		  return;
		}
	}

	function clearFrame() { frame = undefined; }
	function isEndofFrame(rollNo, score) {
		if(frame._isStrike()){ return true };
		return rollNo === 2 ? true : false;
	}

});



