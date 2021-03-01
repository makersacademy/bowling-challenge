'use strict';

describe('Feature Test:', function(){
  var game;
  var frame;
  var frame2;
  // var bonus;

  beforeEach(function() {
    game = new Game();
    game.inputBowl(3);
    game.inputBowl(5);
    frame = game.frames[0]
    game.inputBowl(3);
    game.inputBowl(5);
    frame2 = game.frames[1]
  });

  describe('#input.bowl', function() {
    it('inputting a bowl initializes a Frame to store rolls', function() {
      expect(frame).toEqual(jasmine.any(Frame));
      expect(frame.rolls).toEqual([3,5]);
    })

    it('frames count their number', function() {
      expect(frame.number).toEqual(1)
      expect(frame2.number).toEqual(2)
    })
  })

  describe('bonuses', function() {
    it('saves a status of 2 if strike', function(){
      game.inputBowl(10);
      expect(game.frames[2].bonus).toBe(2);
    })

    it('has a score of 300 for a perfect game', function() {
      game = new Game();
      for (let i = 0; i < 12; i++) {
        game.inputBowl(10);
      }
      expect(game._score).toBe(300);
    })
  })
})
