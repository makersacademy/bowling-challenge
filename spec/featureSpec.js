'use strict';

describe('Feature Test:', function(){
  var game;
  var frame;
  var frame2;
  // var bonus;

  beforeEach(function() {
    game = new Game();
    game.input_bowl(3);
    game.input_bowl(5);
    frame = game.frames[0]
    game.input_bowl(3);
    game.input_bowl(5);
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
      game = new Game();
      game.input_bowl(10);
      expect(game.frames[0].bonus).toBe(2);
    })
  })
})
