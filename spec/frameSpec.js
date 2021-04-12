'use strict';

describe('Frame', function() {
	let frame

	beforeEach(function() {
		frame = new Frame();
	});

	it('takes two rolls and adds them to a score array', function(){
		frame.firstRoll(5)
		frame.secondRoll(2)
		expect(frame.score).toEqual([5, 2]);
	});

	it('can show a score total', function(){
		frame.firstRoll(5)
		frame.secondRoll(2)
		expect(frame.totalScore()).toEqual(7);
	});

	it('scores correctly after a spare', function(){
		frame.firstRoll(7)
		frame.secondRoll(3)
		expect(frame.spare()).toEqual(true);
	});

	it('scores correctly after a strike', function(){
		frame.firstRoll(10)
		expect(frame.strike()).toEqual(true);
	});
});