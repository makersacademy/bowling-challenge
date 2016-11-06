describe("Game", function() {

	var game;

	beforeEach(function() {
		game = new Game();
	});

	it("has 10 frames", function() {
		expect(game.frames).toEqual(10)
	})

	it("starts with score at 0", function() {
		expect(game.score).toEqual(0)
	})

	it('starts with 10 pins', function() {
		expect(game.pins).toEqual(10)
	})

	describe("Bowl", function() {
		it("knocks over pins", function() {
			game.bowl(5)
			expect(game.pins).toEqual(5)
		})

		it("adds to the score", function() {
			game.bowl(5)
			expect(game.score).toEqual(5)
		})

		it("allows two turns for frame to finish", function() {
			game.bowl(5)
			game.bowl(5)
			expect(game.frames).toEqual(9)
		})

		it('puts pins back up after frame', function() {
			game.bowl(5)
			game.bowl(5)
			expect(game.pins).toEqual(10)
		})
	})

	describe("Score Keep", function() {
		it("adds next turn's score if spare is scored", function() {
			game.bowl(5)
			game.bowl(5)
			game.bowl(5)
			expect(game.score).toBe(20)
		})

		fit("adds next frames score if strike is scored", function() {
			game.bowl(10)
			game.bowl(5)
			game.bowl(2)
			expect(game.score).toBe(24)
		})

    fit("spare and then strike", function() {
    	game.bowl(10)
    	game.bowl(10)
    	game.bowl(10)
    	game.bowl(5)
    	game.bowl(4)
    	expect(game.score).toBe(83)
    })
	})

});