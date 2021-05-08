'use strict';

describe('Bowling', function() {
  let bowling;

  beforeEach(function() {
    bowling = new Bowling
  });

  describe('constructor', function() {
    it ('can start start the game with an empty score', function() {
      expect(bowling.message()).toEqual('You are currently on Frame 1, with a total score of 0.')
    })
  })

})

