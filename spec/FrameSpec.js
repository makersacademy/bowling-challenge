describe('Frame', function() {
	var Frame = require('./../lib/Frame');
	var frame;

	beforeEach(function() {
		frame = new Frame();
	});

	describe('initial', function() {
		it('should have an array of pins', function() {
			expect(frame._pins).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
		});

		it('should have an empty frame array', function() {
			expect(frame._frame).toEqual([]);
		});
	});

	describe('knockDownPins', function() {
		it('knocks down a number of specified pins', function() {
		frame.knockDownPins(5);
		expect(frame._pins).toEqual([1, 2, 3, 4, 5]);

			frame.knockDownPins(0);
			expect(frame._pins).toEqual([1, 2, 3, 4, 5]);

			frame.knockDownPins(5);
			expect(frame._pins).toEqual([]);
		});
	});

  describe('isStrike', function() {
    it('returns true if round was a strike', function() {
      frame.knockDownPins(10);
      expect(frame.isStrike()).toEqual(true);
    });

    it('returns false if frame was not a strike', function() {
			frame.knockDownPins(5);
      expect(frame.isStrike()).toEqual(false);
    });
  });

	describe('rollCount', function() {
		it('returns the number of rolls', function() {
			frame.knockDownPins(0);
			spyOn(frame, 'rollCount').and.returnValue(1);

			expect(frame.rollCount()).toEqual(1);
		});
	});

  describe('isSpare', function() {
    it('returns true if it was a spare frame', function() {
			frame.knockDownPins(5);
			frame.knockDownPins(5);
			spyOn(frame, 'rollCount').and.returnValue(2);


      expect(frame.isSpare()).toEqual(true);
    });

    it('returns false if it was not a spare frame', function() {
			frame.knockDownPins(5);
			spyOn(frame, 'rollCount').and.returnValue(1);

      expect(frame.isSpare()).toEqual(false);
    });
  });
});



// describe('Frame', function() {
//   let Frame = require('./../lib/Frame');
//   let frame;
//
//   beforeEach(function() {
//     frame = new Frame();
//
//     fakeRound = {
//       score: function() {
//         return 0;
//       }
//     };
//   });
//
//   describe('initial', function() {
//     it('should not be a bonus round', function() {
//       expect(frame.isBonusFrame()).toEqual(false);
//     });
//
//     it('can be set to be a bonus round if required', function() {
//       frame = new Frame(true);
//
//       expect(frame.isBonusFrame()).toEqual(true);
//     });
//
//     it('should have an score of 0 for the frame', function() {
//       expect(frame._score).toEqual(0);
//     });
//
//     it('should have an empty rounds array', function() {
//       expect(frame._rounds).toEqual([]);
//     });
//   });
//
//   describe('addRound', function() {
//     it('should add a round to the frame', function() {
//       frame.addRound(fakeRound);
//       expect(frame._rounds).toEqual([fakeRound]);
//     });
//   });
//
//   describe('isBonusFrame', function() {
//     it('returns true or false depending if frame is a bonus frame', function() {
//       expect(frame.isBonusFrame()).toEqual(false);
//       frame = new Frame(true);
//       expect(frame.isBonusFrame()).toEqual(true);
//     });
//   });
//
//   describe('isFull', function() {
//     it('returns true if it is a bonus round and has had a strike/spare and is full', function() {
//       frame = new Frame(true);
//       spyOn(fakeRound, 'score').and.returnValue(5);
//       frame.addRound(fakeRound);
//       frame.addRound(fakeRound);
//       frame.addRound(fakeRound);
//
//       expect(frame.isFull()).toEqual(true);
//     });
//
//     it('returns true if it is a bonus round and hasnt had a strike/spare and is full', function() {
//       frame = new Frame(true);
//       spyOn(fakeRound, 'score').and.returnValue(5);
//       frame.addRound(fakeRound);
//       frame.addRound(fakeRound);
//       frame.addRound(fakeRound);
//
//       expect(frame.isFull()).toEqual(true);
//     });
//
//     it('returns true if frame is a normal frame and contains a strike', function() {
//       spyOn(fakeRound, 'score').and.returnValue(10);
//       frame.addRound(fakeRound);
//
//       expect(frame.isFull()).toEqual(true);
//     });
//
//     it('returns true if frame is a normal frame is full', function() {
//       frame.addRound(fakeRound);
//       frame.addRound(fakeRound);
//
//       expect(frame.isFull()).toEqual(true);
//     });
//   });
//

//
//   describe('isStrike', function() {
//     it('returns true if round was a strike', function() {
//       spyOn(fakeRound, 'score').and.returnValue(10);
//       frame.addRound(fakeRound);
//       expect(frame.isStrike()).toEqual(true);
//     });
//
//     it('returns false if round is empty', function() {
//       expect(frame.isStrike()).toEqual(false);
//     });
//
//     it('returns false if round does not include strike', function() {
//       frame.addRound(fakeRound);
//       expect(frame.isStrike()).toEqual(false);
//     });
//   });
//
//   describe('score', function() {
//     it('returns the frames score', function() {
//       spyOn(fakeRound, 'score').and.returnValue(4);
//       frame.addRound(fakeRound);
//       frame.addRound(fakeRound);
//
//       expect(frame.score()).toEqual(8);
//     });
//   });
//
//   describe('bonusScore', function() {
//     it('collects the bonus score for the frame if it contained a strike', function() {
//       spyOn(fakeRound, 'score').and.returnValue(10);
//       frame.addRound(fakeRound);
//
//       expect(frame.bonusScore(fakeRound, fakeRound)).toEqual(20);
//     });
//
//     it('collects the bonus score for the frame if it contained a spare', function() {
//       spyOn(fakeRound, 'score').and.returnValue(5);
//       frame.addRound(fakeRound);
//       frame.addRound(fakeRound);
//
//       expect(frame.bonusScore(fakeRound, fakeRound)).toEqual(5);
//     });
//
//     it('returns 0 if there is no bonus score', function() {
//       spyOn(fakeRound, 'score').and.returnValue(0);
//       frame.addRound(fakeRound);
//       frame.addRound(fakeRound);
//
//       expect(frame.bonusScore(fakeRound, fakeRound)).toEqual(0);
//     });
//   });
// });
