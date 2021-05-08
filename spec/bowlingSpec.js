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

})

// describe('constructor', function() {
  //   it ('can show a new game is on Frame 1 with 0 points', function() {
  //     expect(bowling.message()).toEqual('You are currently on Frame 1, with a total score of 0.')
  //   })
  // })
