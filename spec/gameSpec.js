describe ("Game", function() {
	var game;

	beforeEach(function(){
		game = new Game();
		game.startGame();
	});


	describe("initial conditions",function(){
		it("has a score of 0", function(){
			expect(game.score).toEqual(0);
		});

		it("has one player", function(){
			expect(game.player).toEqual(1);
		});

		it("has 10 frames", function(){
			expect(game.frames.length).toEqual(10);
		});
	});



	describe("score", function(){
		it ("can calculate the score of a frame",function(){
			game.frames[0].rollOne(1);
      game.frames[0].rollTwo(1);
      game.calculateScore();
      expect(game.score).toEqual(2);
		});

		it("can calculate the score after a strike", function(){
      game.frames[0].rollOne(10);
      game.frames[1].rollOne(4);
      game.frames[1].rollTwo(5);
      game.calculateScore();
      expect(game.score).toEqual(28);
		});

		it("can calculate the score after a spare", function(){
			game.frames[0].rollOne(1);
			game.frames[0].rollTwo(9);
			game.frames[1].rollOne(1);
			game.frames[1].rollTwo(1);
			game.calculateScore();
			expect(game.score).toEqual(13);
		});


	});
});	