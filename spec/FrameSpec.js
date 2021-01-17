'use strict';

describe("Frame", () => {
  var frame; 

  beforeEach(function(){
    frame = new Frame();
  });

  describe("initialization", () => {
    
    it ("a frame should have a maximum score of 10", () => {
      expect(frame._MAX_SCORE).toEqual(10);
    });

    it ("should have an pin board to mark the no. of pins in each roll", () => {
      expect(frame.pinBoard).toEqual([])
    })
  });

  describe("check input", () => {
    it("should accept a positive integer between 0 and 10 as input", () => {
      expect(() => {
        frame.checkInput(1);
      }).not.toThrowError("Invalid input");
    })

    it("should throw an error otherwise", () => {
      expect(() => {
        frame.checkInput("string");
      }).toThrowError("Invalid input");
    });
  })

  describe("pinBoard", () => {

    it("should be updated with each roll", () => {
      frame.updatePinBoard(1);
      frame.updatePinBoard(2);
      expect(frame.pinBoard).toEqual([1,2]);
    })

    it("the sum of first and second rolls should not exceed 10", () => {
      frame.firstRoll = 5
      frame.secondRoll = 8
      expect(() => {
        frame.checkPinsTotal()
      }).toThrowError('the sum of two pins exceeds maximum');
    });

  })


  describe("pinsSum", () => {
    
    it("should return the sum of the two rolls", () => {
      frame.firstRoll = 3;
      frame.secondRoll = 5;
      expect(frame.pinsSum()).toBe(8);
    });
  });

  
});
