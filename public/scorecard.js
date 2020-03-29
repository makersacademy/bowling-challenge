class Scorecard {
	constructor(){
		this._frames = [];
	}

	frames(){
		return this._frames;
	}

	add(frame) {
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

	total(frameNo = null) {
		let sum = 0;
		var self = this;
		let endPoint = function(){ 
			return frameNo === null ? self._frames.length : frameNo;
		};

		for(var i = 0; i < endPoint(); i++){
			sum += this._frames[i].frame.total();
		} 
		return sum; 
	}
}