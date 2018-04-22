function Game(){
  this.frames = [new Frame(1)];
  this.currentFrame = this.frames[0];
  this.state = this.inProgress();
  this.bonus = [];
}

Game.prototype.total = function(){
  let total = 0
  this.frames.forEach(function(frame){
    total += frame.total();
  });
  return total;
};

Game.prototype.roll = function(pinsHit){
	//this.currentFrame.score = pinsHit + this.bonus;
	// extra roll if last frame is spare
	if(pinsHit === 10){

		if(this.currentFrame.roll === 1){
			// deal with strike
			let length = this.frames.length;
			this.frames.push(new Frame(length + 1));
			this.bonus.push({ rolls: 2, frameNumber: length + 1}); // deal with multiple bonuses (array)
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
		if (this.bonus.length !== 0){ // check for bonus in array. remove bonus when applied
			if(this.bonus.rolls === 1){
				this.bonus.rolls--;
				this.currentFrame.score += pinsHit;
				this.frames[this.bonus.frameNumber].score = (this.currentFrame.score + 10);
			}
    }
		else{
      if(this.currentFrame.rolls.length <= 1){
        this.currentFrame.rolls.push(pinsHit);
        console.log("Hit " + pinsHit + " pins down!");
      }
      else{
        this.frames.push(new Frame(this.currentFrame.number + 1));
        this.currentFrame = this.frames[this.frames.length - 1];
        this.roll(pinsHit);
      }
		}
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
