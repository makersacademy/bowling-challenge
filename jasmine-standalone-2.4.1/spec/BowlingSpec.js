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

    it('has a defualt bowl number', function(){
      expect(bowling.getCurrentBowl()).toEqual(1);
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

    it('does not update the bowl number', function(){
      expect(bowling.getCurrentBowl()).toEqual(1);
    });

  });

  describe('When a user does not bowl a strike', function(){
    beforeEach(function(){
      bowling.bowl(5);
    });

    it('records the pins hit when a user bowls', function(){
      expect(bowling.getStandingPins()).toEqual(5);
    });

    it('does not update the frame whilr pins are standing', function(){
      expect(bowling.getCurrentFrame()).toEqual(1);
    });

    it('updates the score with the number of fallen pins', function(){
      expect(bowling.getCurrentScore()).toEqual(5);
    });

    it('does updates the bowl number', function(){
      expect(bowling.getCurrentBowl()).toEqual(2);
    });
  });

  it('prevents further rolls when the game is over', function(){
    for(var i=0; i < 9; i++){
      bowling.frameUpdater();
    }
    expect(function() { bowling.frameUpdater(); }).toThrowError("game is over");
  });
});
