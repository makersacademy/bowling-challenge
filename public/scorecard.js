class Scorecard {
	constructor(){
		this._frames = [];
		this._sum = 0;
	}
	frames(){
		return this._frames;
	}
	add(frame) {
		this._frames.push(frame);
		return this._frames;
	}
	total() {
		this._frames.forEach( frame => this._sum += frame.total()); 
		return this._sum; 
	}
}