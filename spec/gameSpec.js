'use strict';

describe('Game', function() {

  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });
  
  it('is possible to start a new game', function() {
    expect(game).toEqual(game)
  });

  // it('begins a game with a score of zero', function(){
  //   expect(game.score).toEqual(0)
  // })

  it('is possible to add a frame to a game', function(){
    frame.roll(7);
    frame.roll(2);
    game.addFrame(frame);
    expect(game.frames).toEqual([frame])
  })


  // it('knows the current roll', function() {
  //   game.roll(3);
  //   game.roll(3);
  //   expect(game.currentRoll).toEqual(2)
  // })

  // it('stores bowls', function() {
  //   game.roll(2);
  //   game.roll(6);
  //   expect(game.rollSet).toEqual([2,6])
  // })

  // it('')

  // it('has a score of 3 if 3 pins are knocked down', function(){
  //   game.roll(3)
  //   expect(game.getScore()).toEqual(3)
  // })

  // it('has a score of 20 after 20 rolls of 1', function(){
  //   for (var i = 0; i < 20; i++) {
  //   game.roll(1) };
  //   expect(game.getScore()).toEqual(20)
  // })
  // describe('it accounts for a spare', function() {
  //   it('adds a bonus for a spare', function(){
  //     game.roll(6);
  //     game.roll(4);
  //     game.roll(2);
  //     expect(game.getScore()).toEqual(14)
  //   }) 
  // })
  
})
