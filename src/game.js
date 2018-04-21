function Game(){
  this.frames = [new Frame(1, 0)];
  this.currentFrame = this.frames[0];
  this.state = this.inProgress();
}

Game.prototype.roll = function(pinsHit){
	this.currentFrame.score = pinsHit + this.bonus;
	// extra roll if last frame is spare
	if(pinsHit === 10){

		if(this.currentFrame.roll === 1){
			// deal with strike

			let length = this.frames.length;
			this.frames.push(new Frame(length + 1));
			this.bonus = { rolls: 2, frameNumber: length + 1};
			this.currentFrame = this.frames[length];
		}
		else if(this.currentFrame.roll === 2){
			// deal with spare
			this.currentFrame.score = -2;
		}
		else{
			// Final extra roll
			this.currentFrame.score += pinsHit;
		}
	}
	else{
		if(this.bonus.rolls !== 0){
			if(this.bonus.rolls === 1){
				this.bonus.rolls--;
				this.currentFrame.score += pinsHit;
				this.frames[this.bonus.frameNumber].score = this.currentFrame.score + 10;
			}
			else{
				this.frames.push(new Frame(this.frames.length + 1))
				this.currentFrame.score += pinsHit
			}
		}
	}
	this.currentFrame.roll++;


	if(pinsHit !== 10 && this.currentFrame.roll !== 2){
		console.log("Hit " + pinsHit + " pins down!");
		this.currentFrame.roll++; // only on roll 1
		this.score = pinsHit;
	}
	if(score === this.score){
		this.finishFrame(true);
	}
	else{
		this.finishFrame(false)
	}
};

Game.prototype.finishFrame = function(scoreFinal){

};

Game.prototype.inProgress = function(){
	if(this.currentFrame.number === 1 && this.currentFrame.roll === 1){
		return false;
	}
	else{
		return true;
	}
};