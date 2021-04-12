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
		let total = 0
		for (let i = 0; i < this.score.length; i++) {
			total += this.score[i]
		}
		return total
	}

	spare() {
		if (this.totalScore() === 10) {
			return true
		}
	}

	strike() {
		if (this.score[0] === 10) {
			return true
		}
	}
}