class Frame {
	constructor(first_roll){
		this._pinfalls = 
		{
				first_roll: first_roll,
				second_roll: null 
		}; 

		this._bonus = [];
		this._isStrike = function(){ 
			return this._pinfalls.first_roll === 10 ? true : false };
		this._isSpare = function(){
			return !this._isStrike() && this.pinfalls() === 10 ? true : false
		}
	}

	add(second_roll){
		if(second_roll + this._pinfalls.first_roll > 10) {
			throw new Error('Maximum possible score of each frame is 10.');
		}
		this._pinfalls.second_roll = second_roll;
	}

	pinfalls(){
		if(this._isStrike()){return 10};
		if(this._pinfalls.second_roll === null) {
			throw new Error('expecting second roll score');
		}
		return this._pinfalls.first_roll + this._pinfalls.second_roll;
	}

	addBonus(bonus){
		this._bonus.push(bonus);
	}

	bonus(){
		if(this._isStrike()){
			if(this._bonus.length < 2){ throw new Error('expect at least 2 bonuses');}
			return this._bonus[0] + this._bonus[1];
		}
		if(this._isSpare()){
			if (this._bonus.length < 1){ throw new Error('expect at least 1 bonus');}
			return this._bonus[0];
		}
		return 0
	}

	total(){
		return this.pinfalls() + this.bonus();
	};
}