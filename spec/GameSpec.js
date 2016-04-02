describe("Game", function() {

  var game;

  beforeEach(function(){
    game = new Game("Bob");
  })

  it("receives player name as an argument", function() {
    expect(game.player).toEqual("Bob");
  });

})
