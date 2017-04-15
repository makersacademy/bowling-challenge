console.log('frameSpec file has been required correctly')

'use strict';

describe('Frame', function (){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  })

  describe('Should be initialized', function () {
    it('with zero score', function (){
      expect(frame.score).toEqual(0);
    });
  });

  it('adds to score', function (){
    frame.addToScore(8)
    expect(frame.score).toEqual(8);
  });

  it('a player can bowl a random number between 0-10', function (){
    var pins = 10
    expect(frame.bowl(pins) >= 0 && frame.bowl(pins) <= 10).toBeTruthy();
  });

  it('resets pins to 10', function () {
    var pins = 10
    frame.bowl(pins);
    frame.resetFrame()
    expect(frame.pins).toEqual(10);
  });

  describe('Players number of bowls', function () {
    it('returns true if its a players first bowl', function () {
      expect(frame.isFirstBowl()).toEqual(true);
    });

    it('returns false if its NOT a players first bowl', function () {
      var pins = 10
      frame.bowl(pins);
      expect(frame.isFirstBowl()).toEqual(false);
    });
  });
});
