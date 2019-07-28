'use strict';

describe ('Game', function(){

  var game;

  beforeEach (function(){
    game = new Game
  });

  describe('.start', function() {
    it('starts with an empty frames array', function() {
      game.start()
      expect(game.frames).toEqual([])
    })
    it('adds two rolls to score when first not a strike', function(){
      game.start()
      frame.roll_one(3)
      frame.roll_two(4)
      expect(game.frames).toEqual([[3,4]])
    })
    // it('starts a new frame on second roll if first roll a strike', function(){
    //   frame.roll(10)
    //   frame.roll(1)
    //   expect(frame.rolls).toEqual([1])
    // })
    // it('sets is_strike to true if a strike', function(){
    //   frame.roll(10)
    //   expect(frame.is_strike).toEqual(true)
    // })
    // it('sets is_spare to true if a spare', function() {
    //   frame.roll(3)
    //   frame.roll(7)
    //   expect(frame.is_spare).toEqual(true)
    // })
  })

  // describe('.add_to_frames', function(){
  //   it('adds the frame object to the Game.frames attribute', function(){
  //     frame.roll(4)
  //     console.log(frame._game)
  //     frame.roll(3)
  //     console.log(frame._game)
  //     expect(frame._game.frames[0].rolls).toEqual([4,3])
  //   })
  // })
})
