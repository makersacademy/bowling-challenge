describe("Bowling Game", function() {
	var game;

	beforeEach(function() {
		game = new Game();
	});

	it("starts with no score", function() {
		expect(game.currentScore()).toEqual(0);
	});

  it("bowling adds to score", function() {
    game.bowl(2);
    expect(game.currentScore()).toEqual(2);
  });

  it("can bowl a guttttter", function() {
    for (var i = 0; i < 20; i++) {
      game.bowl(0);
    }
    expect(game.currentScore()).toEqual(0);
  });

  it("starts with frame 1", function() {
     expect(game.currentFrame).toEqual(1);
  });

	it("ends the frame with a strike", function() {
		game.bowl(10)
		expect(game.currentFrame).toEqual(2);
	});

	it("can bowl a perfect game", function() {
		for (var i = 0; i < 12; i++) {
			game.bowl(10);
		}
		expect(game.currentScore()).toEqual(300);
	});

	it("can bowl a spare", function() {
		for (var i = 0; i < 3; i++) {
			game.bowl(5);
		}
		expect(game.currentScore).toEqual(20)
	});
});
