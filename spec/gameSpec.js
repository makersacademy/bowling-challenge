describe('Game', function(){
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('begins with frame number one', function() {
    expect(game.frameNumber).toEqual(1);
  });

  it('begins with ten pins', function() {
    expect(game.pins).toEqual(10);
  });

  it('begins with two rolls', function() {
    expect(game.rollNumber).toEqual(2);
  });
});
