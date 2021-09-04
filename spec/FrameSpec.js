'use strict';

describe('Frame', () => {

  let calculateScore;
  let frame;

  beforeEach(() => {
    calculateScore = new CalculateScore();
    frame = new Frame();
  });

  describe('new', () => {
    it('is expected to be an instance of Frame', () => {
      expect(frame).toBeInstanceOf(Frame);
    });

    it('is expected to have an Array attribute', () => {
      expect(frame).toEqual(jasmine.objectContaining({_bowls: []}));
    })
  });

  describe('bowls', () => {
    it('is expected to return an array', () => {
      expect(frame.bowls()).toEqual([]);
    })
  })

  describe('add bowl', () => {
    it('is expected to add the bowl to the _bowls array', () => {
      frame.addBowl(5);
      expect(frame.bowls()).toContain(5);
    })

    it('is expected to start over if two bowls have been made', () => {
      frame.addBowl(5);
      frame.addBowl(5);
      expect(frame.bowls()).toContain(5, 5);
      frame.addBowl(8);
      expect(frame.bowls()).toContain(8);
    })

    it('is expected to throw error if the sum of bowls is greater than 10', () => {
      frame.addBowl(5);
      expect( () => { frame.addBowl(6) }).toThrow(new Error('Sum of bowls for this frame cannot exceed 10'));
    })

    it('cannot add negative numbers to the _bowls array', () => {
      expect( () => { frame.addBowl(-5) }).toThrow(new Error('Cannot input negative numbers'));
    })
  })

})