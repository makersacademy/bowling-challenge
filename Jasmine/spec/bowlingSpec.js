"use strict";

describe('bowling', function(){

  var bowling;

  beforeEach(function(){
    bowling = new Bowling();
  })

  describe('starts the game', function(){
    it('with zero points', function(){
      expect(bowling.currentScore()).toEqual(0)
    })
  })

})