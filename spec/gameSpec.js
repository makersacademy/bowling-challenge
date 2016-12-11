describe("Game", function() {
  beforeEach(function() {
    game  = new Game();
  });

  it("should sum the number of pines throwed", function(){
    expect(game.calculatePoints([1,0,0,0,0,0,0,0,0,0,0,0])).toEqual(1)
  });
});
