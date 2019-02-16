describe('Game', function() {

  var game;

  beforeEach(function() {
    function mockConstructorFunction() {}
    game = new Game(mockConstructorFunction)
  });

  it('should have 10 frames', function() {
    expect(game._frames.length).toEqual(10);
  });

});
