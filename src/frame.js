class Frame {
	constructor(first_roll){
		this._pinfalls = 
		{
				first_roll: first_roll,
				second_roll: null 
		}; 

		this._bonus;
	}

	add(second_roll){
		if(second_roll + this._pinfalls.first_roll > 10) {
			throw new Error('Maximum possible score of each frame is 10.');
		}
		this._pinfalls.second_roll = second_roll;
	}

	pinfalls(){
		if(this._pinfalls.first_roll === 10) {
			return 10;
		}
		if(this._pinfalls.second_roll === null) {
			return this._pinfalls.first_roll;
		}
		return this._pinfalls.first_roll + this._pinfalls.second_roll;
	}

	bonus(bonus = null){
		return this._bonus = bonus;
	}

	total() {
		if(this._pinfalls.second_roll === null){
			throw new Error('Total score unavailable due to ongoing game.')
		}
		return this.pinfalls() + this.bonus();
	}
}