'use strict';

describe('Frame', () => {

  let frame;

  beforeEach(() => {
    frame = new Frame();
  })

  describe('new', () => {
    it('is expected to be an instance of Frame', () => {
      expect(frame).toBeInstanceOf(Frame);
    });

    it('is expected to have an Array attribute', () => {
      expect(frame).toEqual(jasmine.objectContaining({_bowls: []}));
    })
  });

  describe('add bowl', () => {
    it('is expected to add the bowl to the _bowls array', () => {
      frame.addBowl(5);
      expect(frame._bowls).toContain(5);
    })

    it('is expected to throw error if the sum of bowls is greater than 10', () => {
      frame.addBowl(5);
      expect( () => { frame.addBowl(6) }).toThrow(new Error('Sum of bowls for this frame cannot exceed 10'));
    })

    it('is expected to throw error if adding more than two bowls', () => {
      frame.addBowl(5)
      frame.addBowl(2)
      expect( () => { frame.addBowl(2) }).toThrow(new Error('Limit of bowls for this frame has been reached'))
    })

    it('cannot add negative numbers to the _bowls array', () => {
      expect( () => { frame.addBowl(-5) }).toThrow(new Error('Cannot input negative numbers'));
    })
  })

})