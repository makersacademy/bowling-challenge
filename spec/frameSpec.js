'use strict';

describe ('Frame', function(){

  var frame;
  var game;
  var newFrame
  beforeEach (function(){
    frame = new Frame;
    game = new Game
  });

  it('check set up at start', function() {
    newFrame = new Frame
    expect(newFrame.rolls).toEqual([]);
    expect(newFrame.score).toEqual(0);
    expect(newFrame.is_strike).toEqual(false);
    expect(newFrame.is_spare).toEqual(false);
    expect(newFrame.is_complete).toEqual(false);
  })

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
    it('sets is_strike to true if a strike', function(){
      frame.roll(10)
      expect(frame.is_strike).toEqual(true)
    })
    it('sets is_spare to true if a spare', function() {
      frame.roll(3)
      frame.roll(7)
      expect(frame.is_spare).toEqual(true)
    })
  })

  describe('.add_to_frames', function(){
    it('adds the frame object to the Game.frames attribute', function(){
      frame.roll(4)
      console.log(frame._game)
      frame.roll(3)
      console.log(frame._game)
      expect(frame._game.frames[0].rolls).toEqual([4,3])
    })
  })
})
