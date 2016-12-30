'use strict'

describe('Frame', function() {
	var frame;
	var frame2;
	var frame3;

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

	it('should calculate the total when a player rolls two strikes in a row', function() {
		frame = new Frame([10]);
		frame2 = new Frame([10]);
		frame3 = new Frame([2,4]);
		expect(frame.total(frame2, frame3)).toEqual(22);
	});

	it('should calculate the total when a player rolls three strikes in a row', function() {
		frame = new Frame([10]);
		frame2 = new Frame([10]);
		frame3 = new Frame([10]);
		expect(frame.total(frame2, frame3)).toEqual(30);
	});

	it ('should calculate the total when a player rolls a strike in the penultimate and final frames', function() {
		frame = new Frame([10]);
		frame2 = new Frame([10,10,10]);
		expect(frame.total(frame2)).toEqual(30);
	});

	it('should calculate the total when a player rolls three strikes in the final frame', function() {
		frame = new Frame([10,10,10]);
		expect(frame.total()).toEqual(30);
	});

});