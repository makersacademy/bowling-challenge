"use strict"

describe("Frame", function(){

	let frame;

	beforeEach(function(){
		frame = new Frame();
	});

	it("initializes with didStrike equal to False", function(){
		expect(frame.didStrike).toBe(false);
	});

	it("initializes with didSpare equal to false", function(){
		expect(frame.didSpare).toBe(false);
	});

	it("initializes with a rollOne of 0", function(){
		expect(frame.rollOne).toEqual(0)
	});

	it("initializes with a rollTwo of 0", function(){
		expect(frame.rollTwo).toEqual(0)
	});

	it("initializes with a frameScore of 0", function(){
		expect(frame.frameScore).toEqual(0)
	});

	it("initializes with a pinsLeft equal to 10", function(){
		expect(frame.pinsLeft).toEqual(10)
	});


	describe("#firstRoll", function(){
		describe("#strike", function(){
			beforeEach(function(){
				spyOn(Math, "random").and.returnValue(0.95);
				frame.firstRoll();
			});

			it("if player gets a strike, rollOne equals 10", function(){
				expect(frame.rollOne).toEqual(10);
			});

			it("if player gets a strike, didStrike is true", function(){
				expect(frame.didStrike).toBe(true);
			});

			it("if player gets a strike, didSpare is false", function(){
				expect(frame.didSpare).toBe(false);
			});

			it("if player gets a strike, pinsLeft equals 0", function(){
				expect(frame.pinsLeft).toEqual(0);
			});

			it("if player gets a strike, rollTwo equals 0", function(){
				expect(frame.rollTwo).toEqual(0);
			});

			it("if player gets a strike, frameScore equals 10", function(){
				expect(frame.frameScore).toEqual(10);
			});

		});

		describe("When not a Strike", function(){
			beforeEach(function(){
				spyOn(Math, "random").and.returnValue(0.3);
				frame.firstRoll();
			});

			it("rollOne equals the first roll score", function(){
				expect(frame.rollOne).toEqual(3);
			});

			it("didStrike is false", function(){
				expect(frame.didStrike).toBe(false);
			});
			
			it("didSpare is false", function(){
				expect(frame.didSpare).toBe(false);
			});

			it("pinsLeft equals the 10 minus the score of rollOne", function(){
				expect(frame.pinsLeft).toEqual(7);
			});

			it("after first roll rollTwo still equals 0", function(){
				expect(frame.rollTwo).toEqual(0);
			});

			it("after first roll frameScore still equals 0", function(){
				expect(frame.frameScore).toEqual(0);
			});
		});
	});

	describe("#secondRoll", function(){
		describe("When didStrike true", function(){
			beforeEach(function(){
				spyOn(Math, "random").and.returnValue(1);
				frame.firstRoll();
				frame.secondRoll();
			});

			it("If strike on first roll, calling second roll doesn't change anything", function(){
				expect(frame.didStrike).toBe(true);
				expect(frame.didSpare).toBe(false);
				expect(frame.frameScore).toEqual(10);
				expect(frame.rollTwo).toEqual(0);
				expect(frame.frameScore).toEqual(10);
			})
		});

		describe("when didStrike false, and didSpare false", function(){
			beforeEach(function(){
				spyOn(Math, "random").and.returnValues(0.3, 0.4);
				frame.firstRoll();
				frame.secondRoll();				
			});

			it("rollTwo equals the result of secondRoll", function(){
				expect(frame.rollTwo).toEqual(3);
			});

			it("frameScore equals rollOne + rollTwo", function(){
				expect(frame.frameScore).toEqual(6);
			});

			it("pinsLeft equals 10 - rollOne - rollTwo", function(){
				expect(frame.pinsLeft).toEqual(4);
			});
		});


		describe("When didSpare true", function(){

			beforeEach(function(){
				spyOn(Math, "random").and.returnValues(0.3, 0.9);
				frame.firstRoll();
				frame.secondRoll();
			});

			it("didSpare is true", function(){
				expect(frame.didSpare).toBe(true);
			});

			it("frameScore equals 10", function(){
				expect(frame.frameScore).toEqual(10);
			});

			it("rollTwo plus rollOne equals 10", function(){
				expect(frame.rollTwo).toEqual(7);
			});

			it("didStrike is false", function(){
				expect(frame.didStrike).toBe(false);
			});
		});

	});
});