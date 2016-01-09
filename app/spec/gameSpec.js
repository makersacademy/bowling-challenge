describe('Game', function() {
  var game;
  var frame = null;

  beforeEach(function() {
    frame = {
      addRoll: function() {},
      isComplete: function() { return false },
      getFrameData: function() {}
    };
    game = new Game(frame);
  });

  describe('#getFrame', function() {
    it('returns the score for frame specified as argument', function() {
      game._frameLog.push('random data');
      expect(game.getFrame(1)).toEqual('random data');
    });
  });

  describe('#getScore', function() {
    it('returns 0 at start', function() {
      expect(game.getScore()).toEqual(0);
    });
  });

  describe('#logRoll', function() {
    it('should call addRoll with argument passed on frame', function() {
      spyOn(frame, 'addRoll')
      game.logRoll(5);
      expect(frame.addRoll).toHaveBeenCalledWith(5);
    });

    it('should ensure frame gets logged when it is complete', function() {
      spyOn(frame, 'getFrameData').and.returnValue('frame data');
      spyOn(frame, 'isComplete').and.returnValue(true);
      game.logRoll(0)
      expect(game.getFrame(1)).toEqual('frame data')
    });

    it('should ensure score gets logged when it is complete', function() {
      spyOn(frame, 'getFrameData').and.returnValue({rolls: [], total: 6});
      spyOn(frame, 'isComplete').and.returnValue(true);
      game.logRoll(0)
      expect(game.getScore()).toEqual(6)
    });
  });

});
