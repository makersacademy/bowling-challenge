describe("game", function() {

  beforeEach(function() {
    game = new Game();
  });

  it('have no pins down when the game start', function() {
    expect(game.fallenPins).toEqual(0);
  });

  it('can have 3 pins down after the first try', function() {
    game.hitPinsFirstTry(3);
    expect(game.fallenPins).toEqual(3);
  });

  it('can try a second time if the first try was not a strike', function(){
    game.hitPinsFirstTry(3);
    game.hitPinsSecondTry(4);
    game.sumFirstSecondTries();
    expect(game.fallenPins).toEqual(7);
  });

  // it ('can move to the second frame if the first try is a strike', function (){
  //   game.hitPins(10);
  //   expect(game.frameNumber).toEqual(2);
  // });



});