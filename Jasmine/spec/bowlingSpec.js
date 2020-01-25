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

  describe('adds the value of two balls', function(){
    it('that combined are < 10', function() {
      expect(bowling.play(6, 2)).toEqual(8)
    })
  })

})