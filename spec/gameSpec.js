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
    it('adds two throws to score when first not a strike', function(){
      game.start()
      frame.throw_one(3)
      frame.throw_two(4)
      expect(game.frames).toEqual([[3,4]])
    })
    // it('starts a new frame on second throw if first throw a strike', function(){
    //   frame.throw(10)
    //   frame.throw(1)
    //   expect(frame.throws).toEqual([1])
    // })
    // it('sets is_strike to true if a strike', function(){
    //   frame.throw(10)
    //   expect(frame.is_strike).toEqual(true)
    // })
    // it('sets is_spare to true if a spare', function() {
    //   frame.throw(3)
    //   frame.throw(7)
    //   expect(frame.is_spare).toEqual(true)
    // })
  })

  // describe('.add_to_frames', function(){
  //   it('adds the frame object to the Game.frames attribute', function(){
  //     frame.throw(4)
  //     console.log(frame._game)
  //     frame.throw(3)
  //     console.log(frame._game)
  //     expect(frame._game.frames[0].throws).toEqual([4,3])
  //   })
  // })
})
