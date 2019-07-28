'use strict';

describe ('Frame', function(){

  var frame;
  var game;
  beforeEach (function(){
    frame = new Frame;
    game = new Game;
  });

  describe('.roll', function() {
    it('adds the roll score to the .rolls attribute', function() {
      frame.roll(1)
      expect(frame.rolls).toEqual([1])
    })
    it('new frame starts after two rolls where no strike', function(){
      frame.roll(3)
      frame.roll(4)
      frame.roll(1)
      expect(frame.rolls).toEqual([1])
    })
    it('starts a new frame on second roll if first roll a strike', function(){
      frame.roll(10)
      frame.roll(1)
      expect(frame.rolls).toEqual([1])
    })
    it('sets isStrike to true if a strike', function(){
      frame.roll(10)
      expect(frame.isStrike).toEqual(true)
    })
    it('sets isSpare to true if a spare', function() {
      frame.roll(3)
      frame.roll(7)
      expect(frame.isSpare).toEqual(true)
    })
  })
})
