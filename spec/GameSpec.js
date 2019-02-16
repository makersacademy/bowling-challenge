describe('Game', function() {
  var game;
  var frame;
  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpy('frame');
  });
  it('has no frames by default', function() {
    expect(game._frames).toEqual([]);
  });
  describe('addFrame', function() {
    it('adds a frame', function() {
      game.addFrame(frame);
      expect(game._frames).toEqual([frame]);
    })
    it('cannot add more than 10 frames', function() {
      for(var i = 0; i < 10; i++) {
        game.addFrame(frame)
      }
      expect(function(){game.addFrame(frame)}).toThrowError('Cannot add more frames!');
    })
  })
})