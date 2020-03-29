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
		updateTotal(frameNo);
		if(isEndofFrame(rollNo, score)){ clearFrame(); };
	});

	function hasFinalBonus() {
		let lastFrame = scorecard.frames()[lastFrameIndex];
		if(lastFrame._isStrike || lastFrame._isSpare){ return true }
	}

  function gameOver(){ if(scorecard._gameOver) {return true} }
	function endGame(){ scorecard.endGame() }
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

	function updateTotal(frameNo){
		try {
			let total = scorecard.total();
			$(`#frame${frameNo} .total`).text(total);}
		catch {
			$(`#frame${frameNo} .total`).text(''); 
		}
	}

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

	function isCompleted(frameNo){
		return scorecard.frames()[frameNo].completed;
	}


});



