describe("Ten Pin Bowling", function(){

	var game;

	beforeEach( function(){
		game = new Game();
	});

	it("A first roll of less than 10 puts the score up and moves to second roll in first frame", function(){
		game.roll(5);
		expect(game.total_score).toEqual(5);
		expect(game.current_roll).toEqual(2);
		expect(game.current_frame).toEqual(1);
	});

	it("A second roll puts the score up and moves to first roll in second frame", function(){
		game.roll(5);
		game.roll(4);
		expect(game.total_score).toEqual(5+4);
		expect(game.current_roll).toEqual(1);
		expect(game.current_frame).toEqual(2);
	});

	describe("When a second roll knocks down the remaining pins", function(){
		it("- the next roll is added to the total twice", function(){
			game.roll(5);
			game.roll(5);
			game.roll(1);
			game.roll(2);
			expect(game.total_score).toEqual(14);
			expect(game.current_frame).toEqual(3);
		});
	});

	describe("When a first roll knocks down all 10 pins", function(){
		it("- the next roll is the first roll of the next frame", function(){
			game.roll(10);
			game.roll(5);
			expect(game.current_roll).toEqual(2);
			expect(game.current_frame).toEqual(2);
		});
		it("- the next two rolls are added to the total twice", function(){
			game.roll(10);
			game.roll(1);
			game.roll(1);
			expect(game.total_score).toEqual(14);
			expect(game.current_frame).toEqual(3);
		});
	});

	describe("Two strikes in a row", function(){
		it("- the second 10 gets added to the total twice, as does the third frame", function(){
			game.roll(10);
			game.roll(10);
			game.roll(1);
			game.roll(2);
			expect(game.total_score).toEqual(36);
			expect(game.current_frame).toEqual(4);
		});
	});

	describe("A strike then a spare", function(){
		it("- the second frame gets added to the total twice, as does the first roll of frame 3", function(){
			game.roll(10);
			game.roll(5);
			game.roll(5);
			game.roll(1);
			game.roll(2);
			expect(game.total_score).toEqual(34);
			expect(game.current_frame).toEqual(4);
		});
	});

	describe("A spare then a strike", function(){
		it("- the strike gets added to the total twice, as does the third frame", function(){
			game.roll(5);
			game.roll(5);
			game.roll(10);
			game.roll(1);
			game.roll(2);
			expect(game.total_score).toEqual(36);
			expect(game.current_frame).toEqual(4);
		});
	});

	describe("Frame 10", function(){
		it("- a strike triggers two bonus rolls added to the total", function(){
			for (var i = 1; i < 19; i++) {
				game.roll(1);
			}
			game.roll(10);
			game.roll(10);
			game.roll(10);
			expect(game.total_score).toEqual(48);
		});

		it("- a strike triggers two bonus rolls, then the game ends", function(){
			for (var i = 1; i < 19; i++) {
				game.roll(1);
			}
			game.roll(10);
			game.roll(10);
			result = game.roll(10);
			expect(result).toEqual({finalScore: 48});
		});

		it("- a spare triggers one bonus roll added to the total", function(){
			for (var i = 1; i < 19; i++) {
				game.roll(1);
			}
			game.roll(5);
			game.roll(5);
			game.roll(10);
			expect(game.total_score).toEqual(38);
		});

		it("- a spare triggers one bonus roll, then the game ends", function(){
			for (var i = 1; i < 19; i++) {
				game.roll(1);
			}
			game.roll(5);
			game.roll(5);
			result = game.roll(10);
			expect(result).toEqual({finalScore: 38});
		});

		it("- if there is no bonus achieved in frame 10, the game ends", function(){
			for (var i = 1; i < 19; i++) {
				game.roll(1);
			}
			game.roll(5);
			var result = game.roll(4);
			expect(result).toEqual({finalScore: 27});
		});
	});

	it("Raises error if trying to roll when the game has ended", function(){
		for (var i = 1; i < 19; i++) {
			game.roll(1);
		}
		game.roll(5);
		game.roll(4);
		expect(function(){
			game.roll(4)
		}).toThrowError("The game has ended");
	});

});