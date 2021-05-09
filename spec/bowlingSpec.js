'use strict';

describe('Bowling', function() {
  let bowling;

  beforeEach(function() {
    bowling = new Bowling;
  });

  let manyRolls = function (pins, rounds) {
    for(let i = 0; i < rounds; i++) {
      bowling.roll(pins)
    }
  };

  describe('guttergame', function() {
    it('can roll a gutter game' , function() {
    manyRolls(0,20)
    expect(bowling.score()).toBe(0)
    })
  })

  describe('can roll a normal game', function() {
    it('can roll produces resuls from a normal game', function(){
     manyRolls(1,20)
     expect(bowling.score()).toEqual(20)
    })
  })

  describe('spare game', function(){
    it('can roll a spare game', function(){
      bowling.roll(8)
      bowling.roll(2)
      bowling.roll(4)
      manyRolls(0,17)
      expect(bowling.score()).toEqual(18)
    })
    it('can roll all spares in a game', function(){
      manyRolls(5,21)
      expect(bowling.score()).toEqual(150)
    })
    it('can correclty calculate last spare frame', function() {
      manyRolls(2,18)
      bowling.roll(7)
      bowling.roll(3)
      bowling.roll(7)
      expect(bowling.score()).toEqual(53)
    })
  })

})
