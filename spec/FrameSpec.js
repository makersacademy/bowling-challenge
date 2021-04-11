// import Frame from '../src/Frame.js'

describe("Frame", function() {
  // const Frame = require('../src/Frame.js');
  var testFrame;

  beforeEach(function() {
    testFrame = new Frame();
  });

  describe("#enterRoll", function() {
    it("will return a score into the frame information", function() {
      expect(testFrame.enterRoll(5)).toEqual(5);
    });
  });

  describe("#isComplete", function() {
    it("will return true or false if the frame is over", function() {
      testFrame.enterRoll(5)
      testFrame.enterRoll(5)

      expect(testFrame.isComplete()).toEqual(true)
    })
  })

  describe("#updateTotal", function() {
    it("will update the total score for the frame", function() {
      testFrame.enterRoll(5)

      expect(testFrame.updateCurrentTotal()).toEqual(5)
    });
  });

  describe("#isFirstRollComplete", function() {
    it("returns true if it is the first roll of the frame", function() {
      testFrame.enterRoll(5)
      expect(testFrame.isFirstRollComplete()).toEqual(true)
    })
  })
});
