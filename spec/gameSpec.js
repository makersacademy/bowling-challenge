describe("Game", function() {
  beforeEach(function() {
    game  = new Game();
  });

  it("can roll the ball", function(){
    for( var i = 0; i < 20; i++ ){
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });

  it("should roll all ones", function(){
    for( var i = 0; i < 20; i++ ){
      game.roll(1);
    }
    expect(game.score()).toEqual(20)
  });

  it("can roll a spare", function(){
    game.roll(4);
    game.roll(6);
    game.roll(3);
    rollMany(0,17);
    expect(game.score()).toEqual(16)
  });

  it("can roll 1 strike", function(){
    game.roll(10);
    game.roll(4);
    game.roll(4);
    rollMany(0,16);
    expect(game.score()).toEqual(26)
  });

  it("can roll a perfect game", function(){
    rollMany(10,12);
    expect(game.score()).toEqual(300)
  });

  var rollMany = function(pins, rolls) {
    for( var i = 0; i < rolls; i++ ){
      game.roll(pins);
    }
  }
});
