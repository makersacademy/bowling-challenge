describe("Game", function(){
  var game;

  beforeEach(function (){
    game = new Game();
  });

  it("can play a gutter game", function(){
    rollTurns(0, 20);
    expect(game.score()).toBe(0);
  });

  it ("can play a game with out spares or strikes", function(){
    rollTurns(1, 20);
    expect(game.score()).toBe(20);
  });

  it ("can play a game with a spare", function(){
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollTurns(0, 17);

    expect(game.score()).toBe(16);

  });

  it ("can play a game with a strike", function(){
    game.roll(10);
    game.roll(1);
    game.roll(1);
    rollTurns(0, 16);

    expect(game.score()).toBe(14)
  })

  it ("can play a spare on the last frame", function(){
    rollTurns(0, 18);
    threeRolls(5, 3);

    expect(game.score()).toBe(15);
  })

  it ("can play a strike on the last frame", function(){
    rollTurns(10, 12);
    expect(game.score()).toBe(300);
  })

  // it ("knows when the game is up", function(){
  //   rollTurns(0, 21);
  //   expect(game) to throw an error.
  // })

  var rollTurns = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

  var threeRolls = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };


});