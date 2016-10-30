//'use strict';

describe('scorecard', function() {

	beforeEach(function() {
		scorecard = new Scorecard();
	});

	it('has a frames property', function() {
		expect(scorecard.frames).toEqual([]);
	});

	it('has a currentFrame property', function() {
		expect(scorecard.hasOwnProperty('currentFrame')).toEqual(true)
	});

	it('has a pinsRemaining property', function() {
		expect(scorecard.currentFrame.pinsRemaining).toEqual(10)
	});

	it('has a frameScore property', function() {
		expect(scorecard.currentFrame.frameScore).toEqual(0)
	});

	it('ha a bonusScore property', function() {
		expect(scorecard.currentFrame.bonusScore).toEqual(0)
	});

	describe('updateScore', function() {
		it('updates the currentFrames score', function() {
			scorecard.updateScore(5);
			expect(scorecard.currentFrame.frameScore).toEqual(5);
		});
		
	});

	describe('updateCurrentBowlScore', function() {
		it('updates bowlOneScore if first bowl', function() {
			scorecard.updateCurrentBowlScore(5);
			expect(scorecard.currentFrame.bowlOneScore).toEqual(5);
		});

		it('updates bowlTwoScore if second bowl', function() {
			scorecard.reduceBowlsRemaining();
			scorecard.updateCurrentBowlScore(5);
			expect(scorecard.currentFrame.bowlTwoScore).toEqual(5);
		});
	});


	describe('nextFrame', function() {
		it('can change the current frame', function() {
			scorecard.newFrame();
			expect(scorecard.currentFrame.frameNumber).toEqual(2);
		});

		it('saves the previous frame', function() {
			previousFrame = scorecard.currentFrame;
			scorecard.newFrame();
			expect(scorecard.frames[0]).toEqual(previousFrame)
		});
	});


	it('can reduce the pins remaining', function() {
		scorecard.reducePinsRemaining(5);
		expect(scorecard.currentFrame.pinsRemaining).toEqual(5);
	});

	describe('isFrameOver', function() {
		it('can change the frame when pinsRemaining equals 0', function() {
			scorecard.reducePinsRemaining(10);
			scorecard.isFrameOver();
			expect(scorecard.currentFrame.frameNumber).toEqual(2);
		});

		it('can change the frame when bowlsRemaining equals 0', function() {
			for(i=0;i<2;i++) {
				scorecard.reduceBowlsRemaining();	
			}
			scorecard.isFrameOver();
			expect(scorecard.currentFrame.bowlsRemaining).toEqual(2);
		});
	});


	describe('isStrikeOrSpare', function() {
		it('adds 2 to bonusScore when it is a strike', function() {
			scorecard.reducePinsRemaining(10);
			scorecard.reduceBowlsRemaining();
			scorecard.isStrikeOrSpare();
			expect(scorecard.currentFrame.bonusScore).toEqual(2);
		});
		it('adds 1 to bonusScore when it is a Spare', function() {
			scorecard.reducePinsRemaining(10);
			scorecard.reduceBowlsRemaining();
			scorecard.reduceBowlsRemaining();
			scorecard.isStrikeOrSpare();
			expect(scorecard.currentFrame.bonusScore).toEqual(1);
		});
	});

	describe('bonusScore', function() {
		it('adds score to a previous round', function() {
			scorecard.reducePinsRemaining(10);
			scorecard.reduceBowlsRemaining();
			scorecard.isStrikeOrSpare();
			scorecard.newFrame();
			scorecard.bonusScore(10);
			expect(scorecard.frames[0].frameScore).toEqual(10);
			expect(scorecard.frames[0].bonusScore).toEqual(1);
		});
	});
});
