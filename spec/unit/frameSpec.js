'use strict';

describe('Frame', () => {
  beforeEach(function () {
    frame = new Frame();
  });

  describe('#addRoll', () => {
    it ('allows user to add pins to total', () => {
      frame.addRoll(2);
      frame.addRoll(6);
      expect(frame.latestFrame).toEqual([2, 6])
    })

    it ('throws an error if entered invalid number of pins', () => {
      expect(function() {
        frame.addRoll(11)
      }).toThrowError(Error, 'Invalid number of pins');
    })
  });
});