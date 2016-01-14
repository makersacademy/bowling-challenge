

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    frame = jasmine.createSpyObj('frame',
    ['getFrameResults', 'receivePins', 'frames', 'getFrameScores', 'currentFrame', 'isTooManyPinsInOneFrame'])
    game = new Game(frame);
  });


  describe ('#bowlA', function() {
    it('returns error if more than 10 pins knocked down per frame', function() {
        game.framesLog = {isTooManyPinsInOneFrame: function() {}}
        game.framesLog.frames = {length: function() {}}
        spyOn(game.framesLog, 'isTooManyPinsInOneFrame').and.returnValue(true)
        spyOn(game.framesLog.frames, 'length').and.returnValue(1)
        expect(function() {game.bowlA(3)}).toThrowError('Nope. Ten pins max per frame')
    });
  });

  describe('#getBallCount', function() {
    it('can return the current number (1) of balls bowled', function() {
      game.bowlA(5);
      expect(game.getBallCount()).toEqual(1);
    });

    it('can return the current number (5) of balls bowled', function() {
      var n;
      for (n = 0; n <5; n ++) {
        game.bowlA(5);
      }
      expect(game.getBallCount()).toEqual(5);
    });

  });

  describe('#checkScore', function() {
    it('is defined', function() {
      expect(game.checkScore()).toBeDefined();
    });

    it('can return the correct score after multiple balls', function () {
      game.bowlA(4);
      game.bowlA(5);
      game.bowlA(4);
      expect(game.checkScore()).toEqual(13);
    });

  });

  describe('#seeFrameResults', function() {
    it('calls out to frame', function() {
      game.seeFrameResults(frame);
      expect(frame.getFrameResults).toHaveBeenCalled();
    })
  });

  describe('#_isEndOfGame', function() {
    it('returns an end of game message after 10 frames', function() {
      frame.frames = [1,2,3,4,5,6,7,8,9,10];
      expect(game.bowlA(4)).toEqual('Game over: Ten frames played');
    });
  });

  describe('#seeFrameScores', function() {
    it('calls to frame', function() {
      game.seeFrameScores();
      expect(frame.getFrameScores).toHaveBeenCalled();
    });
  });

});
