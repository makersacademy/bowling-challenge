describe("game", function() {

  beforeEach(function() {
    game = new Game();
  });

  it('have no pins down when the game start', function() {
    expect(game.fallenPins).toEqual(0);
  });

  it('can have 3 pins down after the first try', function(){
    game.hitPins(3);
    expect(game.fallenPins).toEqual(3);
  });

  // it ('can have 5 pins down after the first try', function() {
  //   game.hitPins()
  //   expect(game.fallenPins).toEqual(5);
  // });

});