'use strict';

describe('Frame', () => {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('constructor', () => {

    it('has property rolls, set equal to an empty array', () => {
      expect(frame.rolls()).toEqual([]);
    });

    it('has property score, set equal to 0', () => {
      expect(frame.score()).toEqual(0);
    });

    it('has property inPlay, set to true by default', () => {
      expect(frame.isInPlay()).toBe(true);
    });

    it('has property frame10, set to false by default', () => {
      expect(frame.isFrame10()).toBe(false);
    });

    it('has property frame10, which can be set to true', () => {
      frame = new Frame(true);
      expect(frame.isFrame10()).toBe(true);
    });

  });

  describe('knocked', () => {

    it('adds number of knocked pins to rolls property', () => {
      frame.knocked(3);
      expect(frame.rolls()).toEqual([3])
    });

    it('adds number of knocked pins to score property', () => {
      frame.knocked(3);
      expect(frame.score()).toEqual(3)
    });

    it('closes frame play after two rolls', () => {
      frame.knocked(3);
      frame.knocked(3);
      expect(frame.isInPlay()).not.toBe(true);
    });

    it('closes frame play after strike', () => {
      frame.knocked(10);
      expect(frame.isInPlay()).not.toBe(true);
    });

  });

  describe('bonus rolls', () => {

    it('frame objects respond to isStrike function', () => {
      frame.knocked(10);
      expect(frame.isStrike()).toEqual(true)
    });

    it('frame objects respond to isSpare function', () => {
      frame.knocked(5);
      frame.knocked(5);
      expect(frame.isSpare()).toEqual(true)
    });

    it('bonus points can be added to the objects score property', () => {
      frame.pointBonus(5);
      expect(frame.rolls()).toEqual([])
      expect(frame.score()).toEqual(5)
    });

  });

});