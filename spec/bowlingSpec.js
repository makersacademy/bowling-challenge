'use strict';

describe('Bowling', function() {
  let bowling;

  beforeEach(function() {
    bowling = new Bowling;
  });

  describe('constructor', function() {
    it ('can show a new game is on Frame 1 with 0 points', function() {
      expect(bowling.message()).toEqual('You are currently on Frame 1, with a total score of 0.')
    })
  })

  describe('guttergame', function() {
    it('can roll a gutter game' , function() {
    for (var i = 0; i < 20; i++) {
      bowling.roll(0);
    }
    expect(bowling.score()).toBe(0)
    })
  })
  // describe('frames', function() {
  //   it('can change frames after 2 rolls', function() {
  //     bowling.rollFrame.length = 2
  //     expect(bowling.frame).toEqual(2)
  //   })
  // })

})

