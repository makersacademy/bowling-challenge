'use strict';

describe ('Bowling', function(){
  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  });

  describe('score', function(){
    it('starts at zero', function(){
      expect(bowling.getCurrentScore()).toEqual(0);
    });

    it('can have be added to', function(){
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


});
