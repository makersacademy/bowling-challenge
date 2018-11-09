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

		// it('starts with framenumber', function() {
		//   expect(frame.getrolls()).toEqual([]);
		// });

		it('saves a roll', function() {
			frame.roll(1);
			expect(frame.getrolls()).toEqual([1]);
		});

		it('saves a second roll', function() {
			frame.roll(1);
			frame.roll(9);
			expect(frame.getrolls()).toEqual([1,9]);
		});

		it('gets frame size of 2', function() {
			frame.roll(1);
			frame.roll(9);
			expect(frame.getFrameSize()).toEqual(2);
		});

		// it('sets the final roll of frame index to 1', function() {
		//   frame.roll(1)
		//   frame.roll(9)
		//   expect(frame.finalIndexOfFrame).toEqual(1);
		// });
		//
		// it('sets the final roll of frame index to 0', function() {
		//   frame.roll(10)
		//   // frame.roll(9)
		//   expect(frame.finalIndexOfFrame).toEqual(0);
		// });

		it('roll is invalid', function() {
			frame.roll(5);
			expect(frame.isValidRoll(6)).toEqual(false);
		});

		it('roll is valid', function() {
			frame.roll(5);
			expect(frame.isValidRoll(5)).toEqual(true);
		});

		it('closes frame', function() {
			frame.roll(1);
			frame.roll(9);
			expect(frame.isFrameOpen()).toEqual(false);
		});

		it('records a strike', function() {
			frame.roll(10);
			expect(frame.hasStrike()).toEqual(true);
		});

		it('records a spare', function() {
			frame.roll(1);
			frame.roll(9);
			expect(frame.hasSpare()).toEqual(true);
		});

		it('frame not open when strike', function () {
			frame.roll(10);
			// console.log(frame.hasStrike())
			// console.log(frame.getFrameSize())
			// console.log(frame.isFrameOpen())
			expect(frame.isFrameOpen()).toEqual(false);
		});

		it('raises an error when trying to roll more than 2', function() {
			frame.roll(1);
			frame.roll(9);
			expect(frame.roll(2)).toEqual('Max. 2 rolls allowed');
		});
	});

	describe('scoring a frame', function() {
		it('closes frame', function() {
			// frame = new Frame()
			// console.log(frame)
			frame.roll(1);
			frame.roll(9);
			expect(frame.getPinsScore()).toEqual(10);
		});
	});

	describe('10th frame', function() {
		it('returns max frame size of 3 when getting a strike on 10th frame', function() {
			frame.roll(10);
			frame.framenumber = 10;
			console.log(frame.isFinalFrame());
			// console.log(frame.framenumber)
			console.log(frame.getMaxFrameSize());
			expect(frame.getMaxFrameSize()).toEqual(3);
		});

		it('returns max frame size of 3 when getting a spare on 10th frame', function() {
			frame.roll(5);
			frame.roll(5);
			frame.framenumber = 10;
			expect(frame.getMaxFrameSize()).toEqual(3);
		});

		it('allows for 3 rolls on 10th frame when spare', function() {
			frame.framenumber = 10;
			frame.roll(5);
			frame.roll(5);
			frame.roll(5);
			expect(frame.rolls).toEqual([5,5]);
		});
		it('does not allow for 4 rolls on 10th frame when spare', function() {
			frame.framenumber = 10;
			frame.roll(5);
			frame.roll(5);
			frame.roll(5);
			frame.roll(5);
			expect(frame.rolls.length).toEqual(2);
		});
	});
});
