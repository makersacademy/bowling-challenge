"use strict";

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('start a frames', function () {

    it('start with an empty frame', function () {
      expect(frame.rolls.length).toEqual(0);
    });

    it('starts with 0 scores', function () {
      expect(frame.score).toEqual(0);
      expect(frame.bonus).toEqual(0)
      expect(frame.strike).toEqual(false);
      expect(frame.spare).toEqual(false);
      expect(frame.firstRoll).toEqual(true);
    });
  });


  describe("recording scores", function () {

    it('record the number of pins', function () {
      frame.recordScore(5);
      expect(frame.rolls[0]).toBe(5);
      expect(frame.score).toBe(5);
    });

    it('can add points to score', function() {
      frame.points(1);
      expect(frame.score).toEqual(1)
    });

    it('add 10 points for strike', function() {
      frame.points(10);
      expect(frame.score).toEqual(10)
    });

    it('add 10 points for spare', function () {
      frame.points(10);
      expect(frame.score).toEqual(10)
    });

    it('firstRoll will be false after the First Roll', function() {
      frame.points(1);
      expect(frame.firstRoll).toEqual(false)
    });

    it('add 10 points for strike at First Roll', function() {
      frame.points(10);
      expect(frame.strike).toEqual(true)
    });

    it('add 10 points for spare at First Roll', function () {
      frame.points(5);
      frame.points(5);
      expect(frame.spare).toEqual(true)
    });
  });

});