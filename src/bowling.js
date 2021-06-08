import Frame from './frame.js';

export default class Bowling {
	constructor() {
		this.frames = [];
		this.isGameOver = false;
		this._newFrame();
	}

	roll(pins) {
		if (this.isGameOver) return;
		this.currentFrame.roll(pins, this.isBonus);
		this._checkGameStatus();
		this._prepareNextRoll();
	}

	_prepareNextRoll() {
		if (this._isNextFrame) {
			this._adjustScoresForPastFrames();
			this._newFrame();
		}
	}

	_adjustScoresForPastFrames() {
		this._adjustPrevFrameScore();
		this._adjustPrevPrevFrameScore();
	}

	_adjustPrevFrameScore() {
		if (this.frames.length < 2) return;
		let prevFrame = this.frames[this.frames.length - 2];
		let extraScore = 0;
		if (prevFrame.result === 'Strike') {
			extraScore =
				this.currentFrame.rolls.length < 2
					? this.currentFrame.score
					: this.currentFrame.rolls[0] + this.currentFrame.rolls[1];
		} else if (prevFrame.result === 'Spare') {
			extraScore = this.currentFrame.rolls[0];
		}
		prevFrame.addScore(extraScore);
	}

	_adjustPrevPrevFrameScore() {
		if (this.frames.length < 3) return;

		let prevFrame = this.frames[this.frames.length - 2];
		let prevPrevFrame = this.frames[this.frames.length - 3];
		let extraScore = 0;
		if (prevFrame.result === 'Strike' && prevPrevFrame.result === 'Strike') {
			extraScore = this.currentFrame.rolls[0];
		}
		prevPrevFrame.addScore(extraScore);
	}

	_newFrame() {
		this.frames.push(new Frame());
	}

	get _isNextFrame() {
		return (
			this.frames.length === 0 ||
			((this.frames[this.frames.length - 1].result !== '' ||
				this.frames[this.frames.length - 1].rolls.length === 2) &&
				this.frames.length <= 9)
		);
	}

	get isBonus() {
		return this.frames.length === 10 && this.frames[this.frames.length - 1].result !== '';
	}

	_checkGameStatus() {
		if (
			(this.frames.length === 10 &&
				this.frames[this.frames.length - 1].result !== '' &&
				this.frames[this.frames.length - 1].rolls.length === 3) ||
			(this.frames.length === 10 &&
				this.frames[this.frames.length - 1].result === '' &&
				this.frames[this.frames.length - 1].rolls.length === 2)
		) {
			this.isGameOver = true;
			this._adjustScoresForPastFrames();
		}
	}

	get currentFrame() {
		return this.frames[this.frames.length - 1];
	}

	get totalScore() {
		return this.frames.reduce((total, frame) => total + frame.score, 0);
	}
}
