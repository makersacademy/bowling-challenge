describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    // frame = new Frame();
    frame = jasmine.createSpyObj('frame', ['score','strike','spare',
                                           'ball1',
                                           'ball2', 'getScore']);
    // frame.score = null;
    frame.ball1 = 3;
    frame.ball2 = 4
    console.log(frame.score);
  });

  describe('.addFrame', function() {
    it('has an array', function() {
      game.addFrame(frame);
      expect(game._frames).toContain(frame);
    });
  });

  describe('.frameTotal', function() {
    it('returns score if neither strike nor spare', function() {
      game.addFrame(frame);
      console.log(frame);

      expect(game.frameTotal(0, frame.ball1, frame.ball2)).toBe(7);
    });
  });


});




// spyOnProperty(frame, 'score').and.returnValue(7);

// frame.strike.and.callFake(function() {
//   return false;
// });
// frame.spare.and.callFake(function() {
//   return false;
// });
// frame.score.and.callFake(function() {
//   return 7
// });
// spyOn(Frame, 'score').and.returnValue(7)

// frame.ball1.and.callFake(function() {
//   return 4;
// });
// frame.ball1.and.callFake(function() {
//   return 3;
// });
