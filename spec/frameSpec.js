describe("Frame", function() {
	var frame;

	beforeEach(function(){
		frame = new Frame();
	});

	describe ("initial conditions",function(){
		it ("should have ten pins", function(){
			expect(frame.pins).toEqual(10);
		}); 

		it ("should have two rolls", function(){
			expect(frame.rolls).toEqual(2);
		});

		it ("should have a total score of 0", function(){
			expect(frame.totalScore).toEqual(0);
		});

		it ("should have a bonus score of 0", function(){
			expect(frame.bonusScore).toEqual(0);
		});
	});
	

	describe ("score", function(){
		it ("can play the first roll", function(){
			frame.rollOne(4);
			expect(frame.totalScore).toEqual(4);
			// expect(frame.rolls).toEqual(1);
		});

		
		it ("can play the second roll", function(){
			frame.rollOne(4);
			frame.rollTwo(4);
			expect(frame.totalScore).toEqual(8);
		});	
	});

	describe ("pins", function(){
		it ("knows how many pins have been knocked down after first roll", function(){
			frame.rollOne(4);
			expect(frame.pins).toEqual(6);
		});

		it ("knows how many pins have been knocked down after second roll", function(){
			frame.rollOne(4);
			frame.rollTwo(4);
			expect(frame.pins).toEqual(2);
		});

		it ("cannot knock down unexisting pins",function(){
			frame.rollOne(4);
			expect(frame.rollTwo(8)).toBe("You cannot knock unexisting pins");
		});

		it ("cannot knock down more than 10 pins", function(){
			expect(frame.rollOne(11)).toBe("You cannot knock more than 10 pins");
		});
	});

	describe ("rolls", function(){
		it ("how many rolls are left after first roll", function(){
			frame.rollOne(4);
			expect(frame.rolls).toEqual(1);
		});

		it ("knows there are no rolls left after second roll", function(){
			frame.rollOne(4);
			frame.rollTwo(4);
			expect(frame.rolls).toEqual(0);
		});
	});

	describe ("strike", function(){
		it ("should know when its a strike", function(){
			frame.rollOne(10);
			expect(frame._isStrike()).toBe(true);
		});

		it ("should know the second roll is 0 when its a strike", function(){
			frame.rollOne(10);
			expect(frame.rollTwoScore).toEqual(0);
		});

		it ("should differentiate a spare to a strike", function(){
			frame.rollOne(10);
			expect(frame._isSpare()).toBe(false);
		});
	});

	describe ("spare", function(){
		it ("should know when both rolls result in a spare",function(){
			frame.rollOne(3);
			frame.rollTwo(7);
			expect(frame._isSpare()).toBe(true);
		});
	});
});
