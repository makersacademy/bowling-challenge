class Scorecard {
	constructor(){
		this._frames = [];
		this._sum = 0;
		this._gameOver = false;
	}

	frames(){
		return this._frames;
	}

	hasIncompleteFrames(){
		let incomplete = this._frames.filter((frame) => !frame.completed());
		return incomplete.length ? true : false
	}

	add(frame) {
		if(this._gameOver){ throw new Error("Game Over"); }
		let hash = { 
			frame: frame, 
			completed: function(){ 
				try { 
					this.frame.total(); return true;
				} catch { return false; }
			} 
		};
		this._frames.push(hash);
	}

	total() {
		if(this.hasIncompleteFrames()){ throw new Error('Incomplete frames'); }
		this._sum = 0;
		this._frames.forEach(frame => this._sum += frame.frame.total()); 
		return this._sum; 
	}
	endGame() {
		this._gameOver = true;
	}
}