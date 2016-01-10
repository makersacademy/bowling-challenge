

describe('Game', function() {
  var game;
  var frame;

  beforeEach(function() {
    frame = jasmine.createSpyObj('frame', ['getFrameResults', 'receivePins'])
    game = new Game(frame);
  });

  describe('#getBallCount', function() {
    it('can return the current number (1) of balls bowled', function() {
      game.bowlA(5);
      expect(game.getBallCount()).toEqual(1);
    });

    it('can return the current number (5) of balls bowled', function() {
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

});
