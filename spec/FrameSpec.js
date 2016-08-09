describe("Frame", function() {
	var frame;
	var game;

	beforeEach(function() {
		frame = new Frame();
		game = new Game();
	});

	it("frame begins with ball 1", function() {
		expect(frame.getCurrentRoll()).toEqual(1);
	});

	it("frame begins with 10 pins", function() {
		expect(frame.getPinsStanding()).toEqual(10);
	});

	it("frame begins with no knocked down pins", function() {
		expect(frame.getFirstPinsDown()).toEqual(0);
	});

	describe("normal scores", function() {

		describe("#firstRoll", function() {

			it("first roll can knock pins down", function() {
				spyOn(Math, "random").and.returnValue(0.4);
				frame.firstRoll();
				expect(frame.getFirstPinsDown()).toEqual(4);
			});

			it("knocked down pins subtracted from pins left", function() {
				spyOn(Math, "random").and.returnValue(0.4);
				frame.firstRoll();
				expect(frame.getPinsStanding()).toEqual(6);
			});

		});

		describe("#secondRoll", function() {

			it("can roll a second time after first", function() {
				frame.firstRoll();
				expect(frame.getCurrentRoll()).toEqual(2);
			});

			it("second roll can knock remaining pins down", function() {
				frame.pinsStanding = 3
				spyOn(Math, "random").and.returnValue(0.5);
				frame.secondRoll();
				expect(frame.getSecondPinsDown()).toEqual(2);
				expect(frame.getPinsStanding()).toEqual(1);
			});

		});

	});

	describe("strike", function() {

		it("strike scored if 10 pins down after first roll", function() {
			frame.firstPinsDown = 10;
			expect(frame.isStrike()).toBe(true);
		});

	});

	describe("spare", function() {

		it("spare scored if 10 pins down after second roll", function() {
			frame.firstPinsDown = 8;
			frame.secondPinsDown = 2;
			expect(frame.isSpare()).toBe(true);
		});

	});

});
