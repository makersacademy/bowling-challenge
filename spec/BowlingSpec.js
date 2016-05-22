(function () {
   'use strict';
}());

describe('Bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  })

  describe('Score', function(){
    it('Score begins at 0', function(){
      expect(bowling._score).toEqual(0);
    });
    it('Score is kept in an object', function(){
      bowling.takeTurn(1);
      bowling.takeTurn(2);
      expect(bowling.scoreByFrame(1)).toEqual([1,2]);
    });
    it('Running total score is kept', function(){
      bowling.takeTurn(1);
      bowling.takeTurn(2);
      expect(bowling.totalScore()).toEqual(3);
    });
  });

  describe('Strike', function() {
    it('The total score is correct when a player strikes', function(){
      bowling.takeTurn(10);
      bowling.takeTurn(3);
      bowling.takeTurn(2);
      expect(bowling.totalScore()).toEqual(20);
    });

    it('The frame score is correct when a player strikes', function(){
      bowling.takeTurn(10);
      bowling.takeTurn(3);
      bowling.takeTurn(2);
      expect(bowling.scoreByFrame(1)).toEqual([10,5]);
    });

    xit('Calculates consecutive strikes', function() {
      bowling.takeTurn(10);
      bowling.takeTurn(10);
      bowling.takeTurn(4);
      bowling.takeTurn(4);
      expect(bowling.totalScore()).toEqual(50);
    });
  });

  describe('Frames', function(){ //delete later
    it('Keeps track of which frame is being played', function(){
      bowling.takeTurn(1);
      bowling.takeTurn(3);
      expect(bowling._currentFrame).toEqual(2);
    });
  });

});
