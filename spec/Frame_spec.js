'use strict';

describe('Frame', function () {

  var frame

  beforeEach(function () {
    frame = new Frame();
  });

  describe('object is constructed with', function () {
    it('a roll counter of 0', function () {
      expect(frame.rollCounter).toEqual(0);
    });

    it('a roll score of 0', function () {
      expect(frame.rollsTotal).toEqual(0);
    });

    it('a first roll value of 0', function () {
      expect(frame.roll1).toEqual(0);
    });

    it('a second roll value of 0', function () {
      expect(frame.roll2).toEqual(0);
    });
  });

  describe('increments', function () {
    it('the roll counter on each roll', function () {
      frame.recordRolls(2);
      expect(frame.rollCounter).toEqual(1);
    });
    it('roll1 on the first roll', function () {
      frame.recordRolls(2);
      expect(frame.roll1).toEqual(2);
    });
    it('roll2 on the second roll', function () {
      frame.recordRolls(1);
      frame.recordRolls(7);
      expect(frame.roll2).toEqual(7);
    });

    it('the frame score on each roll', function () {
      frame.recordRolls(3);
      frame.recordRolls(4);
      expect(frame.rollsTotal).toEqual(7);
    });
  });

  describe('will not allow', function () {
    it('more than 2 rolls per frame', function () {
      frame.recordRolls(3);
      frame.recordRolls(4);
      expect(frame.recordRolls()).toEqual('No more rolls in this frame');
    });

    it('a rollScore > 10', function () {
      frame.recordRolls(5);
      expect(frame.recordRolls(7)).toEqual('Score can not be greater than 10');
    });

    it('a second roll if the first was a strike', function () {
      expect(frame.recordRolls(10)).toEqual('Wooo! You got a strike!');

    });

  });



});
