'use strict';

describe('Frame', function() {
	var frame;

	beforeEach(function() {
		frame = new Frame();
	});

	describe('Frames < 10', function() {
		it('starts with no rolls', function() {
			expect(frame.getrolls()).toEqual([]);
		});

    it('adds a roll', function() {
      frame.addRoll(5)
			expect(frame.getrolls()).toEqual([5]);
		});

    it('adds 2 rolls', function() {
      frame.addRoll(5)
      frame.addRoll(3)
			expect(frame.getrolls()).toEqual([5,3]);
		});

    it('cannot add more than 2 rolls', function() {
      frame.addRoll(5)
      frame.addRoll(3)
      frame.addRoll(1)
			expect(frame.getrolls()).toEqual([5,3]);
		});

    it('checks for strike', function() {
      frame.addRoll(10)
			expect(frame.hasStrike()).toEqual(true);
		});

    it('checks for spare', function() {
      frame.addRoll(5)
      frame.addRoll(5)
			expect(frame.hasSpare()).toEqual(true);
		});

  });
});
