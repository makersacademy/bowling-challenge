describe("Game", function() {
	let game;

	beforeEach(function() {
		game = new Game;
	});

	it("is unfinished at the beginning", function() {
		expect(game.isOver).toBe(false);
	});

	describe("#calculateScore", function () {
    it("#calculateScore tells you the score", function() {
      game.bowl(2, 0);
      expect(game.calculateScore()).toEqual(2);
    });

		it("#calculateScore tells you the score", function() {
			game.bowl(2, 1);
			expect(game.calculateScore()).toEqual(3);
		});

    it("#calculateScore tells you the score for multiple frames", function() {
      game.bowl(2, 1);
      game.bowl(8, 1);
      game.bowl(2, 5);
      expect(game.calculateScore()).toEqual(19);
    });

    it('adds spare bonus', function() {
      game.bowl(5, 5);
      game.bowl(4, 0);
      expect(game.calculateScore()).toEqual(18);
    })

    it('adds spare bonus', function() {
      game.bowl(10, 0);
      game.bowl(4, 4);
      expect(game.calculateScore()).toEqual(26);
    })
	});

	describe("#bowl", function () {
		it("#bowl adds scores to the frame", function() {
			game.bowl(5, 4);
			expect(game.frames[0]).toEqual([5, 4, 0]);
		});
	});

	describe("#currentFrame", function () {
		it("#currentFrame returns current frame number", function() {
			game.bowl(3, 5);
			expect(game.currentFrame()).toBe(1);
		});
	});

	describe("#status", function () {
		it("#status checks if game has ended", function() {
			game.status();
			expect(game.isOver).toBe(false);
		});
	});

	it("#finish will say when the game is over", function() {
		game.finish(true);
		expect(game.isOver).toBe(true);
	});
});
