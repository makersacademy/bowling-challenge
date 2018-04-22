function Game(){
  this.frames = [new Frame(1)];
  this.currentFrame = this.frames[0];
  this.state = this.inProgress();
  this.bonus = [];
}

Game.prototype.total = function(){
  let total = 0;
  this.frames.forEach(function(frame){
    total += frame.calcTotal();
  });
  return total;
};

Game.prototype.nextFrame = function(){
	this.frames.push(new Frame(this.currentFrame.number + 1));
	this.currentFrame = this.frames[this.frames.length - 1];
};

Game.prototype.roll = function(pinsHit){
	//this.currentFrame.score = pinsHit + this.bonus;
	// extra roll if last frame is spare

	// 3 cases: 0 rolls made: make 1st roll - deal with strike, 1 roll made, 2nd roll - spares, 2 rolls made: throw error if isn't last frame with bonus
	switch(this.currentFrame.rolls.length){
		case 0:
			if(this.bonus.length !== 0 && this.bonus[0].rolls[1] === '/'){
				this.bonus[0].total = pinsHit + 10;
				this.bonus.shift();
			}
			if(pinsHit === 10){
				this.currentFrame.rolls.push('X');
				console.log("Strike!");
				this.bonus.push(this.currentFrame);
				this.nextFrame();
			}
			else {
				this.currentFrame.rolls.push(pinsHit);
				console.log("First roll: " + pinsHit);
			}
			break;
		case 1:
			if(this.bonus.length !== 0 && this.bonus[0].rolls[0] === 'X'){
				this.bonus[0].total = this.currentFrame.rolls[0] + pinsHit + 10;
				this.bonus.shift();
			}
			if(pinsHit + this.currentFrame.rolls[0] === 10){
				this.currentFrame.rolls.push('/');
				console.log("Spare!");
				this.bonus.push(this.currentFrame);
			}
			else{
				this.currentFrame.rolls.push(pinsHit);
				console.log("Second roll: " + pinsHit);
			}
			this.nextFrame();
			break;
		case 2:
			this.currentFrame.rolls.push(pinsHit);
			console.log("Third roll!");
			break;
		default:
			console.log("Invalid");
			break;
	}
	// if(pinsHit === 10){
	// 	if(this.currentFrame.rolls.length === 0){
	// 		// deal with strike
     //  this.currentFrame.rolls.push('X');
     //  console.log("Strike!");
     //  this.frames.push(new Frame(this.currentFrame.number + 1));
	// 		this.bonus.push({ roll: 1, frameNumber: this.currentFrame.number}); // deal with multiple bonuses (array)
	// 		this.currentFrame = this.frames[this.frames.length - 1];
	// 	}
	// 	else if(this.currentFrame.rolls.length === 1){
	// 		// deal with spare
	// 		this.currentFrame.rolls.push('/');
     //  console.log("Spare!");
     //  this.frames.push(new Frame(this.currentFrame.number + 1));
     //  this.bonus.push({roll: 2, frameNumber: this.currentFrame.number});
	// 	}
	// 	else{
	// 		// Final extra roll
	// 		this.currentFrame.score += pinsHit;
	// 	}
	// }
	// else{
	// 	if (this.bonus.length !== 0){ // check for bonus in array. remove bonus when applied
	// 		if(this.bonus.roll === 1){
	// 			this.bonus.rolls--;
	// 			this.currentFrame.rolls.push(pinsHit);
	// 			this.frames[this.bonus.frameNumber - 1].rolls = (this.currentFrame.score + 10);
	// 		}
	// }
	// 	else{
     //  if(this.currentFrame.rolls.length <= 1){
     //    this.currentFrame.rolls.push(pinsHit);
     //    console.log("Hit " + pinsHit + " pins down!");
     //  }
     //  else{
     //    this.frames.push(new Frame(this.currentFrame.number + 1));
     //    this.currentFrame = this.frames[this.frames.length - 1];
     //    this.roll(pinsHit);
     //  }
	// 	}
	// }
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
