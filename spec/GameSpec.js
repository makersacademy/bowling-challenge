describe("Bowling Score Card", function() {

	it("should record a score of zero for a gutter game", function() {
		game = new Game();
		for (i = 0; i < 20; i++) {
			game.roll(0);
		};
		expect(game.score).toEqual(0);
	});

	it("tracks frames, rolls, score", function() {
		game = new Game();
		game.roll(1);
		game.roll(4);
		game.roll(5);
		game.roll(5);
		expect(game.frame).toEqual(3);
		expect(game.frameRoll).toEqual(1);
		expect(game.score).toEqual(15);
	});

  it("tracks score correctly with invalid rolls", function() {
		game = new Game();
		game.roll(3);
    expect(function(){game.roll(8);}).toThrow();
		game.roll(5);
		expect(game.rolls).toEqual([[3,5]]);
    expect(game.score).toEqual(8);
	});

  it("tracks pins down per frame", function() {
		game = new Game();
		game.roll(1);
		game.roll(4);
		game.roll(5);
		game.roll(5);
		expect(game.rolls).toEqual([[1,4],[5,5]]);
	});


  it("doesn't allow rolls over 10", function(){
    game = new Game();
    expect(function(){
      game.roll(11);
    }).toThrow();
  });

  it("doesn't allow over 10 points per frame", function(){
    game = new Game();
    game.roll(6);
    expect(function(){
      game.roll(5);
    }).toThrow();
  });


	it("limits the game to 10 frames", function() {
		game = new Game();
		for (i = 0; i < 20; i++) {
			game.roll(4);
		};
		expect(function() {
			game.roll(4)
		}).toThrow();
	});

  
});
