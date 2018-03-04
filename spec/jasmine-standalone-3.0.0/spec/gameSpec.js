describe('Game', function() {
  var game;
  var frame;
  var currentFrame;

  beforeEach(function() {
    game = new Game();
    // frame = new Frame();
    frame = jasmine.createSpyObj('frame', ['score','strike','spare',
                                           'ball1',
                                           'ball2', 'getScore']);
    frame.ball1 = 3;
    frame.ball2 = 4
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
      expect(game.frameTotal(0, frame.ball1, frame.ball2)).toBe(7);
    });
    it('returns strike if ball1 is strike', function() {
      frame.ball1 = 'strike';
      expect(game.frameTotal(0, frame.ball1, frame.ball2)).toBe('strike');
    });
    it('returns spare if ball2 is spare', function() {
      frame.ball2 = 'spare';
      expect(game.frameTotal(0, frame.ball1, frame.ball2)).toBe('spare');
    });
  });

  describe('.strike', function() {
    it('returns total score for a frame when strike', function() {
      expect(game.strike(0, 4, 4)).toBe(18);
    });
  });

  describe('.spare', function() {
    it('returns total score for a frame when spare', function() {
      expect(game.spare(0, 7)).toBe(17);
    });
  });

  describe('.getFrame', function() {
    it('returns a frame when given array pos as param', function() {
      game.addFrame(frame);
      var frame1 = new Object();
      game.addFrame(frame1);

      expect(game.getFrame(1)).toBe(frame1)
    })
  });


  // describe('.frameComplete', function() {
  //   it('checks whether frame is complete', function() {
  //     expect(game.frameComplete(0))
  //   })
  // })
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
