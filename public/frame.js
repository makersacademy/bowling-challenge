class Frame {
	constructor(first_roll){
		this._pinfalls = 
		{
				first_roll: first_roll,
				second_roll: null 
		}; 

		this._bonus = 0;
		this._isStrike = false;
		this._isSpare = false;
	}

	add(second_roll){
		if(second_roll + this._pinfalls.first_roll > 10) {
			throw new Error('Maximum possible score of each frame is 10.');
		}
		this._pinfalls.second_roll = second_roll;
	}

	pinfalls(){
		if(this._isStrike) {
			return 10;
		}
		if(this._pinfalls.second_roll === null) {
			return this._pinfalls.first_roll;
		}
		return this._pinfalls.first_roll + this._pinfalls.second_roll;
	}

	bonus(bonus = 0){
		return this._bonus += bonus;
	}

	total() {
		if(this._pinfalls.second_roll === null){
			throw new Error('Total score unavailable due to ongoing game.')
		}
		return this.pinfalls() + this.bonus();
	}

	recordStrike(){
		if(this._pinfalls.first_roll !== 10){
			throw new Error('Not a strike');
		}
		this._isStrike = true;
		this._pinfalls.second_roll = 0;
	}

	recordSpare() {
		if(this._isStrike){ throw new Error("Not a Spare, but a Strike!")};
		if(this.total() !== 10){ throw new Error("Not a Spare, less than 10 pins down")};
		this._isSpare = true;
	}
}