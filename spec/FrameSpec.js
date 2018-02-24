'use strict';

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it('starts with a bowl index of 1', function() {
    expect(frame.bowlIndex).toEqual(1);
  });

  describe('bowl', function() {

    beforeEach(function() {
      frame.bowl(7);
    });

    it('adds score of each bowl to a bowls array', function() {
      expect(frame.bowls).toContain(7);
    });

    it('increases the bowl index by 1', function() {
      expect(frame.bowlIndex).toEqual(2);
    });
  });

  describe('isStrike', function() {
    it('confirms when a bowl is a strike', function() {
      frame.bowl(10);
      expect(frame.isStrike()).toEqual(true);
    });
  });

  describe('isSpare', function() {
    it('confirms when a bowl is a spare', function() {
      frame.bowl(5);
      frame.bowl(5);
      expect(frame.isSpare()).toEqual(true);
    });
  });

});
