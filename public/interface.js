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
		if(isEndofFrame()){ clearFrame(rollNo, score);}
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
		let toBeCompleted = scorecard._frames.filter((frame) => !frame.completed());
		let frames = toBeCompleted.map(frame => frame.frame );
		frames.forEach(function(frame){
			if(frame._isStrike() && frame._bonus < 2){ frame.addBonus(score); }
			if(frame._isSpare()){ frame.addBonus(score); }
		})
	}

	function updateTotal(frameNo){
		try {
			let total = scorecard.total();
			$(`#frame${frameNo} .total`).text(total);}
		catch {
			$(`#frame${frameNo} .total`).text(''); 
			if(frameNo > 1) { 
				try { 
					let total = scorecard.total(frameNo - 1);
					$(`#frame${frameNo - 1} .total`).text(total);}
				catch {
					if(frameNo > 2){ updateTotal(frameNo - 2); };
				};
			};
		};
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

	function isCompleted(frameNo){
		return scorecard.frames()[frameNo].completed;
	}

  function gameOver(){ if(scorecard._gameOver) {return true}; }
	function endGame(){ scorecard.endGame(); }
});



