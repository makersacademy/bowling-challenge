'use strict';

class Frame {
	constructor() {
		this.score = []
	}

	firstRoll(fallenPins) {
		this.score.push(fallenPins)
	}

	secondRoll(fallenPins) {
		this.score.push(fallenPins)
	}

	totalScore() {
		let sum = 0
		for (let i = 0; i < this.score.length; i++) {
			sum += this.score[i]
		}
		return sum
	}
}