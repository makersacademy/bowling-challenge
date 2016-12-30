'use strict'

describe('Frame', function() {
	var frame;

	it('should calculate the total score of a frame', function() {
		frame = new Frame([2,4]);
		expect(frame.total()).toEqual(6);
	});

});