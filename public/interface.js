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
		if(frameNo !== 1){checkPrevBonus((frameNo - 2), score, rollNo)};
		if(gameOver() && hasFinalBonus()){
			scorecard.bonus(score);
			updateRoll(score, rollNo, frameNo);
			clearFrame();
		}
		updateRoll(score, rollNo, frameNo);
	});

	function checkPrevBonus(frameNo, score, rollNo){
		let prevFrame = scorecard.frames()[frameNo];
		if(prevFrame._isStrike){
			prevFrame.bonus(score);
		}else if (prevFrame._isSpare && rollNo === roll1){
			prevFrame.bonus(score)
		}
		return
	}
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
	function updateTotal(frameNo, strikeOrSpare = false){
		let total = scorecard.total();
		if(strikeOrSpare){ $(`#frames${frameNo} .total`).css('display', 'none'); }
		$(`#frame${frameNo} .total`).text(total);
		if(frameNo === 10){ endGame(); }
		clearFrame();
	}
	function updateRoll(score, rollNo, frameNo){
		if(isEndofFrame(rollNo, score)){
			if(isStrike(rollNo, score)){
				$(`#frame${frameNo} .roll${roll2}`).text(strike);
				frame.recordStrike();
				updateTotal(frameNo, true);
			} 
			else if(isSpare(rollNo, frameNo)){ 
				$(`#frame${frameNo} .roll${rollNo}`).text(spare);
			  frame.recordSpare();
			  updateTotal(frameNo, true); 
			}
			else 
				$(`#frame${frameNo} .roll${rollNo}`).text(score);
				updateTotal(frameNo, false);
		} 
	  else { $(`#frame${frameNo} .roll${rollNo}`).text(score); };
	}

	function clearFrame() { frame = undefined; }

	function isEndofFrame(rollNo, score) {
		if(isStrike(rollNo, score)){ return true }
		return rollNo === 2 ? true : false;
	}

	function isSpare(rollNo, frameNo){ 
		let frameTotal = frame.total();
		return rollNo === roll2 && frameTotal === 10 ? true : false }
	function isStrike(rollNo, score){
		return rollNo === roll1 && score === 10 ? true : false
	}

});



