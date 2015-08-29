describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("is not started when created",function (){
    expect(game.isStarted).toEqual(false);
  });

  it("isStarted changes after #start",function (){
    game.start();
    expect(game.isStarted).toEqual(true);
  });

});
