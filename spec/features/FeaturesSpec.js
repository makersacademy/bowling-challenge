describe("Playing bowling", function (){
	var game;

	beforeEach(function() {
		game = new Game();
	})

	describe("When not spare nor strike", function() {
		xit("1st roll it returns the number of hit pins and pending score", function () {
			expect(game.play(6)).toEqual("6 hit / Tot score 0 (pending)")
		})
		xit("2nd roll it returns the number of hit pins and tot score", function() {
			expect(game.play(3)).toEqual("3 hit / Tot score 9")
		})
	})

	describe("When spare", function() {
		xit ("returns the number of hit pins and total score when spare", function() {
			game.play(6);
			expect(game.play(4)).toEqual("4 hit / Tot score 0 (pending)")
		})

		xit("2nd frame returns the total score with the bonus of previous frame", function() {
			game.play(6);
			game.play(4);
			game.play(2);
			expect(game.play(3)).toEqual("3 hit / Tot score 17")
		})
	})

	describe("When strike", function() {
		xit ("returns the number of hit pins and total score when spare", function() {
			expect(game.play(10)).toEqual("Strike! / Tot score 0 (pending)")
		})

		xit("2nd frame returns the total score with the bonus of previous frame", function() {
			game.play(10);
			game.play(2);
			expect(game.play(3)).toEqual("3 hit / Tot score 20")
		})
	})

})
