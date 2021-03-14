'use strict';

describe('Frame', function() {
  let frame;

  beforeEach(function() {
    frame = new Frame(1);
  });
  
  it('stores the frame number', function() {
    expect(frame.number).toEqual(1);
  });

  describe('addBowl', function() {
    it('adds the results of a bowl to the frame', function() {
      frame.addBowl(6, 1);

      expect(frame.bowls['1']).toEqual(6);
    });

    it('stores the result of both bowls in a normal frame', function() {
      frame.addBowl(5, 1);
      frame.addBowl(3, 2);

      expect(frame.bowls['1']).toEqual(5);
      expect(frame.bowls['2']).toEqual(3);
      expect(frame.score).toEqual(8);
    });

    it('marks a frame as complete if it is open', function() {
      frame.addBowl(5, 1);
      frame.addBowl(3, 2);

      expect(frame.complete).toEqual(true);
    });

    it('allows 2 bonus bowls if player scores a strike', function() {
      frame.addBowl(10, 1);

      expect(frame.bonusBowls).toEqual(2);
    });

    it('allows 1 bonus bowl if player scores a spare', function() {
      frame.addBowl(6, 1);
      frame.addBowl(4, 2);

      expect(frame.bonusBowls).toEqual(1);
    });

    it('accepts 3 bowls in frame 10', function() {
      let frame10 = new Frame(10);
      frame10.addBowl(10, 1);
      frame10.addBowl(3, 2);
      frame10.addBowl(2, 3);

      expect(frame10.complete).toEqual(true);
      expect(Object.keys(frame10.bowls).length).toEqual(3);
    });
  });

  describe('addBonusBowl', function() {
    it('adds the points from a bonus bowl to a previous frame', function() {
      frame.addBowl(10,1);
      frame.addBonusPoints(7);

      expect(frame.score).toEqual(17);
      expect(frame.bonusBowls).toEqual(1);
      expect(frame.complete).toEqual(false);
    });

    it('marks a frame as complete once bonus bowls have been assigned', function() {
      frame.addBowl(10,1);
      frame.addBonusPoints(8);
      frame.addBonusPoints(1);

      expect(frame.score).toEqual(19);
      expect(frame.bonusBowls).toEqual(0);
      expect(frame.complete).toEqual(true);
    });
  });
});

// debugging
// console.log(frame.number);
// console.log(frame.score);
// console.log(frame.bowls);
// console.log(Object.keys(frame.bowls).length);
// console.log(frame.complete);
// console.log(frame.bonusBowls);