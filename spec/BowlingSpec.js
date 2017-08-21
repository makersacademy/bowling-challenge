'use strict';

describe('Bowling', function() {

  var bowling;


  beforeEach(function() {
    bowling = new Bowling();
  });

  var bowlOne = function(){
    bowling.throw(4);
  };

  var bowlTwo  = function(){
    bowling.throw(4);
    bowling.throw(3);
  };

  var bowlFour  = function(){
    bowling.throw(7);
    bowling.throw(1);
    bowling.throw(3);
    bowling.throw(5);
  };

  var bowlStrike = function(){
    bowling.throw(10);
  };

  var bowlSpare = function(){
    bowling.throw(4);
    bowling.throw(6);
  };

  describe('setup', function(){

    it('has 10 frames', function(){
      expect(bowling.frames.length).toEqual(10);
    });

    it('starts with a score of 0', function(){
      expect(bowling.totalScore).toEqual(0);
    });
  });

  describe('single frame scoring', function(){

    it('stores the score from the first throw in a frame', function(){
      bowlOne();
      expect(bowling.frames[0].pins[0]).toEqual(4);
    });

    it('stores the score from the second throw in a frame', function(){
      bowlTwo();
      expect(bowling.frames[0].pins[1]).toEqual(3);
    });
  });

  describe('frames', function(){

    it('keeps track of which frame is in play', function(){
      expect(bowling.index).toEqual(0);
      bowlTwo();
      expect(bowling.index).toEqual(1);
    });

    it('stores the scores in the correct frame', function(){
      bowlFour();
      expect(bowling.frames[0].pins[0]).toEqual(7);
      expect(bowling.frames[0].pins[1]).toEqual(1);
      expect(bowling.frames[1].pins[0]).toEqual(3);
      expect(bowling.frames[1].pins[1]).toEqual(5);
    });
  });

  describe('current score', function(){

    it('tracks the current score', function(){
      bowlTwo();
      expect(bowling.frames[0].runningScore).toEqual(7);
      bowlTwo();
      expect(bowling.frames[1].runningScore).toEqual(14);
    });
  });

  describe('strikes', function(){

    it('knows when a strike as been scored', function(){
      bowlStrike();
      expect(bowling.frames[0].strike).toBe(true);
    });

    it('knows scoring 10 on the 2nd ball in a frame is not a strike', function(){
      bowling.throw(0);
      bowling.throw(10);
      expect(bowling.frames[0].strike).toBe(false);
    });

    it('awards bonus to strike frames', function(){
      bowlStrike();
      bowlTwo();
      expect(bowling.secondPrevious.runningScore).toEqual(17);
    });

    it('awards strike bonus after successive strikes', function(){
      for (var i = 0; i < 4; i++) {
        bowlStrike();
      };
      expect(bowling.frames[0].runningScore).toEqual(30);
      expect(bowling.frames[1].runningScore).toEqual(50);
      expect(bowling.frames[2].runningScore).toEqual(60);
    });
  });

  describe('spares', function(){

    it('knows when a spare has been scored', function(){
      bowlSpare();
      expect(bowling.frames[0].spare).toBe(true);
    });

    it('awards spare bonus', function(){
      bowlSpare();
      bowlTwo();
      expect(bowling.secondPrevious.runningScore).toEqual(14);
    });
  });

  describe('final frame', function(){

    it("unless last frame is a spare or stirke, it won't allow another throw", function(){
      for (var i = 0; i < 10; i++) {
        bowlTwo();
      };
      expect(function(){ bowling.throw(7); }).toThrowError('End of game');
    });
  });
});
