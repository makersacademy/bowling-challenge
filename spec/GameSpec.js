describe('Game', function() {
  var game;
  var frame;
  var frame2;
  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['frameScore', 'isASpare', 'isAStrike']);
    frame2 = jasmine.createSpyObj('frame', ['frameScore', 'isASpare', 'isAStrike', 'pinsFirstRoll']);
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
  describe('frameBonus', function(){
    it('returns 0 bonus when not strike or spare', function(){
      game.addFrame(frame);
      game.addFrame(frame2);
      frame.isASpare.and.returnValue(false)
      frame.isAStrike.and.returnValue(false)
      expect(game.frameBonus(frame)).toEqual(0)
    });

    it('returns bonus of current frame when strike', function(){
      game.addFrame(frame);
      game.addFrame(frame2);
      frame.isASpare.and.returnValue(false)
      frame.isAStrike.and.returnValue(true)
      frame2.frameScore.and.returnValue(9)
      expect(frame2.frameScore()).toHaveBeenCalled
      expect(game.frameBonus(frame)).toEqual(9)
    });

    it('returns bonus of current frame when spare', function(){
      game.addFrame(frame);
      game.addFrame(frame2);
      frame.isASpare.and.returnValue(true)
      frame.isAStrike.and.returnValue(false)
      frame2.pinsFirstRoll.and.returnValue(7)
      expect(frame2.pinsFirstRoll()).toHaveBeenCalled
      expect(game.frameBonus(frame)).toEqual(7)
    });
  });
})