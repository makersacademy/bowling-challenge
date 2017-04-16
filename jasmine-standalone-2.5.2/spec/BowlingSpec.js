'use strict';

describe('Bowling', function() {
  var bowling;

  beforeEach(function(){
    bowling = new Bowling;
  });

  describe("Throw / Strike / Spare", function(){

    it('User can input one roll', function(){
      bowling.firstThrow(3);
      expect(bowling.frame.first).toEqual(3);
    });

    it('User can make a second roll and both score accumulate for a frame', function(){
      bowling.firstThrow(3);
      bowling.secondThrow(6);
      expect(bowling.frameScore()).toEqual(9);
    });

    it('User can make a Strike', function(){
      bowling.firstThrow(10);
      expect(bowling.strike).toEqual(true);
    });

    it("Check Strike is not set if 10 pins are scored on 2 throws", function(){
      bowling.firstThrow(5);
      bowling.secondThrow(5);
      expect(bowling.strike).toEqual(false);
    });

    it("Check you can't throw a second time after a strike", function(){
      bowling.firstThrow(10);
      expect(function(){
        bowling.secondThrow(2)}).toThrowError("Can't throw again after a strike")
      });

      it("User can make a Spare", function(){
        bowling.firstThrow(5);
        bowling.secondThrow(5);
        expect(bowling.spare).toEqual(true);
      });

  });

  describe("Tests for Scoring", function(){

    it("Check the score is right after a normal frame", function(){
      bowling.firstThrow(4);
      bowling.secondThrow(5);
      expect(bowling.currentScore).toEqual(9);
    });

    it("Check the score is right after a couple normal frame", function(){
      bowling.firstThrow(3);
      bowling.secondThrow(3);
      bowling.firstThrow(4);
      bowling.secondThrow(2);
      expect(bowling.currentScore).toEqual(12);
    });

    it("Scores does not update after a strike", function(){
      bowling.firstThrow(10);
      expect(bowling.currentScore).toEqual(0);
    });

    it("Scores after a strike updates after two non-strike throw", function(){
      bowling.firstThrow(10);
      bowling.firstThrow(4);
      bowling.secondThrow(1);
      expect(bowling.currentScore).toEqual(20);
    });

    // it("Scores is set correctly after multiple strikes", function(){
    //   bowling.firstThrow(10);
    //   // bowling.firstThrow(10);
    //   // bowling.firstThrow(10);
    //   // bowling.firstThrow(7);
    //   // bowling.secondThrow(2);
    //   // bowling.firstThrow(3);
    //   // bowling.secondThrow(4);
    //   expect(bowling.currentScore).toEqual(92);
    // });

  });

});
