describe("Game", function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('Gutter game', function(){
    playGame(20,0);
    expect(game.score()).toBe(0);
  });

  it('One spare', function(){
    rollSpare();
    game.roll(5);
    playGame(17, 0);
    expect(game.score()).toBe(20);
  });

  it('One strike', function(){
    rollStrike();
    game.roll(5);
    game.roll(7);
    playGame(16, 0);
    expect(game.score()).toBe(34);
  });

  it("Only one pins", function(){
    playGame(20, 1);
    expect(game.score()).toBe(20);
  });

  it('Perfect game', function(){
    playGame(12, 10);
    expect(game.score()).toBe(300);
  });

  function playGame(rolls, pins){
    for (var i = 0; i < rolls; i++){
      game.roll(pins);
    }
  }

  function rollSpare(){
    game.roll(3);
    game.roll(7);
  }

  function rollStrike(){
    game.roll(10);
  }
});
