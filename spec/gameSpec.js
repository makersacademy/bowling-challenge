'use strict'

describe ('Game', function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = jasmine.createSpyObj('frame',['_rollNumber', '_score', '_firstRoll', '_secondRoll', '_isStrike', '_isSpare']);
  });

  it('can track how many frames have been played', function(){
    expect(game._framesInPlay).toEqual([]);
  });

  it('can track current frame', function(){
    game.roll(5);
    expect(game._currentFrame).toBeTruthy();
  });

  it('knows if game has finished', function(){
    game.roll(3);
    expect(game._gameIsFinished).toBe(false);
  });

  describe('Frames 1 - 9:', function(){
    it('first roll of game initiates a new frame', function(){
      game.roll(5);
      expect(game._currentFrame).toBeTruthy();
    });

    it('frame stored on third roll', function(){
      game.roll(5);
      game.roll(3);
      game.roll(2);
      expect(game._framesInPlay.length).toEqual(1);
    });

    it('initiates new frame when previous frame has had 2 rolls', function(){
      game.roll(6);
      game.roll(2);
      game.roll(3);
      expect(game._currentFrame.getFirstRoll()).toEqual(3);
    });

    it('stores frame (i.e. frame complete) if roll 1 is a strike', function(){
      game.roll(10);
      game.roll(2);
      expect(game._framesInPlay.length).toEqual(1);
    });
  });


  describe('Frame 10:', function(){
    it('enables bonus 2 rolls if a Strike', function(){
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(7);
      game.roll(2)
      expect(game._currentFrame._bonusRoll).toEqual(2);
    });

    it('enables bonus roll if a Spare', function(){
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(4);
      game.roll(6);
      game.roll(3);
      expect(game._currentFrame._bonusRoll).toEqual(3);
    })

    it('game holds all frames after 10th frame', function(){
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(8);
      game.roll(1);
      game.roll(1);
      expect(game._framesInPlay.length).toEqual(10);
    })
  });

  describe('Scoring Frames 1 - 9:', function(){
    it('can calculate score for non-strike/spare frame', function(){
      game.roll(5);
      game.roll(3);
      game.roll(2);
      expect(game.getFrameScore(0)).toEqual(8);
    });

    it('can calculate score for a Spare', function(){
      game.roll(6);
      game.roll(4);
      game.roll(2);
      game.roll(0);
      game.roll(0);
      expect(game.getFrameScore(0)).toEqual(12);
    })

    it('can calculate score for a Strike', function(){
      game.roll(10);
      game.roll(2);
      game.roll(4);
      game.roll(0);
      game.roll(0);
      expect(game.getFrameScore(0)).toEqual(16);
    })

  });

  describe('Scoring Frame 9', function(){
    it('can calculate score for non-strike/spare', function(){
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(8);
      game.roll(1);
      game.roll(2);
      game.roll(3);
      game.roll(4);
      expect(game.getFrameScoreNine()).toEqual(9)
    });
  });

  describe('Scoring Frame 10:', function(){
    it('can retrieve score', function(){
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(8);
      game.roll(1);
      game.roll(3);
      expect(game.getFrameScoreTen(this._framesInPlay)).toEqual(9);
    });
  });

  describe('End Sequence', function(){
    it('initiates end sequence once tenth frame complete', function(){
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(8);
      game.roll(1);
      game.roll(3)
      expect(game._endSequence()).toEqual("Game Finished");
    });

    it('calculates game total score', function(){
      game.roll(1);
      game.roll(2);
      game.roll(1);
      game.roll(2);
      game.roll(1);
      game.roll(2);
      game.roll(1);
      game.roll(2);
      game.roll(1);
      game.roll(2);
      game.roll(1);
      game.roll(2);
      game.roll(1);
      game.roll(2);
      game.roll(1);
      game.roll(2);
      game.roll(1);
      game.roll(2);
      game.roll(1);
      game.roll(2);
      game.roll(3);
      expect(game._totalScore()).toEqual(30);
    });
  })

  describe('Random Rolls', function(){
    it('#generateRandRoll1 - randomly generates number of knocked pins between 1 - 10', function(){
      game.generateRandRoll1();
      expect(game._randRoll1).toBeLessThan(11);
    });

    it('#generateRandRoll2 - randomly generates number of knocked pins from leftover pins', function(){
      game.generateRandRoll1();
      game.generateRandRoll2();
      expect(game._randRoll1 + game._randRoll2).toBeLessThan(11);
    });
  });



})
