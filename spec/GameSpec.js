'use strict';

describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('initialize', function(){
    it('game starts with zero points', function(){
      expect(game.score).toEqual(0);
    });

    it('game starts on frame 1', function(){
      expect(game.frameNo).toEqual(1);
    })

    it('game starts on roll 0', function(){
      expect(game.rollCount).toEqual(0);
    })
  });

  describe('frame transition', function(){
    it('frame increases by three after six rolls', function(){
      for(var i=0; i<6; i++){
        game.makeRoll(3);
      }
      expect(game.frameNo).toEqual(4);
    })

    it('frame increases by one after 3 rolls', function(){
      for(var i=0; i<3; i++){
      game.makeRoll(7);
      }
      expect(game.frameNo).toEqual(2);
    })
  })

  describe('frame storage', function(){
    it('stores frame scores in frame history array', function(){
      game.makeRoll(5);
      game.makeRoll(3);
      expect(game.history).toEqual([[5,3]])
    })

    it('stores frame on roll 1 if it is a strike', function(){
      game.makeRoll(3);
      game.makeRoll(4);
      game.makeRoll(10);
      expect(game.history).toEqual([[3,4],[10]])
    })

    it('does not store frame on roll 1 if not a strike', function(){
      game.makeRoll(6);
      expect(game.history).toEqual([])
    })

    it('increases frame no by 2 if a strike', function(){
      game.makeRoll(10);
      expect(game.rollCount).toEqual(2)
    })
  })

  describe('is roll a strike', function(){
    it('returns true if first roll is a strike', function(){
      expect(game.isStrike(10)).toBe(true)
    });

    it('returns false if first roll is not a strike', function(){
      expect(game.isStrike(3)).toBe(false)
    })
  });

  describe('is final frame', function(){
    it('returns true if frame no is 10', function(){
      for(var i=0; i<9; i++){
        game.makeRoll(5);
        game.makeRoll(3);
      }
      expect(game.isFinalFrame()).toBe(true)
    })

    it('returns true if frame no is 10 and one roll has been made', function(){
      for(var i=0; i<9; i++){
        game.makeRoll(5);
        game.makeRoll(4);
      }
      game.makeRoll(7);
      expect(game.isFinalFrame()).toBe(true)
    })

    it('returns false if frame no is not 10', function(){
      for(var i=0; i<3; i++){
        game.makeRoll(5);
        game.makeRoll(3);
      }
      expect(game.isFinalFrame()).toBe(false)
    })
  })

  // describe('final frame', function(){
  //   beforeEach(function(){
  //     for(var i=0; i<9; i++){
  //       game.makeRoll(4);
  //       game.makeRoll(3);
  //     }
  //   });

    // it('strike on first roll doesnt make frame after 2nd roll', function(){
    //   game.makeRoll(10);
    //   game.makeRoll(5);
    //   expect(game.frameNo).toEqual(10)
    // })

    // it('spare in final frame doesnt make frame after 2nd roll', function(){
    //   game.makeRoll(5);
    //   game.makeRoll(5);
    //   expect(game.frameNo).toEqual(10)
    // })

    // it('no bonus in final frame makes frame', function(){
    //   game.makeRoll(4);
    //   game.makeRoll(4);
    //   expect(game.frameNo).toEqual(11)
    // })
  // })

  describe('game over', function(){
    beforeEach(function(){
      for(var i=0; i<10; i++){
        game.makeRoll(4);
        game.makeRoll(3);
      }
    });

    it('throws an error if user makes a roll and frame is 11', function(){
      expect(function(){game.makeRoll(8);}).toThrowError('Game Over')
    })
  })

  describe('score', function(){
    it('adds score for non bonusy rolls', function(){
      game.makeRoll(5);
      game.makeRoll(3);
      expect(game.score).toEqual(8)
    })

    it('adds spare bonus in next non-bonusy frame', function(){
      game.makeRoll(7);
      game.makeRoll(3);
      game.makeRoll(4);
      expect(game.score).toEqual(14)
    })

    it('spare and a non-bonusy frame', function(){
      game.makeRoll(7);
      game.makeRoll(3);
      game.makeRoll(4);
      game.makeRoll(3);
      expect(game.score).toEqual(21)
    })

    it('adds strike bonus in at end of next non-bonusy frame', function(){
      game.makeRoll(10);
      game.makeRoll(5);
      game.makeRoll(4);
      expect(game.score).toEqual(28)
    })

    it('2 spares and a non-bonusy frame', function(){
      game.makeRoll(7);
      game.makeRoll(3);
      game.makeRoll(4);
      game.makeRoll(6);
      game.makeRoll(7);
      game.makeRoll(1);
      expect(game.score).toEqual(39)
    })

    // it('two strikes and a non-bonusy frame', function(){
    //   game.makeRoll(10);
    //   game.makeRoll(10);
    //   game.makeRoll(7);
    //   game.makeRoll(1);
    //   expect(game.score).toEqual(53)
    // });

    it('three spares, non-bonusy', function(){
      game.makeRoll(7);
      game.makeRoll(3);
      game.makeRoll(8);
      game.makeRoll(2);
      game.makeRoll(3);
      game.makeRoll(7);
      game.makeRoll(6);
      game.makeRoll(3);
      expect(game.score).toEqual(56)
    })

    // it('three strikes', function(){
    //   game.makeRoll(10);
    //   game.makeRoll(10);
    //   game.makeRoll(10);
    //   expect(game.score).toEqual(30)
    // })

    // it('three strikes and a 5', function(){
    //   game.makeRoll(10);
    //   game.makeRoll(10);
    //   game.makeRoll(10);
    //   game.makeRoll(5);
    //   expect(game.score).toEqual(55)
    // })

    // it('three strikes and a non-bonusy frame', function(){
    //   game.makeRoll(10);
    //   game.makeRoll(10);
    //   game.makeRoll(10);
    //   game.makeRoll(5);
    //   game.makeRoll(3);
    //   expect(game.score).toEqual(81)
    // })
  })


});
