'use strict';

class Scorecard {
		constructor() {
			this.totalScore = []
	}

	firstFrame(firstRoll, secondRoll) {
		let frame = new Frame ()
		frame.firstRoll(firstRoll)
		frame.secondRoll(secondRoll)
		this.totalScore.push(frame.score)
	}

	
	secondFrame(firstRoll, secondRoll) {
		let frame = new Frame ()
		frame.firstRoll(firstRoll)
		frame.secondRoll(secondRoll)
		this.totalScore.push(frame.score)
	}

	thirdFrame(firstRoll, secondRoll) {
		let frame = new Frame ()
		frame.firstRoll(firstRoll)
		frame.secondRoll(secondRoll)
		this.totalScore.push(frame.score)
	}

	fourthFrame(firstRoll, secondRoll) {
		let frame = new Frame ()
		frame.firstRoll(firstRoll)
		frame.secondRoll(secondRoll)
		this.totalScore.push(frame.score)
	}

	fifthFrame(firstRoll, secondRoll) {
		let frame = new Frame ()
		frame.firstRoll(firstRoll)
		frame.secondRoll(secondRoll)
		this.totalScore.push(frame.score)
	}

	sixthFrame(firstRoll, secondRoll) {
		let frame = new Frame ()
		frame.firstRoll(firstRoll)
		frame.secondRoll(secondRoll)
		this.totalScore.push(frame.score)
	}

	seventhFrame(firstRoll, secondRoll) {
		let frame = new Frame ()
		frame.firstRoll(firstRoll)
		frame.secondRoll(secondRoll)
		this.totalScore.push(frame.score)
	}

	eighthFrame(firstRoll, secondRoll) {
		let frame = new Frame ()
		frame.firstRoll(firstRoll)
		frame.secondRoll(secondRoll)
		this.totalScore.push(frame.score)
	}

	ninethFrame(firstRoll, secondRoll) {
		let frame = new Frame ()
		frame.firstRoll(firstRoll)
		frame.secondRoll(secondRoll)
		this.totalScore.push(frame.score)
	}

	tenthFrame(firstRoll, secondRoll) {
		let frame = new Frame ()
		frame.firstRoll(firstRoll)
		frame.secondRoll(secondRoll)
		this.totalScore.push(frame.score)
	}
	
}