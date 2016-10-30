describe("BowlingGame", function() {
	var game;

	function rollManyTimes (n, pins) {
		while (n--) {
			game.roll(pins);
		}
	}

	function rollSpare() {
		game.roll(5);
		game.roll(5);
	}

	function rollStrike() {
		game.roll(10);
	}

	beforeEach(function(){
		game = new BowlingGame();
	});

	it("should be able to calculate a gutter game", function() {
		rollManyTimes(20, 0);
		expect(game.score()).toBe(0);
	});

	it("should be able to roll a game of all ones", function() {
		rollManyTimes(20, 1);
		expect(game.score()).toBe(20);
	});

	it("should be able to calculate one spare", function() {
		rollSpare();
		game.roll(3);
		rollManyTimes(17, 0);
		expect(game.score()).toBe(16);
	});

	it("should be able to calculate one strike", function() {
		rollStrike();
		game.roll(3);
		game.roll(4);
		rollManyTimes(16, 0);
		expect(game.score()).toBe(24);
	});

	it("should be able to calculate a perfect game", function() {
		rollManyTimes(12, 10);
		expect(game.score()).toBe(300);
	});
});
