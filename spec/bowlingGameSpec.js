describe('Game', function(){
  'use strict'

  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj("frame", ["_getRegularScore","_results","getStrikeStatus", "getSpareStatus"]);
  });

  describe('::new', function(){
    it('when a new game is created the first frame is called and result is 0',function(){
      expect(game._frameResults.length).toBe(0);
    });
  });

  describe('#createNewFrame', function(){
    it('creates a new frame every time is called',function(){
      game.createNewFrame();
      game.createNewFrame();
      expect(game._frameNumber).toBe(2);
    });
  });

  describe('#getFrameRegularResult 1', function(){
    it('game push the result of each frame',function(){
      game.getFrameRegularResult(frame);
      expect(frame._getRegularScore).toHaveBeenCalled();
    });
  });

  describe('#updateLastGameResults', function(){
    it('updates game scores with frame results',function(){
      frame._results=[1];
      game._frameScore=[1];
      game.updateLastGameResults(frame);
      expect(game._frameScore[game._frameScore.length-1]).toBe(2);
    });
  });

  describe('#saveLastGameStrikeSpareStatus', function(){
    it('equals _lastStrikeValue to yes if strike',function(){
      game.saveLastGameStrikeSpareStatus(frame);
      expect(frame.getStrikeStatus).toHaveBeenCalled();
    });

    it('equals _lastSpareValue to yes if spare',function(){
      game.saveLastGameStrikeSpareStatus(frame);
      expect(frame.getSpareStatus).toHaveBeenCalled();
    });
  });

  describe('#_finalScore', function(){
    it('calculates results according to each frame',function(){
        expect(game._finalScore([1,2,3])).toBe(6)
    });
  });
});
