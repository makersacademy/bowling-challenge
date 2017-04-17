'use strict';

describe ('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('intialize', function(){
    it('score starts at zero', function(){
      expect(bowling.getCurrentScore()).toEqual(0);
    });

    it('isFrameComplete returns false', function(){
      expect(bowling.isFrameComplete()).toBeFalsy();
    });
  });

  describe('add', function(){
    it('score can have be added to', function(){
      bowling.add(1);
      expect(bowling.getCurrentScore()).toEqual(1);
    });
  });

  describe('frame', function(){
    it('begins on Frame #1', function(){
      expect(bowling.getCurrentFrame()).toEqual(1);
    });
  });

  describe('roll', function(){
    it('begins on Roll #1', function(){
      expect(bowling.getCurrentRoll()).toEqual(1);
    });
  });

  describe('bowl', function(){
    it('increments roll by 1', function(){
      bowling.bowl(6);
      expect(bowling.getCurrentRoll()).toEqual(2);
    });

    it('getFrameScore returns the number of pins knocked down on a roll', function(){
      bowling.bowl(4);
      expect(bowling.getFrameScore()).toEqual(4);
    });
  });

  describe('frame complete', function(){
    it('isFrameComplete is true after 2 bowls', function(){
      bowling.bowl(3);
      bowling.bowl(4);
      expect(bowling.isFrameComplete()).toBeTruthy();
    });
  });


});
