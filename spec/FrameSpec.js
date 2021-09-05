/*jshint esversion: 6 */

describe('Frame', () => {

  'use strict';

  let frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe('new', () => {
    it('is expected to be an instance of Frame', () => {
      expect(frame).toBeInstanceOf(Frame);
    });

    it('is expected to have an Array attribute', () => {
      expect(frame).toEqual(jasmine.objectContaining({_bowls: []}));
    });
  });

  describe('bowls', () => {
    it('is expected to return an array', () => {
      expect(frame.bowls()).toEqual([]);
    });
  });

  describe('add bowl', () => {
    it('is expected to add the bowl to the _bowls array', () => {
      frame.addBowl(5);
      expect(frame.bowls()).toEqual([5]);
    });

    it('is expected to start over if two bowls have been made', () => {
      frame.addBowl(5);
      frame.addBowl(5);
      expect(frame.bowls()).toEqual([5, 5]);
      frame.addBowl(8);
      expect(frame.bowls()).toEqual([8]);
    });

    it('is expected to allow three bwols on the 10th frame', () => {
      frame._frameCount = 10;
      frame.addBowl(5);
      frame.addBowl(5);
      frame.addBowl(5);
      expect(frame.bowls()).toEqual([5, 5, 5]);
    });

    it('cannot add negative numbers to the _bowls array', () => {
      expect( () => { frame.addBowl(-5); }).toThrow(new Error('Cannot input negative numbers'));
    });
  });

});