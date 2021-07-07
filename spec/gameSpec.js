describe('Game', function() {
  beforeEach(function() {
    game = new Game();
    game.startFrame();
  });

  it('it has 10 frames by default', function(){
    expect(game.maxNumberOfFrames()).toEqual(10);
  });

  it('stores each frame', function () {
    expect(game.frames()[0]).toEqual(frame);
  })

  it('returns last frame', function functionName() {
    expect(game.currentFrame()).toEqual(frame);
  });

  it('returns nth frame', function () {
    frame2 = new Frame();
    frame3 = new Frame();
    game.add(frame2);
    game.add(frame3);
    expect(game.nthFrame(3)).toEqual(frame3);
  });

  it('allowed to bowl', function () {
    game.bowl(3);
    expect(game.currentFrame().firstBowl).toEqual(3);
  });

  it('allowed to bowl twice and finish the frame', function () {
    game.bowl(3);
    game.bowl(5);
    expect(game.currentFrame().lastBowl).toEqual(null);
  });

  describe('starts a game',function functionName() {
    it('creates a new frame and adds it to frames', function () {
      game = new Game();
      game.startFrame();
      expect(game.frames().length).toEqual(1);
    });

    it('creates a new frame when one previous one is finished', function () {
      game.bowl(1);
      game.bowl(9);
      expect(game.frames().length).toEqual(2);
    });
  });

  // it('only creates 10 frames', function () {
  //   var times = 10;
  //   for(var i=0; i < times; i++){
  //     game.bowl(10);
  //   };
  //   expect(function(){game.bowl(10);}).toThrowError('Game is finished!');
  // });

  it('can determine if previous frame was a strike', function () {
    game.bowl(10);
    expect(game.isPreviousFrameStrike()).toEqual(true);
  })

  it('can determine if previous frame was a spare', function () {
    game.bowl(1);
    game.bowl(9);
    expect(game.isPreviousFrameSpare()).toEqual(true);
  })

  describe('can calculate bonus points',function () {
    describe('if previous frame is a strike',function () {
      it('if the current frame is a strike)', function () {
        game.bowl(10);
        game.bowl(10);
        expect(game.nthFrame(1).bonusPoints()).toEqual(10);
      });

      it('if the 2 frames before is a also strike)', function () {
        game.bowl(10);
        game.bowl(10);
        game.bowl(1);
        expect(game.nthFrame(1).bonusPoints()).toEqual(11);
      });

      it('if the current frame is a spare', function () {
        game.bowl(10);
        game.bowl(1);
        game.bowl(9);
        expect(game.nthFrame(1).bonusPoints()).toEqual(10);
      });

      it('if the current frame is a normal frame', function () {
        game.bowl(10);
        game.bowl(2);
        game.bowl(4);
        expect(game.nthFrame(1).bonusPoints()).toEqual(6);
      });
    });

    describe('if the previous frame is a spare', function () {
      it('if the current frame is a strike', function () {
        game.bowl(9);
        game.bowl(1);
        game.bowl(10);
        game.bowl(1); //test if it only adds 10
        expect(game.nthFrame(1).bonusPoints()).toEqual(10);
      });

      it('if the current frame is a spare', function () {
        game.bowl(9);
        game.bowl(1);
        game.bowl(1);
        game.bowl(5); //test if it only adds 1 instead of 6
        expect(game.nthFrame(1).bonusPoints()).toEqual(1);
      });

      it('if the current frame is a normal frame', function () {
        game.bowl(5);
        game.bowl(1);
        game.bowl(1);
        expect(game.nthFrame(1).bonusPoints()).toEqual(0);
      });
    });
  });
});
