describe('Game', function() {
  var game;
  var frame;
  var frame2;
  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['frameScore']);
    frame2 = jasmine.createSpyObj('frame', ['frameScore']);
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
  describe('total score', function() {
    it('returns score', function() {
      game.addFrame(frame);
      game.addFrame(frame2);
      frame.frameScore.and.returnValue(9);
      frame2.frameScore.and.returnValue(4);
      expect(game.gameScore()).toEqual(13);
    })
  })
})