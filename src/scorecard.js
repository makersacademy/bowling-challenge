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
		this._sum = this._frames.reduce((frame1, frame2) => frame1.total() + frame2.total()); 
		return this._sum; 
	}
}