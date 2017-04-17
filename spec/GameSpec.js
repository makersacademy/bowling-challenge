describe("Game", function() {
  var game;
  beforeEach(function() {
    game = new Game();
  });

  it("is not started when created",function (){
    expect(game.isStarted).toEqual(false);
  });

  it("changes to True after clicking on #start",function (){
    game.start();
    expect(game.isStarted).toEqual(true);
  });



});
