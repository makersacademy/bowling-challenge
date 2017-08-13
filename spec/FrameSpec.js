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



		it('should increase by the roll score', function () {
			frame.setFirstRoll(4);
			frame.setSecondRoll(3);
			console.log(this.firstRoll)
			console.log(this.secondRoll)
			expect(frame.getFrameScore()).toEqual(7);
		});
	});

});
