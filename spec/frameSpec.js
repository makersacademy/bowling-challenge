describe("Frame", function() {
	var frame;

	beforeEach(function(){
		frame = new Frame();
	});

	it("should return the number of pins down at the first roll", function(){
		numberPinsDown([5])
		expect(frame.addTotalFramePoints()).toEqual(5)
	});

	it("should return the total points after 2 rolls", function(){
		numberPinsDown([5,3])
		expect(frame.addTotalFramePoints()).toEqual(8)
	});
	
	var numberPinsDown = function(pinsDown) {
		// console.log(pinsDown)
		// console.log(pinsDown.length)
		for(var i = 0; i < pinsDown.length; i++) {
			frame.appendNumberPinsDown(pinsDown[i]);
		};
	};
});
