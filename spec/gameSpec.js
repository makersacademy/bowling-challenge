describe("Game", function() {
  beforeEach(function() {
    game  = new Game();
  });

  it("should sum the number of pines throwed in the whole game", function(){
    expect(game.calculateTotalPoints([1,0,0,0,0,0,4,0,0,0,0,0])).toEqual(5)
  });  
});
