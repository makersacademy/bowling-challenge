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
	});
	
	describe("pins", function(){
		it ("can knock down a pin", function(){
			frame.knockDown(1);
			expect(frame.pins).toEqual(9);
		});

		it ("cannot knock down more than 10 pins",function(){
			frame.knockDown(2);
			expect(frame.knockDown(11)).toBe("You cannot knock more than 10 pins");
		});

		it ("cannot knock down pins if there are no more rolls", function(){
			frame.knockDown(2);
			frame.knockDown(2);
			expect(frame.knockDown(2)).toBe("There are no more rolls")
		});
	});

	describe("rolls", function(){
		it ("can make a roll ", function(){
			frame.roll();
			expect(frame.rolls).toEqual(1);
		});

		it ("should decrease number of rolls when pins are knocked down", function(){
			frame.knockDown(1);
			expect(frame.rolls).toEqual(1);
		});

		it ("cannot have more than two rolls", function(){
			frame.roll();
			frame.roll();
			expect(frame.roll()).toBe("You cannot roll more than twice");
		});
	});

});