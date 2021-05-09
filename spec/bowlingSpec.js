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
    expect(bowling.score()).toEqual(0)
    })
  })

  describe('normal game', function() {
    it('produces results from a normal game', function(){
     manyRolls(1,20)
     expect(bowling.score()).toEqual(20)
    })
    it('can raise error if more than 10 pins entered', function(){
      expect(function () { bowling.roll(17) }).toThrowError(Error, 'Enter correct number of pins knocked down: 1-10 only!')
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

  describe('strike game', function(){
    it('can roll a strike', function(){
      bowling.roll(10)
      bowling.roll(5)
      bowling.roll(3)
      manyRolls(0,16)
      expect(bowling.score()).toEqual(26)
    })
    it('can calculate final strike frame correctly', function(){
      manyRolls(3,18)
      bowling.roll(10)
      bowling.roll(7)
      bowling.roll(2)
      expect(bowling.score()).toEqual(73)
    })
    it('can roll a perfect game', function(){
      manyRolls(10,12)
      expect(bowling.score()).toEqual(300)
    })
  })

})