class Scorecard {
	constructor(){
		this._frames = [];
		this._sum = 0;
		this._gameOver = false;
	}
	frames(){
		return this._frames;
	}
	add(frame) {
		if(this._gameOver){ throw new Error("Game Over"); }
		this._frames.push(frame);
		return this._frames;
	}
	total() {
		if(this._frames.length === 1) {
			this._sum = this._frames[0].total();
		}
		else{
			this._sum = 0;
			this._frames.forEach(frame => this._sum += frame.total()); 
		}
		return this._sum; 
	}
	endGame() {
		this._gameOver = true;
	}

	bonus(bonus){
		if(!this._gameOver){ throw new Error('Game ongoing, bonus error'); }
		this._sum += bonus;
		return this._sum;
	}
}