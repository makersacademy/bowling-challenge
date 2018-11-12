'use strict';

describe('Bowling', function() {

  var game;
  var frame;
  beforeEach(function() {
    game = new Game();
  });

  it('gutter game', function() {
    frame  = new Frame();
    frame.rollTheball(1) * 20
    expect(game.game_status()).toEqual(20);
  });

  // it('will return score for a frame', function() {
  //   frame.rollTheball(1)
  //   frame.rollTheball(1)
  //   expect(frame.total()).toEqual(2);
  // });
  //
  // it('will return the frame I am on', function() {
  //   frame.rollTheball(1)
  //   frame.rollTheball(1)
  //   frame.rollTheball(1)
  //   frame.rollTheball(1)
  //   expect(frame.currentFrame()).toEqual(2);
  // })
  //
  // it('will indicate that I have a strike', function() {
  //   frame.rollTheball(10)
  //   expect(frame.strikeCount().length).toEqual(1);
  // })
  //
  // it('a strike will skip a frame', function() {
  //   frame.rollTheball(10)
  //   frame.rollTheball(1)
  //   expect(frame.currentFrame()).toEqual(2);
  // })
  //
  // // it('will indicate that I have a spare', function() {
  // //   frame.rollTheball(8)
  // //   frame.rollTheball(2)
  // //   expect(frame.spareCount().length).toEqual(1);
  // // })
});
