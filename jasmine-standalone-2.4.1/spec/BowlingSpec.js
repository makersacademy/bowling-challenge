'use strict';

describe('Bowling', function (){
  var bowling;


  beforeEach(function(){
    bowling = new Bowling;
  });
  describe('By default', function(){
    it('has ten standing pins by default', function(){
      expect(bowling.getStandingPins()).toEqual(10);
    });

    it('begins at the first frame', function(){
      expect(bowling.getCurrentFrame()).toEqual(1);
    });

    xit('has a maximum frame', function(){

    });

    it('begins with a score of zero', function(){
      expect(bowling.getCurrentScore()).toEqual(0);
    });
  });

  describe('When a user bowls a strike', function(){
    beforeEach(function(){
      bowling.bowl(10);
    });
    it('records the pins hit when a user bowls', function(){
      expect(bowling.getStandingPins()).toEqual(0);
    });
    it('updates the frame when no more pins are standing', function(){
      expect(bowling.getCurrentFrame()).not.toEqual(1);
    });
    it('updates the score with the number of fallen pins', function(){
      expect(bowling.getCurrentScore()).toEqual(10);
    });
  });

  describe('When a user does not bowl a strike', function(){
    beforeEach(function(){
      bowling.bowl(5);
    });
  });
});
