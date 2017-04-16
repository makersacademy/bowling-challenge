'use strict';

describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('initialize', function(){
    it('game starts with zero points', function(){
      expect(game.getScore()).toEqual(0);
    });

    it('game starts on frame 1', function(){
      expect(game.getFrameNo()).toEqual(1);
    })

    it('game starts on roll 0', function(){
      expect(game.getRollCount()).toEqual(0);
    })

    it('initializes with 0 bonus points', function(){
      expect(game.getBonusPoints()).toEqual(0);
    })
  });

  describe('frame transition', function(){
    it('frame increases by three after six rolls', function(){
      for(var i=0; i<6; i++){
        game.makeRoll(3);
      }
      expect(game.getFrameNo()).toEqual(4);
    })

    it('frame increases by one after 3 rolls', function(){
      for(var i=0; i<3; i++){
      game.makeRoll(7);
      }
      expect(game.getFrameNo()).toEqual(2);
    })
  })

  describe('frame storage', function(){
    it('stores frame scores in frame history array', function(){
      game.makeRoll(5);
      game.makeRoll(3);
      expect(game.getFrameHistory()).toEqual([[5,3]])
    })

    it('stores frame on roll 1 if it is a strike', function(){
      game.makeRoll(3);
      game.makeRoll(4);
      game.makeRoll(10);
      expect(game.getFrameHistory()).toEqual([[3,4],[10]])
    })

    it('does not store frame on roll 1 if not a strike', function(){
      game.makeRoll(6);
      expect(game.getFrameHistory()).toEqual([])
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

  describe('is frame bonusy', function(){
    it('returns true if last frame had a strike', function(){
      game.currentFrame = [10];
      expect(game.isFrameBonus()).toBe(true)
    })

    it('returns true if last frame had a spare', function(){
      game.currentFrame = [7,3];
      expect(game.isFrameBonus()).toBe(true)
    })

    it('returns false if last frame was not bonusy', function(){
      game.currentFrame = [5,1];
      expect(game.isFrameBonus()).toBe(false)
    })
  });

  describe('was previous frame bonusy', function(){
    it('returns true if previous frame had a strike', function(){
      game.makeRoll(10)
      expect(game.isPreviousBonus()).toBe(true)
    })

    it('returns true if previous frame had a spare', function(){
      game.makeRoll(8);
      game.makeRoll(2);
      expect(game.isPreviousBonus()).toBe(true)
    })

    it('returns false if previous game was not bonusy', function(){
      game.makeRoll(7);
      game.makeRoll(3);
      game.makeRoll(9);
      game.makeRoll(0);
      expect(game.isPreviousBonus()).toBe(false)
    })
  })

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
        game.makeRoll(3);
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

  describe('strike or spare', function(){
    it('returns strike if strike', function(){
      for(var i=0; i<9; i++){
        game.makeRoll(5);
        game.makeRoll(3);
      }
      game.makeRoll(10);
      expect(game.strikeOrSpare()).toEqual('strike')
    })

    it('returns spare if spare', function(){
      for(var i=0; i<9; i++){
        game.makeRoll(5);
        game.makeRoll(3);
      }
      game.makeRoll(8);
      game.makeRoll(2);
      expect(game.strikeOrSpare()).toEqual('spare')
    })
  })


});
