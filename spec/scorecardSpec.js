'use strict';

describe('Scorecard', function() {
	let scorecard
	let frame

	beforeEach(function() {
		scorecard = new Scorecard();
		frame = new Frame();
	});

	it('takes one frame', function(){
		scorecard.firstFrame(5,2)
		expect(scorecard.totalScore[0]).toEqual([5, 2]);
	});

	it('takes ten frames', function(){
		scorecard.firstFrame(5,2)
		scorecard.secondFrame(1,4)
		scorecard.thirdFrame(3,6)
		scorecard.fourthFrame(6,1)
		scorecard.fifthFrame(3,2)
		scorecard.sixthFrame(2,7)
		scorecard.seventhFrame(8,1)
		scorecard.eighthFrame(1,1)
		scorecard.ninethFrame(4,2)
		scorecard.tenthFrame(6,2)
		expect(scorecard.totalScore).toEqual([[5, 2], [1, 4], [3, 6], [6, 1], [3, 2], [2, 7], [8, 1], [1, 1], [4, 2], [6, 2]]);
	});
});