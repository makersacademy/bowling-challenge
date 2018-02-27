describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['score','strike','spare',
                                           'ball1',
                                           'ball2', 'getScore']);
  });

  describe('.addFrame', function() {
    it('has an array', function() {
      game.addFrame(frame);
      expect(game._frames).toContain(frame);
    });
  });

  const frame = {
    get value() {},
    set value(v) {}
  };

  describe('.frameTotal', function() {
    it('returns score if neither strike nor spare', function() {
      spyOnProperty(frame, 'score').and.returnValue(7);

      game.addFrame(frame);
      // frame.strike.and.callFake(function() {
      //   return false;
      // });
      // frame.spare.and.callFake(function() {
      //   return false;
      // });
      // frame.score.and.callFake(function() {
      //   return 7
      // });
      spyOnProperty(frame1, 'getScore', 'get').and.returnValue(7);
      // spyOn(Frame, 'score').and.returnValue(7)

      // frame.ball1.and.callFake(function() {
      //   return 4;
      // });
      // frame.ball1.and.callFake(function() {
      //   return 3;
      // });
      expect(game.frameTotal(0)).toBe(7);
    });
  });
});
