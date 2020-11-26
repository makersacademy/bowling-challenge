'use strict';

describe('Game', function(){
  let game;
  let frameClass;
  let frame;

  class frameDouble {
    constructor(){
      this.addToFrameCallCount = 0
      this.currentFrame = []
    }

    addToFrame(pins){
      this.addToFrameCallCount++;
    }

    isFinal(){
      return
    }

    isSpare(){
      return true
    }

    isStrike(){
      return true
    }

    isBonus(){
      return true
    }

    total(){
      return 'total has been called'
    }
  }

  beforeEach(function(){
    game = new Game();
  });
  
  describe('#bowl', function(){
    it('creates a new frame', function(){
      game.bowl(2, frameDouble);
      expect(game._frame).toBeInstanceOf(frameDouble);
    });

    it('adds both pins to frame in regular frame', function(){
      for (var i = 0; i < 2; i ++){
        game.bowl(2, frameDouble);
      }
      expect(game._frame.addToFrameCallCount).toEqual(2)
    })

    it('completes frames for strikes', function(){
      game.bowl(10, frameDouble);
      expect(game._lastFrame()).toBeInstanceOf(frameDouble);
      expect(game._lastFrame().addToFrameCallCount).toEqual(2)
    })

    it('adds third score to bonus frames', function(){
      for (var i = 0; i < 18; i ++){
        game.bowl(2, frameDouble);
      }
      for (var i = 0; i < 3; i ++){
        game.bowl(10, frameDouble);
      }
      expect(game._frame.addToFrameCallCount).toEqual(3)
    })
  });

  describe('#score', function(){
    it('adds total of frame to 0', function(){
      for (var i = 0; i < 2; i ++){
        game.bowl(2, frameDouble);
      }
      expect(game.score()).toEqual('0total has been called')
    })
  })

  describe('#newGame', function(){
    it('Wipes the current rolls history and roll number', function(){
      for (var i = 0; i < 2; i ++){
        game.bowl(2, frameDouble);
      }
      expect(game._rolls.length).toEqual(1);
      expect(game._rollNumber).toEqual(2);
      game.newGame();
      expect(game._rolls).toEqual([]);
      expect(game._rollNumber).toEqual(0);
    });
  });
});