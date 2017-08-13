'use strict';

describe ('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('when it is initialized', function() {
    it('should have a frame score of 0', function () {
      expect(frame.getFrameScore()).toEqual(0);
    });
  });

	describe('the frame score', function() {

		beforeEach(function() {
			frame.setFirstRoll(4);
			frame.setSecondRoll(3);
		});

		it('should increase by the roll score', function() {
			expect(frame.getFrameScore()).toEqual(7);
		});

		it('should increase with the bonus scores', function() {
			frame.addBonus(5)
			expect(frame.getFrameScore()).toEqual(12);
		});

	});

	describe('special rounds', function() {
		it('identifies a strike', function() {
			frame.setFirstRoll(10);
			expect(frame.strikeScored()).toEqual(true);
		});

		it('identifies a spare', function() {
			frame.setFirstRoll(5);
			frame.setSecondRoll(5);
			frame.calculateFrameScore();
			expect(frame.spareScored()).toEqual(true);
		});
	});

});
