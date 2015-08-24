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
	});

});