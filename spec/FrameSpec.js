'use strict'

describe('Frame', function() {
	var frame;
	var frame2;

	it('should calculate the total score of a frame', function() {
		frame = new Frame([2,4]);
		expect(frame.total()).toEqual(6);
	});

	it('should calculate the total when a player rolls a spare', function() {
		frame = new Frame([7,3]);
		frame2 = new Frame([2,4]);
		expect(frame.total(frame2)).toEqual(12);
	});

	it('should calculate the total when a player rolls a strike', function() {
		frame = new Frame([10]);
		frame2 = new Frame([2,4]);
		expect(frame.total(frame2)).toEqual(16);
	});

});