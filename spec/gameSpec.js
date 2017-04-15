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

  describe('Frames 1 - 9:', function(){
    it('first roll initiates a new frame', function(){
      game.roll(5);
      expect(game._currentFrame).toBeTruthy();
    });

    it('frame stored after second roll', function(){
      game.roll(5);
      game.roll(3);
      expect(game._framesInPlay.length).toEqual(1);
    })
  });

  describe('Score 1 - 9', function(){

    xit('initiates new frame if roll 1 is a strike', function(){
      game.roll(10);
      // frame._isStrike = true
      expect(game._framesInPlay.length).toEqual(2);
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
