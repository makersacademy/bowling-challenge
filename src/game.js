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
		if(this.currentFrame.rolls.length === 0){
			// deal with strike
      this.currentFrame.rolls.push('X');
      console.log("Strike!");
      this.frames.push(new Frame(this.currentFrame.number + 1));
			this.bonus.push({ roll: 1, frameNumber: this.currentFrame.number}); // deal with multiple bonuses (array)
			this.currentFrame = this.frames[this.frames.length - 1];
		}
		else if(this.currentFrame.rolls.length === 1){
			// deal with spare
			this.currentFrame.rolls.push('/');
      console.log("Spare!");
      this.frames.push(new Frame(this.currentFrame.number + 1));
      this.bonus.push({roll: 2, frameNumber: this.currentFrame.number});
		}
		else{
			// Final extra roll
			this.currentFrame.score += pinsHit;
		}
	}
	else{
		if (this.bonus.length !== 0){ // check for bonus in array. remove bonus when applied
			if(this.bonus.roll === 1){
				this.bonus.rolls--;
				this.currentFrame.rolls.push(pinsHit);
				this.frames[this.bonus.frameNumber - 1].rolls = (this.currentFrame.score + 10);
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
