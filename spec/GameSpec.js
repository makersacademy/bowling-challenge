'use strict';

describe('Game', function(){
  var game;
  var roll;
  var rollTwo;

  beforeEach(function(){
    game = new Game();
    roll = jasmine.createSpyObj('roll',['knockedDownPins','rollNumber']);
    rollTwo = jasmine.createSpyObj('rollTwo',['knockedDownPins','rollNumber']);
  });


  it('roll number is 0 by default', function(){
    expect(game.rollNumber()).toEqual(0);
  });

  it('score is 0 by default', function(){
    expect(game.score()).toEqual(0);
  });

  it('frame number is 0 by default', function(){
    expect(game.frameNumber()).toEqual(0);
  });

  it('tracks the roll number', function(){
    game.increaseScore(roll);
    expect(game.rollNumber()).toEqual(1);
  });

  it('tracks the frame number', function(){
    game.increaseScore(roll);
    expect(game.frameNumber()).toEqual(1);
  });

  it('can increase the score at first roll', function(){
    spyOn(roll,'knockedDownPins').and.returnValue(10);
    game.increaseScore(roll);
    expect(game.score()).toEqual(10);
  });

  describe('can increase the score when pins are left after first roll', function(){

    beforeEach(function(){
      spyOn(roll,'knockedDownPins').and.returnValue(7);
      game.increaseScore(roll);
    });

    it('can increase the score at second roll', function(){
      spyOn(rollTwo,'knockedDownPins').and.returnValue(2);
      game.increaseScore(rollTwo);
      expect(game.score()).toEqual(9);
    });

  });
});
