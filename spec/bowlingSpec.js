describe("Bowling Game", function() {

	var game;

	beforeEach(function(){
		game = new Game();
	});

	function manyRolls(rollScore, numberOfRolls) {
		for(var i=0; i<numberOfRolls; i++) {
			game.roll(rollScore);
		}
	}

	it("should be able to roll a gutter game", function(){
		manyRolls(0, 20);
		expect(game.score()).toEqual(0);
	});

  it("should be able to roll a normal game (no strikes/spares)", function(){
    manyRolls(3, 15);
    manyRolls(3,5);
    expect(game.score()).toEqual(60);
  });

  it("should be able to roll a strike", function(){
    game.roll(10);
    manyRolls(1,18);
    expect(game.score()).toEqual(30);
  });

  it("should be able to roll the perfect game", function(){
    manyRolls(10,12);
    expect(game.score()).toEqual(300);
  });


});
