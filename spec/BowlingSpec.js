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
      expect(bowling.scoreByFrame.frame1).toEqual([1,2]);
    });
    it('Running total score is kept', function(){
      bowling.takeTurn(1);
      bowling.takeTurn(2);
      expect(bowling.totalScore()).toEqual(3);
    });
  });

});
