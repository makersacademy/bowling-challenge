export default class Frame {
	constructor() {
		this.rolls = [];
		this.bonusScore = 0;
		this._totalPins = 10;
	}

	roll(pins, bonus = false) {
		if (this.pinsLeft(bonus) < pins) {
			throw 'Not enough pins left';
		}
		this.rolls.push(pins);
	}

	addScore(num) {
		this.bonusScore += num;
	}

	_knockedPins() {
		return this.rolls.reduce((total, roll) => total + roll, 0);
	}

	score() {
		return this._knockedPins() + this.bonusScore;
	}

	result() {
		if (this.rolls.length > 0 && this.rolls[0] === 10) return 'Strike';
		if (this.rolls.length > 1 && this.rolls[0] + this.rolls[1] === 10) return 'Spare';
		return '';
	}

	pinsLeft(bonus = false) {
		return bonus ? 10 : this._totalPins - this._knockedPins();
	}
}
